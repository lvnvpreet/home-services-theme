# Home Services Hugo Theme

A comprehensive, modern Hugo theme designed specifically for home services and maintenance businesses. This theme provides everything you need to create a professional website for contractors, plumbers, electricians, HVAC specialists, and other home service providers.

![Home Services Theme Screenshot](https://via.placeholder.com/800x400/007bff/ffffff?text=Home+Services+Theme)

## 🚀 Features

### Design & Layout
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern UI** - Clean, professional design with Bootstrap 5
- **10 Homepage Sections** - Complete landing page with all essential elements
- **Service Showcase** - Dedicated pages for each service with filtering
- **Project Gallery** - Before/after sliders and portfolio showcase
- **Blog System** - Full-featured blog with categories and tags

### Business Features
- **Location-Based** - Service area mapping and location targeting
- **Emergency Services** - Prominent emergency contact sections
- **Contact Forms** - Multiple contact forms with validation
- **Team Profiles** - Showcase your expert team members
- **Testimonials** - Customer review sections
- **Service Filtering** - Easy browsing of service categories

### Technical Features
- **SEO Optimized** - Structured data, meta tags, and performance
- **Fast Loading** - Optimized assets and lazy loading
- **PWA Ready** - Service worker and manifest included
- **Google Maps** - Integrated location mapping
- **Social Media** - Complete social media integration
- **Search Functionality** - Built-in site search

## 📦 Installation

### Method 1: Git Submodule (Recommended)

```bash
# Create new Hugo site
hugo new site my-home-services-site
cd my-home-services-site

# Add theme as submodule
git init
git submodule add https://github.com/your-username/home-services-theme themes/home-services-theme

# Copy example configuration
cp themes/home-services-theme/exampleSite/config.toml .

# Start development server
hugo server -D
```

### Method 2: Direct Download

```bash
# Create new Hugo site
hugo new site my-home-services-site
cd my-home-services-site

# Download and extract theme
wget https://github.com/your-username/home-services-theme/archive/main.zip
unzip main.zip
mv home-services-theme-main themes/home-services-theme

# Copy example configuration
cp themes/home-services-theme/exampleSite/config.toml .

# Start development server
hugo server -D
```

### Method 3: Hugo Modules

```bash
# Initialize Hugo modules
hugo mod init your-domain.com

# Add theme module to config.toml
echo 'theme = ["github.com/your-username/home-services-theme"]' >> config.toml

# Download dependencies
hugo mod get

# Start development server
hugo server -D
```

## ⚙️ Configuration

### Basic Configuration

Create or update your `config.toml` file:

```toml
baseURL = "https://yourhomeservices.com"
languageCode = "en-us"
title = "Your Home Services Company"
theme = "home-services-theme"

[params]
  # Business Information
  business_type = "General Contractor"
  primary_location = "New York, NY"
  service_areas = ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"]
  address = "123 Main Street, New York, NY 10001"
  coordinates = "40.7128,-74.0060"
  
  # Contact Information
  phone = "+1 (555) 123-4567"
  emergency_phone = "+1 (555) 911-HELP"
  email = "info@yourhomeservices.com"
  
  # Business Details
  license_number = "LIC-12345"
  years_in_business = "15"
  
  # Hero Section
  hero_title = "Professional Home Services in New York"
  hero_subtitle = "Licensed, insured, and trusted by homeowners for over 15 years"
  hero_image = "/images/hero/home-services-hero.jpg"
```

### Business Hours Configuration

```toml
[params.business_hours]
  monday = "7:00 AM - 7:00 PM"
  tuesday = "7:00 AM - 7:00 PM"
  wednesday = "7:00 AM - 7:00 PM"
  thursday = "7:00 AM - 7:00 PM"
  friday = "7:00 AM - 7:00 PM"
  saturday = "8:00 AM - 6:00 PM"
  sunday = "Emergency Only"
```

### Social Media Configuration

```toml
[params.social]
  facebook = "https://facebook.com/yourhomeservices"
  twitter = "https://twitter.com/yourhomeservices"
  instagram = "https://instagram.com/yourhomeservices"
  linkedin = "https://linkedin.com/company/yourhomeservices"
  youtube = "https://youtube.com/yourhomeservices"
  yelp = "https://yelp.com/biz/yourhomeservices"
  google_business = "https://business.google.com/yourhomeservices"
```

### Menu Configuration

```toml
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  
  [[menu.main]]
    name = "About"
    url = "/about/"
    weight = 2
  
  [[menu.main]]
    name = "Services"
    url = "/services/"
    weight = 3
  
  [[menu.main]]
    name = "Gallery"
    url = "/gallery/"
    weight = 4
  
  [[menu.main]]
    name = "Contact"
    url = "/contact/"
    weight = 5
  
  [[menu.main]]
    name = "Blog"
    url = "/blog/"
    weight = 6
```

## 📝 Content Creation

### Creating Services

Create service pages in `content/services/`:

```bash
hugo new services/plumbing.md
```

Example service front matter:

```yaml
---
title: "Professional Plumbing Services"
description: "Expert plumbing installation, repair, and maintenance services"
date: 2024-01-15T10:00:00-05:00
draft: false

# Service details
category: "plumbing"
service_type: "Residential & Commercial"
icon: "fas fa-wrench"
image: "/images/services/plumbing-service.jpg"

# Pricing
starting_price: "$89"
hourly_rate: "$120/hour"
free_estimate: true

# Service features
emergency: true
same_day: true
licensed: true
warranty: "1 Year Parts & Labor"
response_time: "30 minutes"

# Features included
features:
  - "Emergency repairs 24/7"
  - "Pipe installation and replacement"
  - "Drain cleaning and unclogging"
  - "Water heater service"
  - "Fixture installation"
  - "Leak detection and repair"

# Process steps
process:
  - title: "Initial Assessment"
    description: "Our certified plumber evaluates the issue"
  - title: "Transparent Quote"
    description: "We provide upfront pricing with no hidden fees"
  - title: "Professional Repair"
    description: "Using quality parts and tools"
  - title: "Testing & Cleanup"
    description: "We test all work and clean up completely"

# FAQ for this service
faq:
  - question: "Do you offer emergency plumbing services?"
    answer: "Yes, we provide 24/7 emergency plumbing services."
  - question: "Are your plumbers licensed and insured?"
    answer: "All our plumbers are fully licensed, bonded, and insured."
---

Your service content goes here...
```

### Creating Team Members

Create team member pages in `content/team/`:

```bash
hugo new team/john-smith.md
```

Example team member front matter:

```yaml
---
title: "John Smith"
description: "Master Electrician with 15+ years of experience"
date: 2024-01-15T10:00:00-05:00
draft: false

# Team member details
position: "Master Electrician"
specialty: "Electrical Systems & Safety"
experience: "15"
image: "/images/team/john-smith.jpg"

# Contact information
email: "john@yourhomeservices.com"
phone: "+1 (555) 123-4567"

# Certifications
certifications:
  - "Licensed Master Electrician"
  - "OSHA 30-Hour Certified"
  - "NFPA 70E Arc Flash Safety"
---

Team member bio content...
```

### Creating Blog Posts

Create blog posts in `content/blog/`:

```bash
hugo new blog/winter-hvac-maintenance.md
```

Example blog post front matter:

```yaml
---
title: "Essential Winter HVAC Maintenance Tips"
description: "Prepare your heating system for winter"
date: 2024-01-15T09:00:00-05:00
draft: false

# Blog post details
author: "Sarah Johnson"
author_bio: "HVAC specialist with 10+ years of experience"
category: "HVAC"
featured: true
image: "/images/blog/winter-hvac-maintenance.jpg"

# Content attributes
difficulty: "Beginner"
emergency_related: false

# Tags
tags: ["HVAC", "winter", "maintenance", "energy-saving"]

# Tools needed for DIY tips
tools_needed:
  - "New air filter"
  - "Vacuum cleaner"
  - "Screwdriver"

# Safety tips
safety_tips:
  - "Always turn off power before maintenance"
  - "Call a professional for gas line issues"

# Cost estimates
cost_estimate:
  diy: "$50 - $100"
  professional: "$150 - $300"
---

Your blog content here...
```

### Creating Gallery Items

Create gallery items in `content/gallery/`:

```bash
hugo new gallery/bathroom-renovation.md
```

Example gallery front matter:

```yaml
---
title: "Complete Bathroom Renovation"
description: "Full bathroom remodel in Manhattan apartment"
date: 2024-01-10T14:00:00-05:00
draft: false

# Gallery item details
category: "general"
location: "Manhattan, NY"
duration: "2 weeks"
cost_range: "$15,000 - $20,000"

# Images
image: "/images/gallery/bathroom-after.jpg"
before_image: "/images/gallery/bathroom-before.jpg"
after_image: "/images/gallery/bathroom-after.jpg"

# Project features
features:
  - "Custom tile work"
  - "New plumbing fixtures"
  - "LED lighting upgrade"

# Services involved
services_used: ["plumbing", "electrical", "general"]
---

Project description...
```

## 🎨 Customization

### Colors and Branding

The theme uses CSS custom properties for easy customization. Edit `static/css/custom.css`:

```css
:root {
  --primary-color: #007bff;      /* Your brand color */
  --primary-dark: #0056b3;       /* Darker shade */
  --secondary-color: #6c757d;    /* Secondary text */
  --success-color: #28a745;      /* Success messages */
  --warning-color: #ffc107;      /* Warnings */
  --danger-color: #dc3545;       /* Emergency/errors */
}
```

### Logo and Images

1. Add your logo to `static/images/logo.png`
2. Update the logo path in `config.toml`:

```toml
[params]
  logo = "/images/your-logo.png"
```

3. Add a favicon to `static/favicon.ico`

### Custom CSS

Add custom styles to `static/css/custom.css`:

```css
/* Custom styles for your business */
.custom-header {
  background: linear-gradient(45deg, #your-color, #another-color);
}

.service-card:hover {
  transform: translateY(-10px);
}
```

### Fonts

Add custom fonts in `layouts/partials/head.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap" rel="stylesheet">
```

## 🔧 Advanced Configuration

### Google Maps Integration

1. Get a Google Maps API key
2. Add to your config:

```toml
[params.google]
  maps_api_key = "YOUR_GOOGLE_MAPS_API_KEY"
```

### Analytics Setup

```toml
[params.google]
  analytics = "G-XXXXXXXXXX"
```

### Form Handling

For Netlify deployments, forms work automatically. For other hosts:

1. Set up form handling service (Formspree, etc.)
2. Update form action URLs in templates

### SEO Optimization

The theme includes built-in SEO features:

- Structured data for LocalBusiness
- Meta tags and Open Graph
- XML sitemap
- Robots.txt

Configure in `config.toml`:

```toml
[params.seo]
  description = "Your business description"
  keywords = "home services, contractor, plumbing, electrical"
```

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build settings:
   - Build command: `hugo --minify`
   - Publish directory: `public`
   - Hugo version: `0.112.0`

### Vercel

1. Import your repository
2. Framework preset: Hugo
3. Build command: `hugo --minify`
4. Output directory: `public`

### GitHub Pages

```yaml
# .github/workflows/gh-pages.yml
name: GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.112.0'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 🛠️ Development

### Prerequisites

- Hugo Extended v0.112.0+
- Node.js 16+ (for development tools)
- Git

### Development Setup

```bash
# Clone repository
git clone https://github.com/your-username/home-services-theme
cd home-services-theme

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run all linters
- `npm run format` - Format code
- `npm run optimize:images` - Optimize images
- `npm run test` - Run tests

## 📖 Shortcodes

The theme includes several useful shortcodes:

### Service Card

```markdown
{{< service-card title="Plumbing" icon="fas fa-wrench" price="$89" description="Professional plumbing services" link="/services/plumbing" >}}
```

### Emergency Notice

```markdown
{{< emergency-notice title="Emergency Plumbing" phone="+1-555-123-4567" >}}
Call us immediately for urgent plumbing issues
{{< /emergency-notice >}}
```

### Testimonial

```markdown
{{< testimonial name="John Doe" location="New York, NY" rating="5" >}}
Great service, highly recommended!
{{< /testimonial >}}
```

### Before/After Images

```markdown
{{< before-after before="/images/before.jpg" after="/images/after.jpg" title="Kitchen Renovation" >}}
```

### Feature List

```markdown
{{< feature-list features="Licensed & Insured,24/7 Emergency Service,Free Estimates,Quality Guarantee" >}}
```

### Call to Action

```markdown
{{< cta title="Ready to Get Started?" button-text="Contact Us" button-link="/contact" >}}
Get your free estimate today
{{< /cta >}}
```

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This theme is released under the MIT License. See [LICENSE](LICENSE) file for details.

## 🆘 Support

- [Documentation](https://github.com/your-username/home-services-theme/wiki)
- [Issues](https://github.com/your-username/home-services-theme/issues)
- [Discussions](https://github.com/your-username/home-services-theme/discussions)

## 🙏 Credits

- [Hugo](https://gohugo.io/) - Static site generator
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## 📊 Theme Variations

This theme can be easily adapted for different home service businesses:

- **General Contractor** - Default configuration
- **Electrician** - Electrical services focus
- **Plumber** - Plumbing services specialization
- **HVAC Contractor** - Heating and cooling services
- **Roofing Contractor** - Roofing and exterior work
- **Handyman** - General repair services
- **Landscaping** - Outdoor and garden services
- **Cleaning Services** - Residential and commercial cleaning

Each variation includes appropriate color schemes, icons, and content examples.

---

**Ready to build your home services website?** [Get started now!](https://github.com/your-username/home-services-theme)