import {Header,Footer,ServiceCards,InspectionForm} from '../Site';
import {services,routeInfo} from '../../data/business';
import {serviceDetails} from '../../data/service-details';
import ServiceDetail from '../services/ServiceDetail';
import {SiteLink} from './SiteLink';
export default function SecondaryPage({page,serviceSlug}){
 const service=serviceSlug?services.find(s=>s.slug===serviceSlug):null;
 const info=page?routeInfo[page]:null;
 if(service&&serviceDetails[service.slug])return <ServiceDetail service={serviceDetails[service.slug]}/>;
 if(!info)return <><Header/><main id="main" className="container section"><span className="eyebrow">404</span><h1>Let’s get you back home.</h1><p>We couldn’t find that page.</p><SiteLink className="button" href="/">Back to PestiQ</SiteLink></main><Footer/></>;
 return <><Header/><main id="main"><section className="route-intro"><div className="container"><SiteLink className="breadcrumb" href="/">Home / {page}</SiteLink><span className="eyebrow">EXPLORE PESTIQ</span><h1>{info.title}</h1><p>{info.description}</p>{page!=='contact'&&<SiteLink className="button" href={'/#'+info.anchor}>Explore on the homepage</SiteLink>}</div></section>{page==='services'?<section className="section"><div className="container"><ServiceCards/></div></section>:page==='contact'?<InspectionForm/>:<section className="section"><div className="container route-note"><h2>Built around your space.</h2><p>The homepage introduces our approach. This page is a foundation for the next design phase, when verified business details and a complete {page} experience will be added.</p><SiteLink className="text-link" href={'/#'+info.anchor}>View the {page} section</SiteLink></div></section>}</main><Footer/></>;
}
