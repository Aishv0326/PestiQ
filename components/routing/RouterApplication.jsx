'use client';
import {useEffect,useLayoutEffect,useRef} from 'react';
import {BrowserRouter,StaticRouter,Routes,Route,useLocation,useNavigationType} from 'react-router-dom';
import HomePage from '../HomePage';
import SecondaryPage from './SecondaryPage';
import {services,routeInfo} from '../../data/business';
import {routeMetadata} from './routeMetadata';
import './navigation.css';
const useClientLayoutEffect=typeof window==='undefined'?useEffect:useLayoutEffect;
export function AppRoutes(){const location=useLocation();return <><RouteEffects/><Routes location={location}><Route path="/" element={<HomePage/>}/>{Object.keys(routeInfo).map(page=><Route key={page} path={'/'+page} element={<SecondaryPage key={page} page={page}/>}/>)}{services.map(s=><Route key={s.slug} path={'/services/'+s.slug} element={<SecondaryPage key={s.slug} serviceSlug={s.slug}/>}/>)}<Route path="*" element={<SecondaryPage/>}/></Routes></>}
function RouteEffects(){
 const location=useLocation(),type=useNavigationType();
 const positions=useRef(new Map()),previousPath=useRef(null);
 const metadata=routeMetadata(location.pathname);
 useEffect(()=>{
  document.title=metadata.title;
  const setMeta=(property,content,isProperty=false)=>{
   const attribute=isProperty?'property':'name';let nodes=[...document.head.querySelectorAll(`meta[${attribute}="${property}"]`)];
   if(!nodes.length){const node=document.createElement('meta');node.setAttribute(attribute,property);document.head.appendChild(node);nodes=[node]}
   nodes.forEach(node=>node.setAttribute('content',content));
  };
  setMeta('description',metadata.description);setMeta('og:title',metadata.title,true);setMeta('og:description',metadata.description,true);setMeta('og:url',metadata.canonical,true);setMeta('og:type','website',true);
  let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}canonical.href=metadata.canonical;
 },[metadata.title,metadata.description,metadata.canonical]);
 useClientLayoutEffect(()=>{
  const old=window.history.scrollRestoration;window.history.scrollRestoration='manual';
  return()=>{window.history.scrollRestoration=old};
 },[]);
 useClientLayoutEffect(()=>{
  let firstFrame,secondFrame;
  const saved=positions.current.get(location.key);
  const shouldFocus=previousPath.current!==location.pathname;
  previousPath.current=location.pathname;
  const restore=()=>{
   if(type==='POP'&&saved)window.scrollTo({left:saved.x,top:saved.y,behavior:'instant'});
   else if(location.hash){
    let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{id=location.hash.slice(1)}
    const target=document.getElementById(id);if(target)target.scrollIntoView({behavior:'instant',block:'start'});else window.scrollTo({left:0,top:0,behavior:'instant'});
   }else window.scrollTo({left:0,top:0,behavior:'instant'});
   if(shouldFocus&&!location.hash){const target=document.querySelector('main h1')||document.getElementById('main');if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true})}}
  };
  firstFrame=requestAnimationFrame(()=>{secondFrame=requestAnimationFrame(restore)});
  const record=()=>positions.current.set(location.key,{x:window.scrollX,y:window.scrollY});
  window.addEventListener('scroll',record,{passive:true});
  return()=>{cancelAnimationFrame(firstFrame);if(secondFrame)cancelAnimationFrame(secondFrame);record();window.removeEventListener('scroll',record)};
 },[location.key,location.pathname,location.hash,type]);
 return <span className="route-announcement" role="status" aria-live="polite" aria-atomic="true">{metadata.label} page</span>;
}
export default function RouterApplication({initialPath='/'}){
 // Server rendering preserves content and route metadata for direct URLs and SEO.
 // The browser takes over with React Router's History API navigation after hydration.
 return typeof window==='undefined'?<StaticRouter location={initialPath}><AppRoutes/></StaticRouter>:<BrowserRouter><AppRoutes/></BrowserRouter>;
}
