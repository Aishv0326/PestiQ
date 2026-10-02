import './globals.css';
export const metadata = {
 title:{default:'PestiQ | Thoughtful pest control for homes & businesses',template:'%s | PestiQ'},
 description:'Explore targeted pest management for your home or business. Inspect, treat and monitor with PestiQ. Website prototype with sample business details.',
 robots:{index:false,follow:false},
 openGraph:{title:'PestiQ | Space to live. Peace of mind.',description:'A considered approach to pest control for homes and businesses.',type:'website'},
 icons:{icon:'/favicon.svg'},
};
export default function RootLayout({children}) {return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/></head><body>{children}</body></html>}
