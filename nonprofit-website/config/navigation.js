export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Our Work", path: "/our-work", subMenu: [
      { title: "Programs", path: "/our-work/programs" },
      { title: "Initiatives", path: "/our-work/initiatives" },
      { title: "Impact", path: "/our-work/impact" }
    ]},
    { title: "Get Involved", path: "/get-involved", subMenu: [
      { title: "Volunteer", path: "/get-involved/volunteer" },
      { title: "Donate", path: "/get-involved/donate" },
      { title: "Partnerships", path: "/get-involved/partnerships" }
    ]},
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  footerMenu: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Annual Reports", path: "/annual-reports" }
  ],
  socialLinks: [
    { title: "Facebook", url: "https://www.facebook.com/nonprofitorg" },
    { title: "Twitter", url: "https://www.twitter.com/nonprofitorg" },
    { title: "Instagram", url: "https://www.instagram.com/nonprofitorg" }
  ]
};
