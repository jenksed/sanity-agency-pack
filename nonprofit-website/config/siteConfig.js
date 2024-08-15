export default {
  siteTitle: "Nonprofit Organization",
  siteLogo: "/static/images/logo.png",
  siteDescription: "Making a difference in the world. Support our cause.",
  locale: "en_US",
  supportedLocales: ["en_US", "es_ES"],
  theme: {
    default: {
      primaryColor: "#DC2626",
      secondaryColor: "#B91C1C",
      backgroundColor: "#F9FAFB",
      textColor: "#111827"
    }
  },
  contactInfo: {
    phone: "+1-800-555-1234",
    email: "info@nonprofitwebsite.com",
    address: "456 Charity Lane, Helping City, USA"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/nonprofitorg",
    twitter: "https://www.twitter.com/nonprofitorg",
    instagram: "https://www.instagram.com/nonprofitorg"
  },
  donationOptions: [
    { name: "One-Time Donation", url: "/donate/one-time" },
    { name: "Monthly Donation", url: "/donate/monthly" },
    { name: "Fundraising Campaigns", url: "/fundraising" }
  ],
  features: {
    enableVolunteerSignup: true,
    enableDonationTracking: true,
    enableImpactReports: true
  }
};
