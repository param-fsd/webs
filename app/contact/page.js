import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>Your Journey to Ownership Starts Here</h1>
        <p className="page-lead max-3xl">
          This is more than a contact form. It is your consultation portal for plotted development guidance,
          investment clarity, and site visit planning.
        </p>
      </section>

      <section className="contact-grid section-gap">
        <div className="luxury-card contact-info-card">
          <h2>Consultation Portal</h2>
          <div className="contact-points">
            <div>
              <Building2 size={18} />
              <p>Complimentary consultation on land value appreciation and legal transparency.</p>
            </div>
            <div>
              <MapPin size={18} />
              <p>Visit our office in HSR Layout, Bangalore.</p>
            </div>
            <div>
              <Phone size={18} />
              <p>+91 98765 43210</p>
            </div>
            <div>
              <Mail size={18} />
              <p>info@vizipa.com</p>
            </div>
          </div>

          <div className="bank-box">
            <h3>Bank Tie-ups</h3>
            <p>Eligibility support with major nationalized and private banks including SBI and HDFC.</p>
          </div>
        </div>

        <form className="luxury-card contact-form-card">
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Preferred Project" />
          </div>
          <textarea placeholder="Tell us about your requirement" rows="7"></textarea>
          <button type="submit" className="gold-btn">Request Consultation</button>
        </form>
      </section>
    </div>
  );
}