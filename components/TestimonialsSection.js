"use client";

import { useRef, useState } from "react";
import { Star, X } from "lucide-react";

const testimonials = [
  {
    name: "Vijay Sharma",
    role: "Google Review",
    rating: 5,
    review:
      "Great first impression with quality development and a very supportive sales team.",
    fullReview:
      "Impressed and excited about Vizipa Avalon! I recently visited the Vizipa Avalon project as a potential buyer, and I am impressed. I could see the attention to detail and quality craftsmanship that went into this development. The sales team was welcoming. They took the time to answer all questions and provided detailed information about the project's vision and benefits. I am considering purchasing a site here. I highly recommend this project to anyone in search of a new home or investment.",
    date: "a year ago",
  },
  {
    name: "VishnuVardhanChowdary",
    role: "Local Guide - Google Review",
    rating: 5,
    review:
      "Excellent buying experience with smooth documentation and transparent guidance.",
    fullReview:
      "I recently purchased a plot, and my experience has been excellent from the very first visit. The sales team was supportive, and the entire process—from legal verification and documentation to registration—was handled smoothly. Surendra and Arun sir are genuinely good people who maintain great transparency. They don’t chase money; they focus on doing the work right. The provision of underground electricity, water pipelines, and rainwater harvesting are major positives from Avalon. VITS is located within 5 km, Sharanya Narayani is right opposite the venture, and Garden University is just 2 km away. The property is in a prime and convenient location. I strongly recommend this project.",
    date: "a month ago",
  },
  {
    name: "Vishal Srivastava",
    role: "Google Review",
    rating: 5,
    review:
      "Peaceful location with good road access and strong future development potential.",
    fullReview:
      "This residential plot is very well-located with easy access to main road. The area is peaceful, clean, and seems to be developing steadily, which is ideal for building a home or investment. One of the key highlights is the planned development of a large clubhouse in the layout, which adds great value to the property.",
    date: "8 months ago",
  },
  {
    name: "Vijay D",
    role: "Google Review",
    rating: 5,
    review:
      "Professional team, smooth process, excellent location, and well-planned layout.",
    fullReview:
      "I recently purchased a plot in Vizipa Avalon in Hoskote and I couldn’t be happier with the entire process. The team was incredibly professional, transparent, and attentive to every detail, making my experience seamless from start to finish. The location of the project is excellent, with promising development and great connectivity to nearby areas. The layout is well-planned, the pricing is good and the amenities offered are top-notch, adding significant value to the investment. I also appreciated how the team provided me with all necessary documents and guided me through every step of the purchase. If you’re looking for a reliable, well-located plot, I highly recommend Vizipa Avalon for anyone considering real estate investment in Bangalore.",
    date: "a year ago",
  },
  {
    name: "Bala Krishna",
    role: "Local Guide - Google Review",
    rating: 5,
    review:
      "Reliable developer known for transparent process, quality land deals, and trust.",
    fullReview:
      "Vizipa has built a solid reputation for its consistency and trustworthiness in the real estate market. With years of experience and a strong track record, they have consistently delivered quality land deals, earning the trust of their customers. Whether you're looking for residential, commercial, or agricultural land, their transparent processes, competitive pricing, and commitment to customer satisfaction make them a reliable choice. Their professionalism and attention to detail ensure that every transaction is smooth and secure, making it a wise decision to buy land from them.",
    date: "a year ago",
  },
];

const scrollingTestimonials = [...testimonials, ...testimonials];

function StarRow({ count = 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} star review`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} size={14} fill="currentColor" strokeWidth={1.8} />
      ))}
    </div>
  );
}

function getInitials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const dragData = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const startDrag = (clientX) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    scrollRef.current.classList.add("dragging");

    dragData.current.startX = clientX - scrollRef.current.offsetLeft;
    dragData.current.scrollLeft = scrollRef.current.scrollLeft;
  };

  const moveDrag = (clientX) => {
    if (!isDragging || !scrollRef.current) return;

    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - dragData.current.startX) * 1.6;
    scrollRef.current.scrollLeft = dragData.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);

    if (scrollRef.current) {
      scrollRef.current.classList.remove("dragging");
    }
  };

  return (
    <section className="page-shell section-gap testimonials-section">
      <div className="section-title-wrap testimonials-head">
        <p className="eyebrow">Client Voices</p>
        <h2>Trusted by clients who value clarity, quality, and delivery</h2>
        <p className="testimonials-lead">
          Real experiences from clients who trusted Vizipa Avalon for their plot
          purchase and investment journey.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="testimonial-scroll-container"
        onMouseDown={(event) => startDrag(event.pageX)}
        onMouseMove={(event) => {
          if (!isDragging) return;
          event.preventDefault();
          moveDrag(event.pageX);
        }}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(event) => startDrag(event.touches[0].pageX)}
        onTouchMove={(event) => moveDrag(event.touches[0].pageX)}
        onTouchEnd={stopDrag}
      >
        <div className="testimonial-marquee-track">
          {scrollingTestimonials.map((item, index) => (
            <article
              className="luxury-card testimonial-card"
              key={`${item.name}-${index}`}
            >
              <div className="testimonial-topline" />

              <div className="testimonial-head-row">
                <div className="testimonial-user">
                  <div className="testimonial-avatar">
                    {getInitials(item.name)}
                  </div>

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

                <button
                  type="button"
                  className="testimonial-read-more"
                  onClick={() => {
                    if (!isDragging) setActiveReview(item);
                  }}
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeReview && (
        <div
          className="review-popup-overlay"
          onClick={() => setActiveReview(null)}
        >
          <div
            className="review-popup-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="review-popup-close"
              onClick={() => setActiveReview(null)}
              aria-label="Close review popup"
            >
              <X size={18} />
            </button>

            <div className="review-popup-head">
              <div className="testimonial-avatar popup-avatar">
                {getInitials(activeReview.name)}
              </div>

              <div>
                <h3>{activeReview.name}</h3>
                <p>{activeReview.role}</p>
              </div>
            </div>

            <StarRow count={activeReview.rating} />

            <p className="review-popup-text">“{activeReview.fullReview}”</p>

            <div className="review-popup-bottom">
              <span>{activeReview.date}</span>
              <span>Google Review</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}