# Hawthorne Auto Repair - Frontend

A modern, customer-facing web application for Hawthorne Auto Repair, featuring repair booking, repair tracking, and car sales management.

## Features

- **Book Repair**: Easy appointment scheduling form
- **Track Repairs**: Real-time repair status and cost breakdown
- **Browse Cars**: Car inventory with filtering and inquiry forms
- **Contact**: Direct communication with the shop
- **Responsive Design**: Works on desktop, tablet, and mobile

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client (for backend integration)

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
src/
├── components/        # Reusable components (Header, Navigation, Footer)
├── pages/            # Page components (Home, BookRepair, MyRepairs, etc.)
├── hooks/            # Custom React hooks (future)
├── App.jsx           # Main app component with routes
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Available Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Landing page with quick actions |
| Book Repair | `/book-repair` | Appointment scheduling form |
| My Repairs | `/my-repairs` | View repair status and invoices |
| Cars for Sale | `/cars-for-sale` | Browse inventory |
| Contact | `/contact` | Contact form and shop info |

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Backend Integration

The frontend expects the backend API to be running on `http://localhost:5000`.

Key API endpoints to implement:
- `POST /api/repairs` - Submit repair booking
- `GET /api/repairs/:customerId` - Get customer repairs
- `POST /api/inquiries` - Submit car inquiry
- `GET /api/cars` - Get car inventory
- `POST /api/contact` - Submit contact form

## Styling

Tailwind CSS is configured with custom colors:
- `primary` - Dark gray (#1F2937)
- `secondary` - Amber/Gold (#F59E0B)
- `danger` - Red (#EF4444)
- `success` - Green (#10B981)

## Next Steps

1. ✅ Frontend setup complete
2. ⏳ Backend API (Node.js/Express)
3. ⏳ Database (PostgreSQL)
4. ⏳ Authentication
5. ⏳ Payment integration (Stripe)
6. ⏳ Admin dashboard
7. ⏳ Mobile app (React Native)

## License

© 2026 Hawthorne Auto Repair. All rights reserved.
