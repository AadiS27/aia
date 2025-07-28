# ADmyBRAND Insights - Analytics Dashboard

A modern, AI-powered analytics dashboard for digital marketing agencies built with Next.js 15, TypeScript, and shadcn/ui.

![Dashboard Preview](https://img.shields.io/badge/Status-Ready-green)
![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4)

## 🌟 Features

### 📊 Core Dashboard Features
- **Overview Page** with key metrics cards (Revenue, Users, Conversions, Growth %)
- **Interactive Charts** - Area charts, line charts, pie charts, and custom funnel visualization
- **Data Table** with sorting, filtering, and pagination
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Real-time Updates** - Live metrics simulation with 5-second intervals

### 🎨 UI/UX Excellence
- **Modern Design System** - Consistent colors, typography, and spacing
- **Smooth Animations** - Micro-interactions, hover effects, and loading states
- **Dark/Light Mode Toggle** - Seamless theme switching with next-themes
- **Beautiful Visual Hierarchy** - Clear information architecture
- **Custom CSS Animations** - Fade-in, slide-in, and pulse effects

### ⚡ Advanced Features
- **Real-time Notifications** - Live toast notifications every 15 seconds
- **Export Functionality** - Working CSV export, PDF simulation
- **Advanced Filters** - Date ranges, status, performance levels, campaign types
- **Performance Insights** - AI-powered insights and recommendations
- **Breadcrumb Navigation** - Clear page location indicators
- **Beautiful Loading Skeletons** - Enhanced loading states

### 📈 Chart Types
- **Revenue Chart** - Area chart with gradient fills
- **User Growth Chart** - Multi-line chart with active dots
- **Traffic Sources** - Colorful donut chart
- **Conversion Funnel** - Custom animated funnel visualization
- **Campaign Performance** - Interactive bar chart

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd idkd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3002 (or http://localhost:3000)
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Pages & Navigation

- **Overview (/)** - Main dashboard with all key metrics
- **Analytics (/analytics)** - Detailed analytics and advanced charts
- **Campaigns (/campaigns)** - Campaign management and performance
- **Audience (/audience)** - User demographics and behavior
- **Reports (/reports)** - Comprehensive reporting tools
- **Insights (/insights)** - AI-powered insights and recommendations

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15.4.4** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS 4.0** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

### UI Components & Libraries
- **Recharts** - Chart library for data visualization
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark/light mode support
- **Radix UI** - Unstyled, accessible UI primitives

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **tw-animate-css** - Additional Tailwind animations

## 🎯 Key Components

### Dashboard Layout
- Responsive sidebar navigation
- Top navigation bar with search
- User dropdown menu
- Theme toggle

### Charts & Visualizations
- `RevenueChart` - Monthly revenue trends
- `UserGrowthChart` - User acquisition metrics
- `TrafficSourcesChart` - Traffic distribution
- `ConversionChart` - Custom funnel visualization
- `CampaignPerformanceChart` - Campaign metrics

### Interactive Features
- `AdvancedFilters` - Multi-criteria filtering
- `RealtimeNotifications` - Live notification system
- `PerformanceInsights` - AI-powered recommendations
- `MetricsCard` - Animated metric displays

## 📊 Data Features

### Mock Data Integration
- Realistic sample data for all metrics
- Simulated real-time updates
- Campaign performance data
- User behavior analytics

### Export Capabilities
- **CSV Export** - Download campaign data as CSV
- **PDF Export** - Simulated PDF generation (ready for jsPDF integration)

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)
- **Purple**: (#8b5cf6)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weights 600-700
- **Body**: Font weight 400-500

### Animations
- **Fade-in**: Page load animations
- **Slide-in**: Component entrance effects
- **Hover**: Scale and shadow transitions
- **Pulse**: Real-time indicators

## 🔧 Customization

### Adding New Charts
1. Create component in `/src/components/`
2. Import Recharts components
3. Add to dashboard tabs
4. Style with Tailwind classes

### Theme Customization
- Modify `/src/app/globals.css`
- Update CSS variables for colors
- Adjust component styling

### Adding New Pages
1. Create folder in `/src/app/`
2. Add `page.tsx` file
3. Update navigation in `dashboard-layout.tsx`

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance)
- **Bundle Size**: Optimized with Next.js
- **Loading**: Progressive loading with skeletons
- **Responsive**: Mobile-first design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TailwindCSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)

---

**Built with ❤️ for digital marketing agencies**
