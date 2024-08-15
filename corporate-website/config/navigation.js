export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services", subMenu: [
      { title: "Consulting", path: "/services/consulting" },
      { title: "Strategy", path: "/services/strategy" },
      { title: "Technology", path: "/services/technology" }
    ]},
    { title: "Case Studies", path: "/case-studies" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  footerMenu: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Careers", path: "/careers" },
    { title: "Sitemap", path: "/sitemap" }
  ],
  socialLinks: [
    { title: "LinkedIn", url: "https://www.linkedin.com/company/corporatewebsite" },
    { title: "Twitter", url: "https://www.twitter.com/corporatewebsite" },
    { title: "Facebook", url: "https://www.facebook.com/corporatewebsite" }
  ]
};
