import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <h3>Vizipa Constructions Pvt. Ltd.</h3>
          <p>
            Premium plotted developments in Bangalore designed with clarity, confidence, and future value.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">What We Do</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}