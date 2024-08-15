export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "Listings", path: "/listings", subMenu: [
      { title: "Residential", path: "/listings/residential" },
      { title: "Commercial", path: "/listings/commercial" },
      { title: "Luxury", path: "/listings/luxury" }
    ]},
    { title: "Agents", path: "/agents" },
    { title: "Market Trends", path: "/market-trends" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  footerMenu: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Careers", path: "/careers" }
  ],
  callToAction: {
    text: "Contact an Agent",
    url: "/contact"
  },
  socialLinks: [
    { title: "Facebook", url: "https://www.facebook.com/realestatewebsite" },
    { title: "LinkedIn", url: "https://www.linkedin.com/company/realestatewebsite" },
    { title: "Instagram", url: "https://www.instagram.com/realestatewebsite" }
  ]
};
