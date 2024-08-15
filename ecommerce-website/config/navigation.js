export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop", subMenu: [
      { title: "New Arrivals", path: "/shop/new-arrivals" },
      { title: "Best Sellers", path: "/shop/best-sellers" },
      { title: "Sale", path: "/shop/sale" },
      { title: "Categories", path: "/shop/categories", subMenu: [
        { title: "Clothing", path: "/shop/categories/clothing" },
        { title: "Accessories", path: "/shop/categories/accessories" },
        { title: "Electronics", path: "/shop/categories/electronics" }
      ]}
    ]},
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "FAQ", path: "/faq" }
  ],
  footerMenu: [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Returns & Exchanges", path: "/returns" },
    { title: "Shipping Information", path: "/shipping" }
  ],
  callToAction: {
    text: "Shop Now",
    url: "/shop"
  },
  socialLinks: [
    { title: "Facebook", url: "https://www.facebook.com/onlinestore" },
    { title: "Twitter", url: "https://www.twitter.com/onlinestore" },
    { title: "Instagram", url: "https://www.instagram.com/onlinestore" }
  ]
};
