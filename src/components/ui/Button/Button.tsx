import type { ReactNode } from "react"


interface ButtonProps {
    children: ReactNode;
    size?: "sm" | "md";
    variant?: "primary" | "outline";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string
}

const Button = ({ 
    children, 
    size= "md", 
    variant = "primary", 
    startIcon, 
    endIcon, 
    onClick, 
    disabled = false, 
    className 
} : ButtonProps) => {
    
    const sizeClasses = {
        sm: "px-4 py-3.5 text-sm",
        md: "px-5 py-3.5 text-sm"
    }

    const variantClasses = {
        primary: "bg-blue-500 text-white shadow-theme-xs hover:bg-blub-600 cu dissabled:",
        outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark"
    }
    console.log(endIcon);
    

    return (
        <button className={`inline-flex items-center cursor-pointer justify-center gap-2 rounded-lg transition ${className}
            ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            ${disabled ? "cursor-not-allowed opacity-50":""}
            `}
            onClick={onClick}
            disabled={disabled}
        
        >
        {startIcon && <span className="flex items-center">{startIcon}</span>}
            {children}
        {endIcon && <span className="flex items-center">{endIcon}</span>}
        </button>
    )
}

export default Button