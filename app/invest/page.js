"use client";

import { useState } from "react";
import {
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function InvestorPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
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

    if (!formData.name || !formData.mobileNumber) {
      alert("Please fill Name and Phone Number.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "leads"), {
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        message: formData.message || "Investor enquiry",
        notes: "",
        source: "Investor enquiry",
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
        message: "",
      });
    } catch (error) {
      console.error("Investor lead submit error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell page-top-space">
      <section className="page-hero small-page-hero">
        <p className="eyebrow">Investor Enquiry</p>

        <h1>Invest in Bangalore’s Rising Growth Corridors</h1>

        <p className="page-lead max-3xl">
          Explore plotted development opportunities designed for long-term
          appreciation, strategic growth, and premium investment potential.
        </p>
      </section>

      <section className="contact-grid section-gap">
        <div className="luxury-card contact-info-card">
          <h2>Investor Support</h2>

          <div className="contact-points">
            <div>
              <TrendingUp size={18} />
              <p>
                Get expert guidance on investment opportunities and future value
                appreciation.
              </p>
            </div>

            <div>
              <ShieldCheck size={18} />
              <p>
                Transparent project details with legal and ownership clarity.
              </p>
            </div>

            <div>
              <MapPin size={18} />
              <p>Schedule project visits and one-to-one consultations.</p>
            </div>

            <div>
              <Phone size={18} />
              <p>+91 91080 05198</p>
            </div>

            <div>
              <Mail size={18} />
              <p>info@vizipa.com</p>
            </div>
          </div>

          <div className="bank-box">
            <h3>Why Choose Vizipa?</h3>

            <p>
              Premium plotted developments with strategic locations,
              infrastructure planning, and long-term growth vision.
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
                borderRadius: "9px",
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
                  borderRadius: "9px",
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
                  Thank you for reaching out. Our investment team will contact
                  you shortly.
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

          <textarea
            name="message"
            placeholder="Tell us about your investment requirement"
            rows="7"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="gold-btn" disabled={loading}>
            {loading ? "Submitting..." : "Request Investor Consultation"}
          </button>
        </form>
      </section>
    </div>
  );
}