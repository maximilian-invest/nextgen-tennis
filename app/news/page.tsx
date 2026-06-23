import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/PageHead';
import NewsList from '@/components/NewsList';
import { asset } from '@/lib/site';

export const metadata: Metadata = { title: 'News' };

export default function NewsPage() {
  return (
    <div className="p-news">
      <PageHead
        crumb="News"
        eyebrow="Neuigkeiten aus der Academy"
        title="News"
        lead="Was sich bei der NextGen Tennisacademy tut — das Team, die Anlage und der Weg, die Jugendarbeit im Leistungstennis auf ein neues Level zu bringen."
      />

      {/* FEATURED */}
      <section className="section" style={{ paddingTop: 'clamp(2.5rem,4vw,4rem)', paddingBottom: 0 }}>
        <div className="wrap">
          <article className="feature" data-reveal>
            <div className="media court-media">
              <div className="court-lines"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="media-mark" src={asset('/assets/brand/ng-mark.png')} alt="" />
              <span className="media-tag">FOTO · TENNISCAMP HALLEIN</span>
            </div>
            <div className="body">
              <div className="meta">
                <span className="cat-tag">Camps</span>
                <span className="pill-date">13.–17. &amp; 20.–24. Juli 2026</span>
              </div>
              <h2>Tenniscamps 2026 — jetzt anmelden</h2>
              <p>
                Nach fünf erfolgreichen Ausgaben begrüßen wir gemeinsam mit der Socceracademy auch
                2026 wieder Kids und Jugendliche von 6 bis 16 Jahren auf der Anlage des 1. Halleiner
                Tennisclubs. Woche 1 ganztägig für Meisterschafts- und Turnierspieler — train like a
                pro. Woche 2 kompakter für Anfänger und Fortgeschrittene — improve your game.
              </p>
              <div className="flex gap-m wrap-flex">
                <Link href="/kontakt" className="btn btn-primary" data-magnetic="0.2">
                  Zum Camp anmelden <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <NewsList />
    </div>
  );
}
