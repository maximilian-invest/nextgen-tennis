import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import ContactForm from '@/components/ContactForm';
import { CONTACT_EMAIL, asset } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt & Probetraining',
};

export default function KontaktPage() {
  return (
    <div className="p-kontakt">
      <PageHead
        crumb="Kontakt"
        eyebrow="Training anfragen"
        title="Los geht's"
        lead="Nimm Kontakt auf und buche dein Training ganz nach deinen Wünschen. Zwei Minuten Formular — den Rest machen wir."
      />

      <section className="section" id="form" style={{ paddingTop: 'clamp(2.5rem,4vw,4rem)' }}>
        <div className="wrap contact-grid">
          {/* FORM */}
          <ContactForm />

          {/* INFO */}
          <div data-reveal>
            <div className="info-block">
              <h4>Anschrift</h4>
              <p className="info-big">
                1. Halleiner Tennisclub
                <br />
                Hallein · Salzburg
              </p>
            </div>
            <div className="info-block">
              <h4>E-Mail</h4>
              <a href={`mailto:${CONTACT_EMAIL}`} className="info-big">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="info-block">
              <h4>Standort</h4>
              <p>1. Halleiner Tennisclub</p>
            </div>
            <div className="info-block">
              <h4>Saison</h4>
              <p>
                Halle&nbsp;&nbsp;ganzjährig
                <br />
                Outdoor&nbsp;&nbsp;Feb – Nov
              </p>
            </div>
            <div
              className="court-media"
              style={{ aspectRatio: '4/3', borderRadius: 'var(--r-lg)', marginTop: '1.5rem' }}
            >
              <div className="court-lines"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
              <span className="media-tag">KARTE · REGION SALZBURG SÜD</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
