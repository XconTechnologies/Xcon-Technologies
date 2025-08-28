# XCon Technologies - Full-Stack Web Application

## Overview
This project is a full-stack web application for XCon Technologies, a digital transformation company. Its purpose is to showcase the company's services and capabilities through a modern, responsive website. Key capabilities include a dynamic services section, an interactive portfolio, comprehensive contact and consultation forms, and a robust blog system. The application aims to enhance XCon Technologies' online presence, facilitate client engagement, and provide a platform for content marketing.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **State Management**: TanStack Query
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with CSS variables
- **Build Tool**: Vite
- **Design Principles**: Responsive design, consistent typography (Sora font), green and black color scheme, professional imagery, and intuitive navigation (e.g., mega menus, tabbed sections).
- **Key Features**:
    - **Dynamic Content**: Services section with auto-cycling tabs and image optimization.
    - **Interactive Elements**: Contact forms with validation, file uploads, and international phone input.
    - **Content Management**: Comprehensive blog system with search, filtering, and detailed article pages.
    - **Navigation**: Mega menus for Services, Industries, and Technologies.
    - **Accessibility**: Radix UI primitives for accessible components.

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database
- **Development**: tsx
- **Production**: esbuild for bundling
- **API**: RESTful endpoints for contact form submissions, quote requests, consultation requests, and internship applications.
- **Email Service**: Resend for email notifications and auto-replies (integrated with Nodemailer for Gmail SMTP during development).
- **File Storage**: In-memory storage for file uploads via Multer.

### Data Flow
- **Frontend to Backend**: Form submissions (contact, quote, consultation, internship) POST data to respective API endpoints (`/api/contact`, `/api/quote`, `/api/consultation`, `/api/internship`).
- **Database Integration**: Drizzle ORM manages PostgreSQL schema and operations.
- **Email Flow**: Backend processes form data, sends emails via Resend, and logs interactions.

### Architectural Decisions
- **Monorepo Structure**: `shared/` directory for shared types and utilities ensures type safety and code reuse across frontend and backend.
- **Database Strategy**: PostgreSQL with Drizzle ORM and Neon Database provides scalable, type-safe data persistence with migration management.
- **UI Component System**: Radix UI + shadcn/ui ensures consistent, accessible, and customizable UI components.
- **Build & Development**: Vite for frontend and tsx/esbuild for backend optimize development workflow and production builds.
- **Deployment**: Separate client and server builds (`dist/public` and `dist/index.js`), with `DATABASE_URL` environment variable for configuration.
- **Analytics**: Google Analytics integration (G-N9QFNXZ3BQ) for page views and form submissions.
- **Scroll Management**: Comprehensive scroll restoration (`useScrollRestoration`) ensures pages always open from the top.

## External Dependencies

### Core
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI, shadcn/ui
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Development**: Vite, TypeScript, ESBuild, tsx
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Email Service**: Resend
- **File Upload**: Multer (for Express middleware)
- **Analytics**: Google Analytics

### Utilities
- Nodemailer (for SMTP during development)
- tsx
- ESLint