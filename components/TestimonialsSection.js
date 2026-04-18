"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh M",
    role: "Google Review",
    rating: 5,
    review:
      "Excellent experience working with the team. Their approach was highly professional, communication was clear throughout, and the final outcome matched expectations perfectly.",
    date: "2 weeks ago",
  },
  {
    name: "Shwetha K",
    role: "Google Review",
    rating: 5,
    review:
      "Very transparent and supportive from the beginning. The project explanation, documentation clarity, and overall coordination gave us a lot of confidence.",
    date: "1 month ago",
  },
  {
    name: "Naveen P",
    role: "Google Review",
    rating: 5,
    review:
      "Impressed with the planning, execution quality, and responsiveness. The team maintained a premium standard and handled every stage in a well-structured way.",
    date: "3 weeks ago",
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} star review`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} size={14} fill="currentColor" strokeWidth={1.8} />
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section className="page-shell section-gap testimonials-section">
      <div className="section-title-wrap testimonials-head">
        <p className="eyebrow">Client Voices</p>
        <h2>Trusted by clients who value clarity, quality, and delivery</h2>
        <p className="testimonials-lead">
          A refined experience is built not only through execution, but also through
          the confidence and satisfaction of the people we serve.
        </p>
      </div>

      <div className="card-grid three-grid testimonials-grid">
        {testimonials.map((item) => (
          <article className="luxury-card testimonial-card" key={item.name}>
            <div className="testimonial-topline" />

            <div className="testimonial-head-row">
              <div className="testimonial-user">
                <div className="testimonial-avatar">{getInitials(item.name)}</div>

                <div className="testimonial-user-meta">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>

              <div className="testimonial-google-badge">Google</div>
            </div>

            <StarRow count={item.rating} />

            <p className="testimonial-review">“{item.review}”</p>

            <div className="testimonial-footer">
              <span className="testimonial-date">{item.date}</span>
              <span className="testimonial-verified">Verified-style display</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}