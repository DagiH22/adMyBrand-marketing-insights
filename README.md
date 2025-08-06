# 🚀 ADmyBRAND Marketing Insight

**ADmyBRAND Insights** is an AI-powered analytics dashboard designed for digital marketing agencies. Built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**, it provides a modern and responsive UI to track key marketing metrics, user behavior, and more using interactive charts and mock data.

---

## 📌 Features

### 📊 Dashboard Page

- ✅ **Key Metric Cards**: Revenue, Users, Conversion Rate, Growth %
- 📈 **Interactive Charts**:
  - Line chart – Revenue over time
  - Bar chart – Conversions by channel
  - Pie/Donut chart – Traffic sources
- 📋 **Recent Signups Table**:
  - Sorting, filtering, and pagination
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile

---

### 📑 Reports Page

- 🔍 Same layout as Dashboard
- 📄 Table shows more data per page
- 🧠 **Advanced Filtering** by:
  - Name
  - Email
  - Revenue
  - Status
  - Signup Date
- 📤 **Export to PDF/CSV**

---

### ⚙️ Settings Page

- 📝 Edit name & email
- 🔔 Toggle preferences (notifications, dark mode)

---

## 🎨 UI/UX Design

- Consistent design system: spacing, typography, colors
- Clean visual hierarchy and layout
- Micro-interactions: hover effects, loading states
- Smooth transitions and animations

---

## 🛠️ Tech Stack

| Purpose                | Tech                         |
|------------------------|------------------------------|
| Framework              | Next.js 14+ (App Router)     |
| UI Library             | [shadcn/ui](https://ui.shadcn.com) |
| Styling                | Tailwind CSS                 |
| Charts                 | Recharts                     |
| Mock Data              | `@faker-js/faker`            |
| Export PDFs/CSVs       | `jspdf`, native Blob         |

---

## 📁 Project Structure
```bash
admybrand-insight/
├── app/
│   ├── dashboard/
│   │   ├── overview/
│   │   │   └── page.tsx
│   │   ├── report/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Chart.tsx
│   ├── DataTable.tsx
│   ├── ExportButton.tsx
│   ├── MetricCard.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── switch.tsx
│
├── data/
│   ├── mockCharts.ts
│   ├── mockMetrics.ts
│   └── mockTable.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
├── eslint.config.js
└── README.md


---

## 🧱 Component Highlights

- `<MetricCard />` – Reusable card for KPIs
- `<Chart />` – Supports line, bar, and pie types
- `<DataTable />` – Fully sortable/filterable with pagination
- `<ExportButton />` – PDF/CSV export functionality
- `<ThemeToggle />` – Light/Dark theme switcher

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/admybrand-insights.git

# Navigate into the project
cd admybrand-insights

# Install dependencies
npm install

# Start the development server
npm run dev
