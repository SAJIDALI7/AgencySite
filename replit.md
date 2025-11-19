# Creative Agency Website

## Overview

This is a modern creative agency website built as a full-stack web application showcasing portfolio work, services, and pricing. The application features a portfolio-first design approach with instant conversion capabilities via WhatsApp integration. It includes contact form functionality with backend storage, responsive design using shadcn/ui components, and a comprehensive multi-page structure covering home, services, portfolio, pricing, about, and contact pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Client-side routing using Wouter (lightweight alternative to React Router)
- React Query (@tanstack/react-query) for server state management and API data fetching

**UI Component System**
- shadcn/ui components built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Component aliases configured for clean imports (@/components, @/lib, @/hooks)

**Design System**
- Typography: Inter (primary) and Space Grotesk (accent) via Google Fonts
- Spacing primitives based on Tailwind's 4px scale (4, 8, 12, 16, 20, 24)
- Responsive grid layouts: 2-column tablet, 3-column desktop for portfolio/services
- Max-width containers: 7xl for sections, screen-2xl for portfolio, 4xl for text content
- Portfolio-first presentation with bold visual presence following agency best practices

**State Management**
- React Query for server state, caching, and API synchronization
- React Hook Form with Zod validation for form state and validation
- Local component state using React hooks (useState, useEffect)
- Toast notifications for user feedback via custom useToast hook

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Custom Vite middleware integration for development HMR
- TypeScript throughout the server codebase for type safety
- Node.js runtime with ES modules (type: "module")

**API Design**
- RESTful API endpoints under /api prefix
- POST /api/contact endpoint for contact form submissions
- JSON request/response format with proper error handling
- Zod schema validation for incoming request data using drizzle-zod integration

**Request Processing**
- Express middleware for JSON parsing with raw body preservation
- Request logging middleware capturing method, path, status, duration, and response preview
- Error handling with validation error formatting via zod-validation-error
- 80-character log line truncation for readability

### Data Storage

**Storage Abstraction**
- IStorage interface defining storage contract (createContactSubmission, getAllContactSubmissions)
- In-memory storage implementation (MemStorage) using Map data structure
- Ready for database migration with schema already defined via Drizzle ORM
- UUID generation for record IDs using Node.js crypto module

**Database Schema (Prepared)**
- Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- Contact submissions table schema with id, name, email, message, phone, submittedAt fields
- Schema validation using Zod with custom error messages
- Migration support configured via drizzle-kit pointing to ./migrations directory

**Data Validation**
- Zod schemas derived from Drizzle table definitions for consistency
- Email validation, minimum length constraints on name (2 chars) and message (10 chars)
- Type inference from schemas for TypeScript type safety throughout the application
- Server-side validation before data persistence

### Routing & Navigation

**Client-Side Routing**
- Wouter for lightweight client-side routing with pattern matching
- Routes: / (Home), /services, /portfolio, /pricing, /about, /contact, 404 fallback
- Sticky navigation with active link highlighting based on current location
- Mobile-responsive menu with hamburger toggle and slide-out navigation

**Static Asset Serving**
- Vite handles static assets in development via middleware
- Production build outputs to dist/public directory
- Asset imports aliased via @assets path for generated images
- Favicon and meta tags configured in index.html for SEO

### External Dependencies

**Third-Party UI Libraries**
- @radix-ui/* primitives (27 components): Accessible, unstyled component primitives
- shadcn/ui: Pre-styled component library built on Radix UI
- Lucide React: Icon library for consistent iconography
- Embla Carousel: Touch-friendly carousel/slider component
- CMDK: Command menu component for keyboard-driven interfaces

**Form & Validation**
- React Hook Form: Performant form state management with minimal re-renders
- @hookform/resolvers: Integration layer for Zod validation
- Zod: TypeScript-first schema validation
- drizzle-zod: Automatic Zod schema generation from Drizzle tables

**Database & ORM**
- Drizzle ORM: TypeScript ORM with SQL-like query builder
- @neondatabase/serverless: PostgreSQL serverless driver for Neon Database
- drizzle-kit: Schema migrations and introspection CLI tool
- connect-pg-simple: PostgreSQL session store (prepared for authentication)

**Utility Libraries**
- class-variance-authority: Type-safe variant styling for components
- clsx & tailwind-merge: Conditional className utilities
- date-fns: Date formatting and manipulation
- nanoid: Compact unique ID generation

**Development Tools**
- tsx: TypeScript execution for Node.js (runs server/index.ts)
- esbuild: Fast JavaScript bundler for production server build
- @replit/vite-plugin-*: Replit-specific development enhancements (error overlay, cartographer, dev banner)
- Vite runtime error modal for better development experience

**WhatsApp Integration**
- Direct WhatsApp Web integration via wa.me URLs
- Configurable phone number (currently placeholder: 1234567890)
- Pre-filled message template for user convenience
- Floating action button and inline button variants for multiple conversion points