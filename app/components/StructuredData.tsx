const siteUrl = "https://atalayturizm.com";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gemlikatalayturizm@gmail.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atalay Turizm",
  url: siteUrl,
  logo: `${siteUrl}/images/atalay-main-logo.png`,
  image: `${siteUrl}/images/publicog-image.png`,
  email: contactEmail,
  telephone: "+90 534 063 07 79",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hamidiye, Kuvayi Milliye Bl. Batum İş Hanı Kat: 4",
    addressLocality: "Gemlik",
    addressRegion: "Bursa",
    postalCode: "16600",
    addressCountry: "TR",
  },
  areaServed: ["Gemlik", "Bursa"],
  description:
    "Bursa ve Gemlik çevresinde personel taşımacılığı, öğrenci servisi, kurumsal servis ve özel ulaşım çözümleri.",
  sameAs: ["https://atalayturizm.com"],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replaceAll("<", "\\u003c"),
      }}
    />
  );
}
