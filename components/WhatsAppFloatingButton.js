"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919108005198"; // replace with your WhatsApp number

  const handleSend = () => {
    const finalMessage =
      message.trim() ||
      "Hello, I would like to know more about your projects.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-floating-wrap">
      {open && (
        <div className="whatsapp-chat-box">
          <div className="whatsapp-chat-head">
            <div>
              <h4>Chat with us</h4>
              <p>Usually replies shortly</p>
            </div>

            <button onClick={() => setOpen(false)} className="whatsapp-close">
              <X size={16} />
            </button>
          </div>

          <div className="whatsapp-chat-body">
            <div className="whatsapp-message-preview">
              Hello, how can we help you today?
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={3}
            />

            <button onClick={handleSend} className="whatsapp-send-btn">
              <span>Send on WhatsApp</span>
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <button
        className={`whatsapp-float-btn ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}