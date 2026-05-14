"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Building2, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    projectName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobileNumber || !formData.projectName) {
      alert("Please fill Name, Phone Number and Preferred Project.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "leads"), {
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        projectName: formData.projectName,
        message: formData.message || "Website enquiry",
        notes: "",
        source: "Website",
        status: "New",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        lastUpdate: serverTimestamp(),
        timestamp: serverTimestamp(),
      });

      setSuccess(true);

      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        projectName: "",
        message: "",
      });
    } catch (error) {
      console.error("Lead submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>Your Journey to Ownership Starts Here</h1>
        <p className="page-lead max-3xl">
          This is more than a contact form. It is your consultation portal for
          plotted development guidance, investment clarity, and site visit
          planning.
        </p>
      </section>

      <section className="contact-grid section-gap">
        <div className="luxury-card contact-info-card">
          <h2>Consultation Portal</h2>

          <div className="contact-points">
            <div>
              <Building2 size={18} />
              <p>
                Complimentary consultation on land value appreciation and legal
                transparency.
              </p>
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
            <p>
              Eligibility support with major nationalized and private banks
              including SBI and HDFC.
            </p>
          </div>
        </div>

        <form className="luxury-card contact-form-card" onSubmit={handleSubmit}>
          {success && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "16px",
                borderRadius: "6px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(245,245,245,0.82))",
                border: "1px solid rgba(22,22,22,0.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(0,0,0,0.06)",
                  color: "#2f6f3e",
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 4px",
                    fontSize: "18px",
                    color: "var(--text)",
                  }}
                >
                  Enquiry Submitted Successfully
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "var(--muted)",
                  }}
                >
                  Thank you for reaching out. Our team will contact you shortly
                  with project details and consultation support.
                </p>
              </div>
            </div>
          )}

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="mobileNumber"
              placeholder="Phone Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              style={{
                width: "100%",
                border: "1px solid rgba(22, 22, 22, 0.1)",
                background: "rgba(255,255,255,0.9)",
                borderRadius: "6px",
                padding: "14px 16px",
                outline: "none",
                color: formData.projectName ? "var(--text)" : "var(--muted)",
                fontSize: "14px",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                cursor: "pointer",
              }}
            >
              <option value="" disabled>
                Preferred Project
              </option>
              <option value="Vizipa Avalon">Vizipa Avalon</option>
              <option value="Vizipa Optima">Vizipa Optima</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirement"
            rows="7"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="gold-btn" disabled={loading}>
            {loading ? "Submitting..." : "Request Consultation"}
          </button>
        </form>
      </section>
    </div>
  );
}