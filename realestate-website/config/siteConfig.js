export default {
  siteTitle: "Real Estate Listings",
  siteLogo: "/static/images/logo.png",
  siteDescription: "Find your dream home with our real estate listings.",
  locale: "en_US",
  supportedLocales: ["en_US", "es_ES"],
  theme: {
    default: {
      primaryColor: "#10B981",
      secondaryColor: "#047857",
      backgroundColor: "#F9FAFB",
      textColor: "#111827"
    }
  },
  contactInfo: {
    phone: "+1-800-789-1234",
    email: "info@realestatewebsite.com",
    address: "789 Realty Drive, Housing City, USA"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/realestatewebsite",
    linkedin: "https://www.linkedin.com/company/realestatewebsite",
    instagram: "https://www.instagram.com/realestatewebsite"
  },
  propertyCategories: [
    { name: "Residential", path: "/listings/residential" },
    { name: "Commercial", path: "/listings/commercial" },
    { name: "Luxury", path: "/listings/luxury" }
  ],
  features: {
    enableMortgageCalculator: true,
    enableVirtualTours: true,
    enableAgentProfiles: true
  }
};
