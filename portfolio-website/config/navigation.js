export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/portfolio", subMenu: [
      { title: "Design", path: "/portfolio/design" },
      { title: "Development", path: "/portfolio/development" },
      { title: "Photography", path: "/portfolio/photography" }
    ]},
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  footerMenu: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Sitemap", path: "/sitemap" }
  ],
  socialLinks: [
    { title: "Behance", url: "https://www.behance.net/yourprofile" },
    { title: "Dribbble", url: "https://www.dribbble.com/yourprofile" },
    { title: "Instagram", url: "https://www.instagram.com/yourprofile" }
  ]
};
