import {services,routeInfo} from '../../data/business';
import {serviceDetails} from '../../data/service-details';
import {siteOrigin} from '../../data/seo';
export function routeMetadata(pathname){
 const parts=pathname.split('/').filter(Boolean);
 if(!parts.length)return {title:'PestiQ | Thoughtful pest control for homes & businesses',description:'Explore targeted pest management for your home or business. Inspect, treat and monitor with PestiQ. Website prototype with sample business details.',canonical:siteOrigin+'/',label:'Home'};
 const service=parts.length===2&&parts[0]==='services'?services.find(s=>s.slug===parts[1]):null;
 const detail=service&&serviceDetails[service.slug];
 const info=parts.length===1?routeInfo[parts[0]]:null;
 const title=detail?.metadata.title||service?.title||info?.title||'Page not found';
 return {title:title+' | PestiQ',description:detail?.metadata.description||service?.text||info?.description||'The requested PestiQ page could not be found.',canonical:siteOrigin+pathname,label:service?.title||(info?parts[0]:'Page not found')};
}
