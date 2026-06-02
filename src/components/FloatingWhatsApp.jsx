import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/siteData';

export default function FloatingWhatsApp() {
  return <a className="float-whats" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={24} /></a>;
}
