import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="page-shell section-gap last-section-gap">
      <div className="cta-box luxury-card">
        <p className="eyebrow">Consultation Portal</p>
        <h2>Your journey to ownership starts here</h2>
        <p>
          Speak with our team for guidance on plotted developments, long-term value appreciation,
          legal transparency, and site visit planning.
        </p>
        <Link href="/contact" className="gold-btn">Connect with Vizipa</Link>
      </div>
    </section>
  );
}