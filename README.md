---

# **Sanity Agency Pack**

Welcome to the Sanity Agency Pack! This package provides a comprehensive setup for multiple types of websites using Sanity, including schemas, components, static assets, and configuration files tailored for different website types.

## **Available Website Types**

- **Corporate Website**
- **Blog Website**
- **Landing Page Website**
- **Membership Website**
- **Nonprofit Website**
- **Portfolio Website**
- **Real Estate Website**

## **Directory Structure**

Here's an overview of the directory structure and its contents for each website type:

### **Corporate Website**

```plaintext
corporate-website/
├── schemas/
│   ├── homepage.js          # Schema for homepage content
│   ├── service.js           # Schema for service-related content
│   ├── teamMember.js        # Schema for team member profiles
│   ├── testimonial.js       # Schema for testimonials
│   ├── blog.js              # Schema for blog posts
│   ├── caseStudy.js         # Schema for case studies
├── components/
│   ├── heroSection.js       # Component for the hero section
│   ├── serviceOverview.js   # Component for service overview
│   ├── clientLogos.js       # Component for client logos
│   ├── testimonials.js      # Component for testimonials
│   ├── blogHighlights.js    # Component for blog highlights
│   ├── callToAction.js      # Component for call-to-action sections
├── static/
│   ├── images/              # Directory for image files
│   └── documents/           # Directory for document files
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Blog Website**

```plaintext
blog-website/
├── schemas/
│   ├── post.js              # Schema for blog posts
│   ├── author.js            # Schema for authors
│   ├── category.js          # Schema for categories
│   ├── blockContent.js      # Schema for block content (rich text)
├── components/
│   ├── postPreview.js       # Component for post previews
│   ├── authorBio.js         # Component for author bio
│   ├── categoryList.js      # Component for listing categories
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Landing Page Website**

```plaintext
landing-page-website/
├── schemas/
│   ├── landingPage.js       # Schema for landing page content
│   ├── callToAction.js      # Schema for call-to-action objects
│   ├── section.js           # Schema for content sections
│   ├── footer.js            # Schema for footer content
├── components/
│   ├── heroSection.js       # Component for the hero section
│   ├── callToAction.js      # Component for call-to-action
│   ├── features.js          # Component for listing features
│   ├── testimonials.js      # Component for displaying testimonials
│   ├── pricing.js           # Component for pricing plans
│   ├── frequentlyAskedQuestions.js # Component for FAQs
│   ├── contactForm.js       # Component for contact form
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Membership Website**

```plaintext
membership-website/
├── schemas/
│   ├── membershipLevel.js   # Schema for membership levels
│   ├── benefit.js           # Schema for membership benefits
│   ├── testimonial.js       # Schema for testimonials
│   ├── faq.js               # Schema for FAQs
│   ├── signupForm.js        # Schema for signup forms
├── components/
│   ├── membershipBenefits.js # Component for displaying membership benefits
│   ├── pricingPlans.js      # Component for pricing plans
│   ├── testimonials.js      # Component for testimonials
│   ├── faq.js               # Component for FAQs
│   ├── signupForm.js        # Component for signup forms
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Nonprofit Website**

```plaintext
nonprofit-website/
├── schemas/
│   ├── mission.js           # Schema for mission statements
│   ├── donation.js          # Schema for donation call-to-actions
│   ├── volunteer.js         # Schema for volunteer profiles
│   ├── impactStory.js       # Schema for impact stories
│   ├── event.js             # Schema for events
├── components/
│   ├── missionStatement.js  # Component for mission statements
│   ├── donationCallToAction.js # Component for donation call-to-actions
│   ├── volunteerProfiles.js # Component for volunteer profiles
│   ├── impactStories.js     # Component for impact stories
│   ├── events.js            # Component for events
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Portfolio Website**

```plaintext
portfolio-website/
├── schemas/
│   ├── project.js           # Schema for projects
│   ├── skill.js             # Schema for skills
│   ├── testimonial.js       # Schema for testimonials
│   ├── contactForm.js       # Schema for contact forms
│   ├── about.js             # Schema for about sections
├── components/
│   ├── projectShowcase.js   # Component for showcasing projects
│   ├── aboutMe.js           # Component for about me sections
│   ├── skillsList.js        # Component for listing skills
│   ├── testimonials.js      # Component for displaying testimonials
│   ├── contactForm.js       # Component for contact forms
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

### **Real Estate Website**

```plaintext
realestate-website/
├── schemas/
│   ├── property.js          # Schema for properties
│   ├── agent.js             # Schema for agent profiles
│   ├── testimonial.js       # Schema for testimonials
│   ├── contactForm.js       # Schema for contact forms
│   ├── marketTrend.js       # Schema for market trends
├── components/
│   ├── propertyListings.js  # Component for property listings
│   ├── agentProfiles.js     # Component for agent profiles
│   ├── testimonials.js      # Component for testimonials
│   ├── contactForm.js       # Component for contact forms
│   ├── marketTrends.js      # Component for market trends
└── config/
    ├── siteConfig.js        # Configuration for general site settings
    ├── navigation.js        # Configuration for site navigation
    └── seo.js               # Configuration for SEO settings
```

## **Getting Started**

### **Install Dependencies**
Make sure you have Node.js installed. Navigate to the website directory you want to work on and install the necessary dependencies:

```bash
npm install
```

### **Set Up Sanity Studio**
Follow the [Sanity documentation](https://www.sanity.io/docs) to set up the Sanity Studio with the provided schemas.

### **Run the Development Server**
Start the development server to see the website in action:

```bash
npm start
```

### **Add Static Assets**
Place your images and documents in the `static/images/` and `static/documents/` directories, respectively.

### **Configure the Site**
Update `config/siteConfig.js`, `config/navigation.js`, and `config/seo.js` with your site-specific settings.

## **Contributing**

Feel free to contribute to this project by submitting issues or pull requests. Ensure your changes adhere to the project's coding standards and guidelines.

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

For more information about Sanity and its usage, visit the [Sanity documentation](https://www.sanity.io/docs).

---
