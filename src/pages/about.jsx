import PageHero from '../components/PageHero';
import { ArrowRight, Target, HeartHandshake, Flame, Trophy } from 'lucide-react';
import { whatsappLink } from '../data/siteData';

const values = [
  {
    icon: Target,
    title: 'Direção',
    text:
      'Treinos preparados conforme o objetivo e a necessidade de cada pessoa.'
  },

  {
    icon: Flame,
    title: 'Constância',
    text:
      'Mais do que intensidade, a evolução vem da rotina e da continuidade.'
  },

  {
    icon: HeartHandshake,
    title: 'Acompanhamento',
    text:
      'Um ambiente que busca deixar o aluno mais seguro e motivado durante o treino.'
  },

  {
    icon: Trophy,
    title: 'Evolução',
    text:
      'O foco é ajudar cada pessoa a evoluir dentro da sua própria realidade.'
  }
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Mais do que treino. Uma rotina de evolução."
        text="Página criada para apresentar a história, os valores e o posicionamento da academia de forma mais humana e profissional."
      />

      <section className="section split-section">
        <div
          className="structure-visual"
          data-reveal="true"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.18)),
              url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span>ROTINA • FOCO • EVOLUÇÃO</span>
        </div>

        <div className="split-content" data-reveal="true">
          <span className="eyebrow">Nossa proposta</span>

          <h2>
            Uma academia preparada para quem quer evoluir de verdade.
          </h2>

          <p>
            O objetivo da academia vai além de apenas oferecer equipamentos.
            A proposta é criar um ambiente organizado, motivador e preparado
            para ajudar cada pessoa a evoluir dentro da sua rotina e do seu objetivo.
          </p>

          <p style={{ marginTop: '18px' }}>
            Com acompanhamento, direção e uma estrutura pensada para o aluno,
            a experiência se torna mais leve, mais clara e mais consistente.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Falar sobre a academia <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Valores</span>

          <h2>
            Uma estrutura criada para gerar mais confiança,
            constância e evolução.
          </h2>
        </div>

        <div className="cards-grid">
          {values.map(({ icon: Icon, title, text }) => (
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
        <div className="split-content" data-reveal="true">
          <span className="eyebrow">Para diferentes objetivos</span>

          <h2>
            Cada pessoa possui um ritmo, uma rotina e um objetivo.
          </h2>

          <p>
            Seja para melhorar o condicionamento, ganhar massa, emagrecer
            ou simplesmente sair do sedentarismo, a ideia é criar uma
            rotina mais organizada e sustentável.
          </p>

          <p style={{ marginTop: '18px' }}>
            O foco está em manter evolução constante com acompanhamento
            e um ambiente preparado para isso.
          </p>
        </div>

        <div
          className="impact-panel"
          data-reveal="true"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.2)),
              url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span>CONSISTÊNCIA</span>

          <h2>
            O mais importante
            <br />
            é continuar.
          </h2>
        </div>
      </section>

      <section className="final-cta" data-reveal="true">
        <span className="eyebrow">Comece hoje</span>

        <h2>PRONTO PARA EVOLUIR?</h2>

        <p>
          Entre em contato pelo WhatsApp e conheça melhor a estrutura e os planos.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Falar pelo WhatsApp
        </a>
      </section>
    </>
  );
}