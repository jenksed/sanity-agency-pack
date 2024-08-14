# Sanity Agency Pack

Welcome to the Sanity Agency Pack! This package provides a comprehensive setup for a corporate website using Sanity, including schemas, components, static assets, and configuration files.

## Directory Structure

Here's an overview of the directory structure and its contents:

corporate-website/
├── schemas/
│ ├── homepage.js # Schema for homepage content
│ ├── service.js # Schema for service-related content
│ ├── teamMember.js # Schema for team member profiles
│ ├── testimonial.js # Schema for testimonials
│ ├── blog.js # Schema for blog posts
│ ├── caseStudy.js # Schema for case studies
├── components/
│ ├── heroSection.js # Component for the hero section
│ ├── serviceOverview.js # Component for service overview
│ ├── clientLogos.js # Component for client logos
│ ├── testimonials.js # Component for testimonials
│ ├── blogHighlights.js # Component for blog highlights
│ ├── callToAction.js # Component for call-to-action sections
├── static/
│ ├── images/ # Directory for image files
│ └── documents/ # Directory for document files
└── config/
├── siteConfig.js # Configuration for general site settings
├── navigation.js # Configuration for site navigation
└── seo.js # Configuration for SEO settings

## Files and Directories

### `schemas/`

This directory contains the schema definitions for various types of content on the website.

* `homepage.js` - Defines the schema for the homepage content.
* `service.js` - Defines the schema for service-related content.
* `teamMember.js` - Defines the schema for team member profiles.
* `testimonial.js` - Defines the schema for testimonials.
* `blog.js` - Defines the schema for blog posts.
* `caseStudy.js` - Defines the schema for case studies.


### `components/`

This directory contains React components used to build the website's user interface.

- `heroSection.js`: Component for the hero section of the homepage.
- `serviceOverview.js`: Component for displaying an overview of services.
- `clientLogos.js`: Component for displaying client logos.
- `testimonials.js`: Component for displaying testimonials.
- `blogHighlights.js`: Component for highlighting blog posts.
- `callToAction.js`: Component for call-to-action sections.

### `static/`

This directory contains static assets for the website.

- `images/`: Directory for storing image files.
- `documents/`: Directory for storing document files.

### `config/`

This directory contains configuration files for the website.

- `siteConfig.js`: Configuration file for general site settings.
- `navigation.js`: Configuration file for site navigation settings.
- `seo.js`: Configuration file for SEO settings.

## Getting Started

1. Install Dependencies: Make sure you have Node.js installed. Navigate to the `corporate-website` directory and install the necessary dependencies.

```
npm install
   ```

2. **Set Up Sanity Studio**: Follow the Sanity documentation to set up the Sanity Studio with the provided schemas.

3. **Run the Development Server**: Start the development server to see the website in action.

   ```bash
   npm start
   ```

4. **Add Static Assets**: Place your images and documents in the `static/images/` and `static/documents/` directories, respectively.

5. **Configure the Site**: Update `config/siteConfig.js`, `config/navigation.js`, and `config/seo.js` with your site-specific settings.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Ensure your changes adhere to the project's coding standards and guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For more information about Sanity and its usage, visit the [Sanity documentation](https://www.sanity.io/docs).

