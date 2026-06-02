import { ArrowRight, MessageCircle, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { differentials, process, plans, gallery, whatsappLink, stats, miniProofs } from '../data/siteData';


  export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy" data-reveal="true">
            <span className="eyebrow">Estrutura preparada para quem quer evoluir</span>

            <h1>
              <span>TREINE</span>
              <span>COM</span>
              <span>RESULTADO.</span>
            </h1>

            <p>
              Modelo premium criado para academias que querem transmitir mais força,
              organização e confiança logo nos primeiros segundos — com foco em gerar
              contato direto pelo WhatsApp.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <MessageCircle size={20} />
                Começar pelo WhatsApp
              </a>

              <Link to="/estrutura" className="btn btn-ghost">
                <Play size={19} />
                Ver estrutura
              </Link>
            </div>

            <div className="proof-row">
              {miniProofs.map(({ icon: Icon, text }) => (
                <span key={text}>
                  <Icon size={17} /> {text}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal="true">
            <div className="training-card main-card">
              <span className="scan-line" />

              <div className="plate plate-1" />
              <div className="plate plate-2" />

              <div className="athlete-silhouette" />

              <div className="visual-label">
                FOCO • DIREÇÃO • EVOLUÇÃO
              </div>
            </div>

            <div className="float-card card-a">
              <strong>Treino preparado</strong>
              <small>conforme sua necessidade</small>
            </div>

            <div className="float-card card-b">
              <strong>Acompanhamento</strong>
              <small>mais direção e segurança</small>
            </div>

            <div className="float-card card-c">
              <strong>Estrutura completa</strong>
              <small>ambiente preparado para evoluir</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        {stats.map((item) => (
          <div className="stat" data-reveal="true" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Diferenciais</span>

          <h2>
            Mais do que treinar.
            <br />
            Um ambiente preparado para evolução.
          </h2>

          <p>
            O modelo foi pensado para transmitir organização, energia e presença
            profissional logo no primeiro acesso.
          </p>
        </div>

        <div className="cards-grid">
          {differentials.map(({ icon: Icon, title, text }) => (
            <article
              className="premium-card"
              data-reveal="true"
              key={title}
            >
              <Icon className="card-icon" />

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="impact-panel" data-reveal="true">
          <span>RESULTADO COMEÇA NA DECISÃO</span>

          <h2>
            O primeiro passo
            <br />
            começa hoje.
          </h2>
        </div>

        <div className="split-content" data-reveal="true">
          <span className="eyebrow">Treino preparado</span>

          <h2>
            Cada pessoa possui um objetivo diferente.
          </h2>

          <p>
            O foco do modelo é transmitir uma abordagem mais próxima e humana,
            mostrando que o treino pode ser preparado conforme a rotina,
            necessidade e objetivo de cada aluno.
          </p>

          <a
            href={whatsappLink}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            Falar sobre planos <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Como funciona</span>

          <h2>
            Um processo simples
            <br />
            para começar.
          </h2>
        </div>

        <div className="timeline">
          {process.map(([number, title, text]) => (
            <div
              className="timeline-item"
              data-reveal="true"
              key={number}
            >
              <strong>{number}</strong>

              <h3>{title}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

    <section className="section">
  <div className="section-head" data-reveal="true">
    <span className="eyebrow">Estrutura</span>

    <h2>
      Visual preparado para valorizar
      <br />
      a academia no digital.
    </h2>
  </div>

  <div className="gallery-grid">
    {gallery.map((item, index) => {
      const images = [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop'
      ];

      return (
        <div
          className={`gallery-item item-${index + 1}`}
          data-reveal="true"
          key={item}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span>{item}</span>
        </div>
      );
    })}
  </div>
</section>

      <section className="section plans-preview">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Planos</span>

          <h2>
            Planos preparados para
            <br />
            diferentes objetivos.
          </h2>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
              data-reveal="true"
              key={plan.name}
            >
              <span>{plan.tag}</span>

              <h3>{plan.name}</h3>

              <p>{plan.text}</p>

              {plan.benefits.map((b) => (
                <small key={b}>
                  <CheckCircle2 size={16} /> {b}
                </small>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-full"
              >
                Consultar pelo WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" data-reveal="true">
        <span className="eyebrow">Comece agora</span>

        <h2>COMECE HOJE.</h2>

        <p>
          Treine com acompanhamento, direção e uma estrutura preparada para sua evolução.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <MessageCircle size={20} />
          Chamar no WhatsApp
        </a>
      </section>
    </>
  );
}