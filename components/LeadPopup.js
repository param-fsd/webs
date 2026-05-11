"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, User, Building2 } from "lucide-react";

export default function LeadPopup({ forceOpen = false, onClose = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
  });

  useEffect(() => {
    let timer;

    if (forceOpen) {
      setIsOpen(true);
    } else {
      const popupClosed = sessionStorage.getItem("vizipa_lead_popup_closed");

      if (!popupClosed) {
        timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [forceOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);

      if (!forceOpen) {
        sessionStorage.setItem("vizipa_lead_popup_closed", "true");
      }

      if (onClose) onClose();
    }, 220);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lead Form Data:", formData);

    setSubmitted(true);

    setTimeout(() => {
      closePopup();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className={`lead-popup-overlay ${isClosing ? "closing" : ""}`}>
      <div className={`lead-popup-card luxury-card ${isClosing ? "closing" : ""}`}>
        <button
          className="lead-popup-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        <div className="lead-popup-grid">
          <div className="lead-popup-left">
            <div className="lead-popup-image-wrap">
              <img
                src="/img4.jpg"
                alt="Vizipa premium development"
                className="lead-popup-image"
              />
              <div className="lead-popup-image-overlay" />
            </div>

            <div className="lead-popup-left-content">
              <p className="eyebrow light">Exclusive Access</p>
              <h2>Discover premium plotted developments in Bangalore</h2>
              <p>
                Get project highlights, location advantages, pricing insights,
                and priority updates from Vizipa Constructions.
              </p>

              <div className="lead-popup-points">
                <div>
                  <span>•</span>
                  <p>Prime plotted developments in growth corridors</p>
                </div>
                <div>
                  <span>•</span>
                  <p>Clean titles and transparent execution</p>
                </div>
                <div>
                  <span>•</span>
                  <p>Priority assistance from our team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lead-popup-right">
            {!submitted ? (
              <>
                <div className="lead-popup-form-head">
                  <p className="eyebrow">Enquire Now</p>
                  <h3>Request project details</h3>
                  <p>
                    Fill in your details and our team will get in touch with you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="lead-popup-form">
                  <div className="lead-input-group">
                    <label>Full Name</label>
                    <div className="lead-input-wrap">
                      <User size={16} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="lead-input-group">
                    <label>Phone Number</label>
                    <div className="lead-input-wrap">
                      <Phone size={16} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="lead-input-group">
                    <label>Email Address</label>
                    <div className="lead-input-wrap">
                      <Mail size={16} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="lead-input-group">
                    <label>Interested In</label>
                    <div className="lead-input-wrap">
                      <Building2 size={16} />
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your interest</option>
                        <option value="Vizipa Avalon">Vizipa Avalon</option>
                        <option value="Vizipa Optima">Vizipa Optima</option>
                        <option value="Site Visit">Site Visit</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="gold-btn lead-popup-submit">
                    Submit Enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="lead-popup-success">
                <p className="eyebrow">Thank You</p>
                <h3>Enquiry submitted successfully</h3>
                <p>
                  Our team will get in touch with you shortly with the project
                  details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}