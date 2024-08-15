export default {
  siteTitle: "Exclusive Membership",
  siteLogo: "/static/images/logo.png",
  siteDescription: "Join our community and unlock premium content.",
  locale: "en_US",
  supportedLocales: ["en_US", "de_DE"],
  theme: {
    light: {
      primaryColor: "#4F46E5",
      secondaryColor: "#6366F1",
      backgroundColor: "#FFFFFF",
      textColor: "#111827"
    },
    dark: {
      primaryColor: "#3730A3",
      secondaryColor: "#4C1D95",
      backgroundColor: "#1F2937",
      textColor: "#FFFFFF"
    }
  },
  membershipLevels: [
    { name: "Basic", price: "$10/month", features: ["Access to basic content", "Community support"] },
    { name: "Premium", price: "$25/month", features: ["Everything in Basic", "Exclusive articles", "Direct access to experts"] },
    { name: "VIP", price: "$50/month", features: ["Everything in Premium", "One-on-one coaching", "VIP events"] }
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/membershipsite",
    twitter: "https://www.twitter.com/membershipsite",
    linkedin: "https://www.linkedin.com/company/membershipsite"
  },
  features: {
    enableForum: true,
    enableEventCalendar: true,
    enableMemberDirectory: true
  }
};
