export default {
    mainMenu: [
      { title: "Home", path: "/" },
      { title: "Categories", path: "/categories", subMenu: [
        { title: "Tech", path: "/categories/tech" },
        { title: "Business", path: "/categories/business" },
        { title: "Lifestyle", path: "/categories/lifestyle" },
        { title: "Health", path: "/categories/health" }
      ]},
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" }
    ],
    sidebarMenu: [
      { title: "Latest Posts", path: "/latest" },
      { title: "Popular Posts", path: "/popular" },
      { title: "Subscribe", path: "/subscribe" }
    ],
    socialLinks: [
      { title: "Twitter", url: "https://www.twitter.com/techblog" },
      { title: "Facebook", url: "https://www.facebook.com/techblog" },
      { title: "Instagram", url: "https://www.instagram.com/techblog" }
    ]
  };
  