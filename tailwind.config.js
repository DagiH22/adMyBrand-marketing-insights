module.exports = {
    darkMode: "class", // or 'media' if you want to follow system theme
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'], // Inter from next/font
        },
        colors: {
          light: {
            background: '#FFFFFF',
            CardBackground: '#F9FAFB',
            PrimaryButton:'#3B82F6 ',
            // surface: '#FFFFFF',
            TextPrimary:'#111827',
            TextSecondary:'#6B7280',
            Borders: '#D1D5DB',
            // text: '#1F2937',
            // primary: '#2563EB',
          },
          dark: {
            background: '#121212',
            CardBackground: '#1E293B',
            PrimaryButton:'#2563EB  ',
            TextPrimary:'#F3F4F6',
            // surface: '#1E293B',
            // text: '#F8FAFC',
            // primary: '#3B82F6',
          },
        },
      },
    },    
    plugins: [],
  }
  