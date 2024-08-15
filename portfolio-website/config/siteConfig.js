export default {
  siteTitle: "Creative Portfolio",
  siteLogo: "/static/images/logo.png",
  siteDescription: "Showcasing the work of a professional designer.",
  locale: "en_US",
  theme: {
    light: {
      primaryColor: "#4B5563",
      secondaryColor: "#9CA3AF",
      backgroundColor: "#FFFFFF",
      textColor: "#111827"
    },
    dark: {
      primaryColor: "#1F2937",
      secondaryColor: "#374151",
      backgroundColor: "#000000",
      textColor: "#FFFFFF"
    }
  },
  portfolioCategories: [
    { name: "Design", path: "/portfolio/design" },
    { name: "Development", path: "/portfolio/development" },
    { name: "Photography", path: "/portfolio/photography" }
  ],
  contactInfo: {
    email: "contact@creativeportfolio.com",
    phone: "+1-800-456-7890"
  },
  socialMedia: {
    behance: "https://www.behance.net/yourprofile",
    dribbble: "https://www.dribbble.com/yourprofile",
    instagram: "https://www.instagram.com/yourprofile"
  },
  features: {
    enableTestimonials: true,
    enableCaseStudies: true,
    enableBlog: true
  }
};
