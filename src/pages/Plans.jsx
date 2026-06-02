import PageHero from '../components/PageHero';
import { plans, whatsappLink } from '../data/siteData';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function Plans() {
  return (
    <>
      <PageHero
        eyebrow="Planos"
        title="Escolha o plano e comece sua evolução."
        text="Opções apresentadas com visual premium e chamada direta para atendimento pelo WhatsApp."
      />

      <section className="section">
        <div className="plans-grid plans-page">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
              data-reveal="true"
              key={plan.name}
            >
              <span>{plan.tag}</span>

              <h3>{plan.name}</h3>

              <p>{plan.text}</p>

              {plan.benefits.map((benefit) => (
                <small key={benefit}>
                  <CheckCircle2 size={16} />
                  {benefit}
                </small>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-full"
              >
                <MessageCircle size={18} />
                Consultar pelo WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}