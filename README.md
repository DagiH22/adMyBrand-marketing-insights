# 🚀 ADmyBRAND Marketing Insight
**Live Demo**: [admybrand-marketing-insight.netlify.app](https://admybrand-marketing-insight.netlify.app/)


**ADmyBRAND Insights** is an analytics dashboard designed for digital marketing agencies. Built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**, it provides a modern and responsive UI to track key marketing metrics, user behavior, and more using interactive charts and mock data.

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
```

## 🔧 Development Notes
- All data is mocked using @faker-js/faker from the data/ folder.

- Chart.tsx, DataTable.tsx, and ExportButton.tsx are fully reusable components.

- Utility functions live in lib/utils.ts.

- UI building blocks (e.g., button.tsx, card.tsx) follow shadcn/ui architecture.

- All pages use the App Router introduced in Next.js 13+.
## 🤖 AI Usage
This project leveraged AI tools to streamline development, improve code quality, and speed up the building process:

ChatGPT (OpenAI): Used extensively for planning the architecture, writing reusable component logic, generating documentation (like this README), and solving bugs during development. It also assisted in crafting utility functions and implementing best practices in Next.js, Tailwind CSS, and Recharts.

GitHub Copilot: Actively used during live coding in VS Code to suggest code completions, repetitive logic, and component structure. Copilot significantly boosted productivity by generating boilerplate code for components like charts, buttons, and tables based on simple comments or intent.

While the AI tools enhanced the development workflow, every line of code was reviewed, customized, and integrated by the developer to ensure consistency, performance, and maintainability.


## 👤 Author
Made with 💻 by Dagmawi Heywot