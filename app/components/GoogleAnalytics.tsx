"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID!;
const consentStorageKey = "atalay-cookie-consent";

export default function GoogleAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setAnalyticsAllowed(
        window.localStorage.getItem(consentStorageKey) === "accepted"
      );
    };

    updateConsent();
    window.addEventListener("atalay-cookie-consent-change", updateConsent);

    return () => {
      window.removeEventListener("atalay-cookie-consent-change", updateConsent);
    };
  }, []);

  if (!GA_ID || !analyticsAllowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
