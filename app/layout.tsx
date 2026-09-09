import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'VaklioDent — Вашата практика, свързана',description:'Спокойно и свързано работно пространство за записване на часове и грижа за пациентите.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="bg"><body>{children}</body></html>}

