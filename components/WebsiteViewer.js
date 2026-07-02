import { ExternalLink, MapPin, Layers, Zap } from "lucide-react";

export default function WebsiteViewer() {
  return (
    <section className="section-gap">
      <div className="avalon-map-banner avalon-map-banner--full">
        <div className="avalon-map-banner__overlay">
          <p className="eyebrow">Interactive Layout Map</p>

          <h3>
            Your search, <strong>visualised</strong>
          </h3>

          <p>
            Skip the guesswork. Walk through Avalon by Vizipa plot by plot —
            check live availability, compare sizes and facing, and picture your
            future home in a fully interactive layout, right from your screen.
          </p>

          <div className="avalon-map-banner__features">
            <span className="avalon-map-banner__feature">
              <MapPin size={15} /> Live plot availability
            </span>

            <span className="avalon-map-banner__feature">
              <Layers size={15} /> Sizes, facing &amp; pricing
            </span>

            <span className="avalon-map-banner__feature">
              <Zap size={15} /> Zoom, pan &amp; explore
            </span>
          </div>

          <a
            href="https://avalonmap.vizipa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="avalon-map-banner__btn"
          >
            Explore the Layout Map <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
