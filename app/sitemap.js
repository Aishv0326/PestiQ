import {siteOrigin} from '../data/seo';
import {services,routeInfo} from '../data/business';
export default function sitemap(){const origin=siteOrigin;return ['/',...Object.keys(routeInfo).map(s=>'/'+s),...services.map(s=>'/services/'+s.slug)].map(path=>({url:new URL(path,origin).href,changeFrequency:'monthly',priority:path==='/'?1:0.7}))}
