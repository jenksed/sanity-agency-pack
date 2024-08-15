export default {
  siteTitle: "Online Store",
  siteLogo: "/static/images/logo.png",
  siteDescription: "Discover amazing products and shop online with us.",
  locale: "en_US",
  supportedLocales: ["en_US", "es_ES"],
  theme: {
    light: {
      primaryColor: "#EF4444",
      secondaryColor: "#F87171",
      backgroundColor: "#FFFFFF",
      textColor: "#1F2937"
    },
    dark: {
      primaryColor: "#B91C1C",
      secondaryColor: "#DC2626",
      backgroundColor: "#1F2937",
      textColor: "#F3F4F6"
    }
  },
  contactInfo: {
    email: "support@onlinestore.com",
    phone: "+1-800-987-6543",
    address: "123 Store Street, Shop City, USA"
  },
  socialMedia: {
    facebook: "https://www.facebook.com/onlinestore",
    twitter: "https://www.twitter.com/onlinestore",
    instagram: "https://www.instagram.com/onlinestore"
  },
  paymentOptions: {
    creditCard: true,
    paypal: true,
    stripe: true,
    applePay: true
  },
  features: {
    enableWishList: true,
    enableProductReviews: true,
    enableRelatedProducts: true
  }
};
