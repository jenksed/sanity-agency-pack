export default {
  mainMenu: [
    { title: "Home", path: "/" },
    { title: "Membership Levels", path: "/membership-levels", subMenu: [
      { title: "Basic", path: "/membership-levels/basic" },
      { title: "Premium", path: "/membership-levels/premium" },
      { title: "VIP", path: "/membership-levels/vip" }
    ]},
    { title: "Community", path: "/community" },
    { title: "Resources", path: "/resources" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  accountMenu: [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Account Settings", path: "/account-settings" },
    { title: "Logout", path: "/logout" }
  ],
  socialLinks: [
    { title: "Facebook", url: "https://www.facebook.com/membershipsite" },
    { title: "Twitter", url: "https://www.twitter.com/membershipsite" },
    { title: "LinkedIn", url: "https://www.linkedin.com/company/membershipsite" }
  ]
};
