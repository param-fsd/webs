"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <img src="/favi.png" alt="Loading" className="loader-logo" />

        <p className="loader-text">
          Loading<span className="loader-dots"></span>
        </p>
      </div>
    </div>
  );
}