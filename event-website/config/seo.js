export default {
  metaTitle: "Event Website",
  metaDescription: "Join us for an unforgettable experience at our upcoming event.",
  canonicalUrl: "https://www.eventwebsite.com",
  openGraph: {
    title: "Event Website",
    type: "event",
    url: "https://www.eventwebsite.com",
    image: "https://www.eventwebsite.com/og-image.jpg",
    description: "Don't miss out on our upcoming event. Get your tickets now!",
    locale: "en_US",
    site_name: "Event Website"
  },
  twitterCard: {
    card: "summary_large_image",
    site: "@EventWebsite",
    title: "Event Website",
    description: "Join us for an unforgettable experience at our upcoming event.",
    image: "https://www.eventwebsite.com/twitter-image.jpg"
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Event Website",
    "startDate": "2024-12-01T19:00:00-05:00",
    "endDate": "2024-12-01T23:00:00-05:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Event Venue",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Event Street",
        "addressLocality": "City",
        "postalCode": "12345",
        "addressCountry": "US"
      }
    },
    "image": "https://www.eventwebsite.com/og-image.jpg",
    "description": "Join us for an unforgettable experience at our upcoming event.",
    "offers": {
      "@type": "Offer",
      "url": "https://www.eventwebsite.com/tickets",
      "priceCurrency": "USD",
      "price": "99.00",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-08-01T12:00:00-05:00"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "Band Name"
    }
  }
};
