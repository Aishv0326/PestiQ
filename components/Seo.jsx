// Enable only after client verification. Never publish sample reviews or claims as structured data.
export function BusinessStructuredData({business,origin}) {
 if (!business.verified || !origin) return null;
 const data={'@context':'https://schema.org','@type':'LocalBusiness',name:business.name,url:origin,telephone:business.phone,email:business.email};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;
}
