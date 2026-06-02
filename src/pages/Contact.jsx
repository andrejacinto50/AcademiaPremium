import { useState } from 'react';
import PageHero from '../components/PageHero';
import { contactCards, whatsappLink } from '../data/siteData';
import { MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    objective: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  function maskPhone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === 'phone' ? maskPhone(value) : value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  }

  function validateForm() {
    const newErrors = {};
    const phoneNumbers = form.phone.replace(/\D/g, '');

    if (!form.name.trim()) {
      newErrors.name = 'Informe seu nome.';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Informe seu WhatsApp.';
    } else if (phoneNumbers.length < 10) {
      newErrors.phone = 'Informe um WhatsApp válido.';
    }

    if (!form.objective) {
      newErrors.objective = 'Selecione seu objetivo principal.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Conte rapidamente o que você busca.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const message = `
Olá! Vim pelo site e quero mais informações.

Nome: ${form.name}
WhatsApp: ${form.phone}
Objetivo: ${form.objective}
Mensagem: ${form.message}
    `.trim();

    const url = `https://api.whatsapp.com/send?phone=5548991087702&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Pronto para começar?"
        text="Página de conversão com WhatsApp, horário, localização e formulário visual para gerar mais contatos."
      />

      <section className="section contact-grid">
        <div className="contact-cards">
          {contactCards.map(({ icon: Icon, title, text }) => (
            <article className="premium-card" data-reveal="true" key={title}>
              <Icon className="card-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <form className="contact-form" data-reveal="true" onSubmit={handleSubmit}>
          <span className="eyebrow">Formulário modelo</span>

          <h2>Solicitar informações</h2>

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small className="form-error">{errors.name}</small>}

          <input
            type="tel"
            name="phone"
            placeholder="Seu WhatsApp"
            value={form.phone}
            onChange={handleChange}
            maxLength={15}
          />
          {errors.phone && <small className="form-error">{errors.phone}</small>}

          <select
            name="objective"
            value={form.objective}
            onChange={handleChange}
          >
            <option value="" disabled>
              Objetivo principal
            </option>
            <option value="Ganhar massa">Ganhar massa</option>
            <option value="Emagrecer">Emagrecer</option>
            <option value="Saúde e rotina">Saúde e rotina</option>
            <option value="Condicionamento">Condicionamento</option>
          </select>
          {errors.objective && (
            <small className="form-error">{errors.objective}</small>
          )}

          <textarea
            name="message"
            placeholder="Conte rapidamente o que você busca"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <small className="form-error">{errors.message}</small>}

          <button type="submit" className="btn btn-full">
            <Send size={18} />
            Enviar pelo WhatsApp
          </button>
        </form>
      </section>

      <section className="final-cta" data-reveal="true">
        <h2>FALE COM A ACADEMIA.</h2>

        <p>CTA final fixando o WhatsApp como principal canal de conversão.</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <MessageCircle size={20} />
          Chamar agora
        </a>
      </section>
    </>
  );
}