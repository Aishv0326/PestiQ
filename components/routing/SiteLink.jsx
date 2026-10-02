'use client';
import {Link} from 'react-router-dom';
// Keep phone/email/external links native; use History API routing for internal URLs.
export function SiteLink({href,children,...props}){
 const external=/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href||'');
 return external?<a href={href} {...props}>{children}</a>:<Link to={href||'/'} {...props}>{children}</Link>;
}
