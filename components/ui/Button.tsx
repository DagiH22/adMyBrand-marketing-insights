interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: "default" | "primary" |"seconday" | "outline" | "ghost" | "link"
  }
  
  export function Button({ children, ...props }: ButtonProps) {
    return (
      <button
        {...props}
        className="inline-flex items-center justify-center rounded-md bg-px-3 py-1.5 text-sm font-medium text-white hover:bg-[#E2DAFF] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
      >
        {children}
      </button>
    )
  }
  