import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'VaklioDent — Your practice, connected',description:'A calm, connected workspace for dental appointments and client care.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
