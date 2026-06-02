import { Camera, Dumbbell, MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localização, instragam, whatsappLink } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">
          <Dumbbell />
          <strong>Modelo Academia Premium</strong>
        </div>

        <p>
          Modelo criado para apresentar uma academia local com visual forte,
          moderno e focado em conversão pelo WhatsApp.
        </p>
      </div>

      <div className="footer-links">
        <strong>Navegação</strong>

        <Link to="/">Início</Link>
        <Link to="/estrutura">Estrutura</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/contato">Contato</Link>
      </div>

      <div className="footer-links">
        <strong>Contato</strong>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <a href={instragam} target="_blank" rel="noreferrer">
          <Camera size={18} />
          Instagram
        </a>

        <a href={localização} target="_blank" rel="noreferrer">
          <MapPin size={18} />
          Localização
        </a>
      </div>
    </footer>
  );
}