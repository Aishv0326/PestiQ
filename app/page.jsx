import {siteOrigin} from '../data/seo';
export const metadata={alternates:{canonical:siteOrigin+'/'},openGraph:{url:siteOrigin+'/',title:'PestiQ | Space to live. Peace of mind.',description:'Thoughtful pest management for homes and businesses.',type:'website'}};
import RouterApplication from '../components/routing/RouterApplication';
export default function Home(){return <RouterApplication initialPath="/"/>}
