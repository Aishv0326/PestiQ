import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdir} from 'node:fs/promises';
import {Window} from 'happy-dom';
import React,{act} from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
const require=createRequire(import.meta.url);
const esbuild=await import(require.resolve('esbuild',{paths:[require.resolve('vite')]}));
await mkdir('.sites-runtime',{recursive:true});
await esbuild.build({entryPoints:['components/routing/RouterApplication.jsx'],outfile:'.sites-runtime/navigation-test-app.mjs',bundle:true,platform:'node',format:'esm',jsx:'automatic',packages:'external',loader:{'.css':'empty'}});
const win=new Window({url:'https://pestiq.example/'});
for(const key of ['window','document','navigator','HTMLElement','Element','Node','Event','MouseEvent','KeyboardEvent','PopStateEvent'])Object.defineProperty(globalThis,key,{configurable:true,value:key==='window'?win:win[key]});
globalThis.requestAnimationFrame=win.requestAnimationFrame.bind(win);globalThis.cancelAnimationFrame=win.cancelAnimationFrame.bind(win);
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
class IntersectionObserver{constructor(callback){this.callback=callback}observe(target){this.callback([{target,isIntersecting:true}])}disconnect(){}}
globalThis.IntersectionObserver=IntersectionObserver;
let y=0,scrolledAnchor=null;Object.defineProperty(win,'scrollY',{get:()=>y});Object.defineProperty(win,'scrollX',{get:()=>0});
win.scrollTo=options=>{y=options.top||0;win.dispatchEvent(new win.Event('scroll'))};
win.HTMLElement.prototype.scrollIntoView=function(){scrolledAnchor=this.id;y=850;win.dispatchEvent(new win.Event('scroll'))};
const {default:RouterApplication,AppRoutes}=await import('../.sites-runtime/navigation-test-app.mjs');
const settle=()=>new Promise(resolve=>setTimeout(resolve,60));
const container=win.document.createElement('div');win.document.body.appendChild(container);const root=createRoot(container);
await act(async()=>{root.render(React.createElement(RouterApplication,{initialPath:'/'}));await settle()});
const click=async el=>{assert.ok(el,'Link exists');const event=new win.MouseEvent('click',{bubbles:true,cancelable:true,button:0});await act(async()=>{el.dispatchEvent(event);await settle()});assert.ok(event.defaultPrevented,'Internal link prevents document reload');await act(settle)};
const link=(selector)=>win.document.querySelector(selector);
const checkRoute=(path)=>{assert.equal(win.location.pathname,path);assert.equal(win.document.querySelectorAll('main').length,1);assert.ok(win.document.querySelector('main h1'));assert.equal(new URL(win.document.querySelector('link[rel="canonical"]').href).pathname,path)};
let checks=0;const pass=name=>{checks++;console.log('PASS '+name)};
const navPaths=['/about','/services','/residential','/commercial','/offers','/contact'];
for(const path of navPaths){await click(link(`nav[aria-label="Main navigation"] a[href="${path}"]`));checkRoute(path);assert.equal(link(`nav[aria-label="Main navigation"] a[href="${path}"]`).getAttribute('aria-current'),'page');assert.equal(y,0);pass('navbar '+path+' / active state / top scroll');await click(link('.header .logo'));checkRoute('/');}
pass('logo returns home from all navbar destinations');
await click(link('.header-book'));checkRoute('/contact');assert.ok(link('form'));pass('header inspection CTA opens contact form');
await click(link('.header .logo'));await click(link('.hero-actions .button'));checkRoute('/contact');pass('home hero inspection CTA');
await click(link('.header .logo'));await click(link('.mobile-actions a:last-child'));checkRoute('/contact');pass('mobile inspection CTA');
await click(link('.header .logo'));
const {services}=await import('../data/business.js');
for(const s of services){await click(link(`.service-card[href="/services/${s.slug}"]`));checkRoute('/services/'+s.slug);assert.equal(link('nav[aria-label="Main navigation"] a[href="/services"]').getAttribute('aria-current'),'page');if(s.slug==='termite-control')assert.ok(link('.service-detail'));pass('service card /services/'+s.slug);await click(link('.header .logo'));}
for(const [selector,path] of [['.property-card[href="/residential"]','/residential'],['.property-card[href="/commercial"]','/commercial'],['.offer .button','/contact'],['.service-bottom .text-link','/contact'],['.footer-bottom a','/contact']]){
 await click(link('.header .logo'));await click(link(selector));checkRoute(path);pass('CTA '+selector);
}
await click(link('.header .logo'));await click(link('.footer .logo'));checkRoute('/');pass('footer logo');
await click(link('.footer-grid a[href="/services/bed-bug-treatment"]')||link('.footer-grid a[href="/services/termite-control"]'));assert.ok(win.location.pathname.startsWith('/services/'));pass('footer service navigation');
await click(link('.header .logo'));
await click(link('.service-card[href="/services/termite-control"]'));await click(link('.sd-hero-actions .button'));assert.equal(win.location.hash,'#service-contact');assert.equal(scrolledAnchor,'service-contact');pass('termite inspection CTA targets dedicated form');
await click(link('.sd-related-grid a'));assert.equal(win.location.pathname,'/services/cockroach-control');pass('related service link');
await click(link('.header .logo'));await click(link('.hero-actions .button-glass'));assert.equal(win.location.hash,'#services');assert.equal(scrolledAnchor,'services');pass('same-page section navigation');
await click(link('nav[aria-label="Main navigation"] a[href="/about"]'));win.scrollTo({top:480});await click(link('nav[aria-label="Main navigation"] a[href="/services"]'));assert.equal(y,0);
await act(async()=>{win.history.back();await settle()});await act(settle);checkRoute('/about');assert.equal(y,480);pass('History Back restores route and saved scroll');
await act(async()=>{win.history.forward();await settle()});await act(settle);checkRoute('/services');assert.equal(y,0);pass('History Forward restores route');
const open=async()=>{await act(async()=>{link('.menu-toggle').dispatchEvent(new win.MouseEvent('click',{bubbles:true}));await settle()});assert.equal(link('.menu-toggle').getAttribute('aria-expanded'),'true');assert.equal(win.document.activeElement,link('nav[aria-label="Main navigation"] a'));};
await open();pass('mobile menu opens and focuses first link');
await click(link('nav[aria-label="Main navigation"] a[href="/commercial"]'));checkRoute('/commercial');assert.equal(link('.menu-toggle').getAttribute('aria-expanded'),'false');pass('mobile route selection closes menu');
await open();await act(async()=>{win.document.dispatchEvent(new win.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));await settle()});assert.equal(link('.menu-toggle').getAttribute('aria-expanded'),'false');assert.equal(win.document.activeElement,link('.menu-toggle'));pass('mobile Escape closes menu and restores toggle focus');
await open();await act(async()=>{link('main').dispatchEvent(new win.Event('pointerdown',{bubbles:true}));await settle()});assert.equal(link('.menu-toggle').getAttribute('aria-expanded'),'false');pass('mobile outside pointer closes menu');
for(const path of ['/',...navPaths,...services.map(s=>'/services/'+s.slug)]){
 const html=renderToString(React.createElement(StaticRouter,{location:path},React.createElement(AppRoutes)));
 assert.ok(html.includes('<h1'));assert.ok(html.includes('href="/contact"'));if(path==='/services/termite-control')assert.ok(html.includes('sd-hero'));
 pass('direct-load server render '+path);
}
await act(async()=>root.unmount());
for(const path of services.map(s=>'/services/'+s.slug)){
 win.history.replaceState(null,'',path);
 const fresh=win.document.createElement('div');fresh.innerHTML=renderToString(React.createElement(StaticRouter,{location:path},React.createElement(AppRoutes)));win.document.body.replaceChildren(fresh);
 const errors=[];let hydrated;
 await act(async()=>{hydrated=hydrateRoot(fresh,React.createElement(RouterApplication,{initialPath:path}),{onRecoverableError:error=>errors.push(error.message)});await settle()});await act(settle);
 checkRoute(path);assert.deepEqual(errors,[]);
 assert.ok(link('.service-detail'));assert.ok(link('.sd-hero-photo img'));
 assert.equal(link('.route-intro'),null);assert.ok(!fresh.textContent.includes('A clear first step'));
 assert.equal(fresh.querySelectorAll('.sd-sign').length,4);
 assert.equal(fresh.querySelectorAll('.sd-process-step').length,3);
 assert.equal(fresh.querySelectorAll('.sd-faq-item').length,6);
 assert.equal(fresh.querySelectorAll('.sd-property-item').length,2);
 assert.ok(link('#service-contact form'));
 await click(link('.sd-hero-actions .button'));assert.equal(win.location.hash,'#service-contact');assert.equal(scrolledAnchor,'service-contact');
 const summary=link('.sd-faq-item summary');await act(async()=>{summary.click();await settle()});assert.ok(link('.sd-faq-item').open);
 await click(link('.header .logo'));checkRoute('/');
 pass('nested direct-load hydration and navigation '+path);
 await act(async()=>hydrated.unmount());
}
await win.happyDOM.abort();
console.log(`\n${checks} navigation integration checks passed in a simulated DOM. Real-browser visual/touch QA is separate.`);
