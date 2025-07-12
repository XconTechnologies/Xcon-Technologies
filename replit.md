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

- **Logo Updates (January 2025)**: Updated header and footer logos with new XCon Technologies professional logos from provided assets
- **Layout Width Constraint (January 2025)**: Set website layout to maximum width of 1440px instead of full width for better design consistency across all sections
- **Service Images Integration**: Integrated 8 professional service images that correspond to each service tab with dynamic content switching
- **Services Section Enhancement**: Updated "What Services We Offer" section from vertical to horizontal tabs layout with 8 services (Web Development, Software Consulting, Cloud Engineering, Mobile Development, UI/UX Design, MVP Development, Digital Marketing, Data Engineering)
- **Footer Completion**: Completed comprehensive footer section with exact design, XCon Technologies branding, 10 services list, award badges, newsletter subscription, and social media links