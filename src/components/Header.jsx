import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Dumbbell, MessageCircle } from 'lucide-react';
import { navItems, whatsappLink } from '../data/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark"><Dumbbell size={22} /></span>
        <span><strong>Modelo</strong><small>Academia Premium</small></span>
      </Link>

      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <a className="btn btn-small" href={whatsappLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
