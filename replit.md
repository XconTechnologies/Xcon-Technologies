# XCon Technologies - Full-Stack Web Application

## Overview

This is a full-stack web application for XCon Technologies, a digital transformation company. The application features a modern, responsive company website with a React frontend and Express backend. The system is built with TypeScript and uses PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for bundling

### Key Components

#### Frontend Components
- **Layout Components**: Header, Footer, Hero section
- **Content Sections**: Services, Portfolio, About, Testimonials, Statistics
- **Interactive Elements**: Contact form with validation
- **UI Library**: Complete shadcn/ui component library (40+ components)

#### Backend Services
- **API Routes**: RESTful endpoints for contact form submission
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Database Schema**: User management with Drizzle ORM
- **Development Server**: Vite integration for hot reloading

## Data Flow

### Frontend to Backend
1. Contact form submissions via POST to `/api/contact`
2. Form validation on client-side using React Hook Form
3. Success/error feedback via toast notifications
4. Future: User authentication and data persistence

### Database Integration
- Drizzle ORM with PostgreSQL dialect
- Schema definition in `shared/schema.ts`
- Migration management with `drizzle-kit`
- Type-safe database operations

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Database**: Drizzle ORM, Neon Database connector
- **Development**: Vite, TypeScript, ESBuild, tsx
- **Styling**: Tailwind CSS, class-variance-authority, clsx

### Development Tools
- **Replit Integration**: Vite plugins for Replit environment
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Build Process**: Separate client and server builds

## Deployment Strategy

### Development Environment
- **Dev Server**: `npm run dev` runs Express server with Vite middleware
- **Hot Reloading**: Vite HMR for frontend, tsx for backend
- **Database**: Drizzle push for schema synchronization

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Migration-based deployment with Drizzle

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Deployment**: Single-command build process
- **Static Assets**: Served from Express in production

### Architecture Decisions

#### Monorepo Structure
- **Problem**: Managing full-stack TypeScript application
- **Solution**: Shared types and utilities in `shared/` directory
- **Benefits**: Type safety across client-server boundary, code reuse

#### Database Strategy
- **Problem**: Need for scalable data persistence
- **Solution**: Drizzle ORM with PostgreSQL and Neon Database
- **Benefits**: Type-safe queries, migration management, serverless scaling

#### UI Component System
- **Problem**: Consistent, accessible UI components
- **Solution**: Radix UI primitives with shadcn/ui styling
- **Benefits**: Accessibility by default, customizable theming, TypeScript support

#### Build and Development
- **Problem**: Efficient development workflow for full-stack app
- **Solution**: Vite for frontend, tsx for backend, unified build process
- **Benefits**: Fast HMR, TypeScript execution, production optimization

## Recent Changes

- **Sora Font Implementation (January 2025)**: Implemented Sora font throughout entire website for all headings, text, buttons, and content elements
- **Headings Green and Black Design (January 2025)**: Updated all section headings to use green and black color combination with specific words highlighted in green for visual emphasis
- **Header Spacing Enhancement (January 2025)**: Added top spacing to header (h-24 mt-2) and adjusted hero section padding (pt-36) for better visual balance
- **Social Media Links Update (January 2025)**: Updated footer social media icons with authentic XCon Technologies URLs for Facebook, LinkedIn, and Instagram with proper target="_blank" attributes
- **Footer Certification Badges Enhancement (January 2025)**: Replaced custom SVG badges with authentic AWS certification badge images (w-20 h-20) without backgrounds, using object-contain for proper scaling and smooth hover effects with shadow animations. Updated with new clean AWS certification badges with transparent backgrounds and consistent sizing.
- **Footer Layout Reorganization (January 2025)**: Moved certification badges to center bottom section (horizontal line) and moved newsletter subscription to right column below company links for better layout organization
- **Footer Spacing Fix (January 2025)**: Adjusted footer padding from px-4 to px-8 lg:px-16 to match reference design with proper left and right spacing
- **Footer Contact Details Update (January 2025)**: Updated contact information with new phone number (+15133024718), kept same email (askforquote@xcontechnologies.com), and simplified address to "Ohio City, USA"
- **Newsletter Section Background Fix (January 2025)**: Removed white background box from newsletter subscription section in footer to match the gray footer background for consistent design
- **Technology Logos Update (January 2025)**: Updated "Innovate with the Right Software Team" section with single comprehensive technology logos image without text labels for cleaner appearance while keeping original client logos section intact
- **Services Button Styling (January 2025)**: Updated GET A QUOTE button in services section to match header button style with rounded-full, uppercase text, and consistent sizing
- **Logo Revert (January 2025)**: Reverted back to original logo files in header and footer as requested
- **Statistics Section Spacing Fix (January 2025)**: Reduced excessive padding in statistics section from py-20 to py-12 for better visual balance
- **Client Logos Heading Update (January 2025)**: Updated "Trusted by Leading Companies" heading to match other section headings with same size and green/black color pattern
- **Engagement Models Bottom Hover (January 2025)**: Kept video animations and added hover effects only to bottom text section - text area turns green background with white text on hover
- **Solutions Section Removal (January 2025)**: Removed "Examples of Solutions We Deliver" section and its import from home page to streamline website content and focus on core services
- **Hero Section Text Formatting Update (January 2025)**: Updated hero section to display "Grow Your Business with" as normal text weight and "XCon Technologies!" as bold text for better visual hierarchy
- **Heading Size Reduction (January 2025)**: Reduced all section headings from text-4xl/5xl to text-3xl/4xl across all components for better visual balance and hierarchy
- **Technology Section Heading Update (January 2025)**: Changed "Innovate with the Right Software Team" to "Emerging Technologies We Use" with green color highlighting
- **Engagement Model Animations Enhancement (January 2025)**: Increased video animation container height from h-48 to h-64 for better visibility and clarity
- **Client Logos Integration to Hero (January 2025)**: Moved client logos from separate "Our Valued Partners" section to hero section under "Trusted by Leading Companies" heading using authentic logo imports
- **Industries Section Removal (January 2025)**: Completely removed "Industries we deal" section from engagement models component as requested
- **Services Auto-Cycling Implementation (January 2025)**: Added automatic cycling through services every 4 seconds with manual override capability and removed colored overlays from service images for clean white background display
- **Engagement Model Text Fix (January 2025)**: Fixed text display issues in engagement models section by resolving conflicting group classes using group/text modifier
- **Heading Size Standardization (January 2025)**: Standardized all section headings to text-3xl md:text-4xl size to match "What Services We Offer" heading across all components
- **Client Logos Hero Integration (January 2025)**: Moved all 20 client logos from separate section to hero section with right-to-left scrolling animation, removed ClientLogos component from home page
- **Consultation Contact Section (January 2025)**: Created comprehensive consultation contact section before footer with development project inquiry form, file upload, contact methods (Call, Email, WhatsApp, Live chat), and decorative illustration matching provided design
- **FAQs Section Implementation (January 2025)**: Added comprehensive FAQs section before consultation form with XCon Technologies-specific content covering SDLC, project delivery, costs, quality control, code ownership, and post-launch support
- **Logo Animation Speed Enhancement (January 2025)**: Improved client logos scrolling animation from 30s to 20s for faster, smoother movement with maintained hover pause functionality
- **Hero Section Logo Enhancement (January 2025)**: Replaced Muslim Hub with Renovex logo, removed background containers, and reduced logo size to h-6 for cleaner appearance. All 3 partner logos (Dunya Consultants, Cloud Choice Technologies, Renovex) now display with equal sizing and consistent white filter effects
- **Client Logos Update (January 2025)**: Expanded client logos section with 20 authentic company logos including Harvest Energy, Accommodation Solutions, Cloud Choice Technologies, Lawless, Knopee, US Pro Listing, Alfikrah United, FloPro, Dunya Consultants, Velocity Tuning, Oliver, Quinnie Plastic Surgery, Suto Tech, MSK Consultants, Muslim Hub, Net Giant Technologies, Meet, Pi Systems, Renovex, and Motor Metrics
- **Hero Section Contact Form (January 2025)**: Removed award badges from footer and added professional contact form to hero section with transparent styling, form validation, and service selection dropdown
- **Industries and Technologies Mega Menus (January 2025)**: Added comprehensive mega menus for Industries and Technologies sections matching TekRevol website structure with 3-column layouts, organized categories, and hover effects
- **Comprehensive Mega Menu Implementation (January 2025)**: Created professional mega menu with 9 service categories organized in 3 columns, all links open in new tabs as requested
- **Services Section Layout Optimization (January 2025)**: Fixed image and content equality with consistent sizing and improved layout structure
- **Service Pages Creation (January 2025)**: Built 9 separate service pages with detailed content for Mobile App Development, Web Development, Custom Software Development, Cloud Services, Game Development, Artificial Intelligence, Digital Marketing, Staff Augmentation, and Blockchain Development
- **Quote Modal Implementation (January 2025)**: Created exact popup modal matching user screenshot with XCon Technologies logo, form fields (Name, Email, Phone, Business, Services dropdown, Message), and green Send Message button. All "GET A QUOTE" buttons now open this modal popup.
- **Email Address Updates (January 2025)**: Changed all email addresses throughout the website to askforquote@xcontechnologies.com for consistency.
- **Client Logos Section (January 2025)**: Added new scrolling client logos section after Statistics section with smooth right-to-left animation, featuring company logos with grayscale-to-color hover effects.
- **Engagement Models Design Fix (January 2025)**: Updated engagement models section to match exact screenshot with "YOU" text for first model, user icons for others, white backgrounds with green borders, and consistent sizing.
- **Service Image Transitions (January 2025)**: Fixed slow image transitions - service images now change instantly when tabs are clicked.
- **Technology Logos Update (January 2025)**: Replaced emoji placeholders with professional CDN-hosted brand logos for all 24 technologies.
- **Logo Updates (January 2025)**: Updated header and footer logos with new XCon Technologies professional logos from provided assets
- **Hero Logo Display Fix (January 2025)**: Fixed hero section client logos to display properly in static grid layout instead of scrolling animation, showing first 8 logos consistently
- **Consultation Form Reorder (January 2025)**: Reorganized consultation form to show Full Name, Company, Work Email, Phone Number first, then file upload section, then "How can we help" textarea last
- **Certifications Section Move (January 2025)**: Moved AWS certification badges from footer to after consultation form section for better layout organization
- **Section Spacing Standardization (January 2025)**: Standardized all section spacing to py-16 across all components for consistent visual rhythm and balance
- **Certifications Section Removal (January 2025)**: Completely removed "Our Certifications" heading, content box, and all AWS certification badges from consultation form section
- **Hero Logo Display Fix (January 2025)**: Removed "Trusted by Leading Companies" text and converted logo display to proper grid layout showing all 20 client logos without scrolling animation
- **Hero Logo Carousel Fix (January 2025)**: Removed problematic Cloud Choice Technologies logo and restored smooth right-to-left scrolling animation for 19 client logos
- **Consultation Form Enhancement (January 2025)**: Replaced contact method buttons with informative process text including "Quick response", "Personalized approach", and "No pressure" sections with icons
- **Process Information Enhancement (January 2025)**: Added comprehensive process information with green primary background box matching form styling, including 5 sections: Quick response, Personalized approach, No pressure, Proven expertise, and Secure & confidential with detailed descriptions
- **Green Box Height Adjustment (January 2025)**: Modified green process box to match form height exactly with 4 sections and appropriate content length
- **Phone Number Format Update (January 2025)**: Updated phone number from +15133024718 to proper US format +1 (513) 302-4718 with brackets
- **Green Box Perfect Height Match (January 2025)**: Added h-full and flex flex-col justify-center to green box to match form height exactly
- **Hero Logo Removal (January 2025)**: Removed Harvest Energy logo from hero section carousel, now displaying 18 client logos
- **Consultation Form Height Equalization (January 2025)**: Fixed both consultation form boxes to have equal height using h-full and flex column layout with mt-auto for button positioning
- **Engagement Model Animation Speed (January 2025)**: Increased video playback rate to 1.8x for faster, more engaging animations in work models section
- **Technology Section Restored (January 2025)**: Restored "Emerging Technologies We Use" section back to home page with original interactive tabs functionality
- **Technology Heading Differentiation (January 2025)**: Changed first technology section heading from "Emerging Technologies We Use" to "Advanced Technology Solutions" to differentiate the two technology sections
- **Technology Logos Removal (January 2025)**: Removed technology logos image from "Advanced Technology Solutions" section, keeping only the heading and description
- **Advanced Technology Solutions Redesign (January 2025)**: Redesigned "Advanced Technology Solutions" section to match provided layout with left sidebar showing technology categories and right grid showing technology logos with interactive selection
- **Technology Grid Simplification (January 2025)**: Simplified technology section to show 4 technologies per row in a clean grid layout, removed sidebar navigation, updated heading to "Advanced Technology Solutions" with custom description
- **Client Success Stories Redesign (January 2025)**: Changed "200+ Projects Delivered" section to "Our Client Success Stories" with improved layout, gradient backgrounds, decorative elements, and project counts per category
- **Layout Width Constraint (January 2025)**: Set website layout to maximum width of 1440px instead of full width for better design consistency across all sections
- **Service Images Integration**: Integrated 8 professional service images that correspond to each service tab with dynamic content switching
- **Services Section Enhancement**: Updated "What Services We Offer" section from vertical to horizontal tabs layout with 8 services (Web Development, Software Consulting, Cloud Engineering, Mobile Development, UI/UX Design, MVP Development, Digital Marketing, Data Engineering)
- **Footer Completion**: Completed comprehensive footer section with exact design, XCon Technologies branding, 10 services list, award badges, newsletter subscription, and social media links