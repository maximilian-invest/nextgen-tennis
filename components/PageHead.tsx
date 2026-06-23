import Link from 'next/link';

export default function PageHead({
  crumb,
  eyebrow,
  title,
  lead,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="page-head">
      <div className="court-lines"></div>
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Start</Link>
          <span className="dot">/</span>
          <span>{crumb}</span>
        </div>
        <p className="eyebrow on-dark" data-reveal style={{ marginBottom: '1.2rem' }}>
          {eyebrow}
        </p>
        <h1 data-reveal>
          {title}
          <span className="dot">.</span>
        </h1>
        <p className="lead on-dark" data-reveal style={{ marginTop: '1.4rem', maxWidth: '54ch' }}>
          {lead}
        </p>
      </div>
    </header>
  );
}
