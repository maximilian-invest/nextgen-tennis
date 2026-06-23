import Link from 'next/link';
import { FOOTER_ITEMS, CONTACT_EMAIL, asset } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-huge" data-reveal>
          NextGen<span className="dot">.</span>
        </div>
        <div className="footer-top">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="flogo" src={asset('/assets/brand/logo-white.png')} alt="NextGen Tennisacademy" />
            <p style={{ maxWidth: '34ch' }}>
              Spezialisierte Leistungsförderung für die nächste Generation. Hallein · Salzburg.
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            {FOOTER_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h5>Kontakt</h5>
            <p>
              1.&nbsp;Halleiner Tennisclub
              <br />
              Hallein · Salzburg
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <h5>Social</h5>
            <Link href="/kontakt">Instagram</Link>
            <Link href="/kontakt">Facebook</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NextGen Tennisacademy</span>
          <span>Hallein · Salzburg</span>
          <span>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
