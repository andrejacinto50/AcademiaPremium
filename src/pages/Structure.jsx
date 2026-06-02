import PageHero from '../components/PageHero';
import { differentials, gallery } from '../data/siteData';

const structureImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop'
];

export default function Structure() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura"
        title="Ambiente forte para quem quer evoluir."
        text="Uma apresentação premium para valorizar o espaço, os equipamentos, o acompanhamento e a experiência do aluno."
      />

      <section className="section split-section">
        <div
          className="structure-visual"
          data-reveal="true"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.25)),
              url(${structureImages[0]})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span>ESPAÇO PREMIUM</span>
        </div>

        <div className="split-content" data-reveal="true">
          <span className="eyebrow">Posicionamento</span>

          <h2>Uma academia local apresentada como marca forte.</h2>

          <p>
            Essa página ajuda a mostrar que a academia não é apenas um lugar com
            equipamentos. Ela tem ambiente, orientação, estrutura e uma experiência
            visual que gera mais confiança antes mesmo do primeiro contato.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="cards-grid">
          {differentials.map(({ icon: Icon, title, text }) => (
            <article className="premium-card" data-reveal="true" key={title}>
              <Icon className="card-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head" data-reveal="true">
          <span className="eyebrow">Fotos reais depois</span>

          <h2>
            Blocos prontos para substituir por imagens reais da academia.
          </h2>
        </div>

        <div className="gallery-grid compact">
          {gallery.slice(0, 4).map((item, index) => (
            <div
              className={`gallery-item item-${index + 1}`}
              data-reveal="true"
              key={item}
              style={{
                backgroundImage: `
                  linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.15)),
                  url(${structureImages[index]})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}