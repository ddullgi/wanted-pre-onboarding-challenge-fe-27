import { forwardRef } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, type, children, ...props }, ref) => {
		return (
			<button
				type={type}
				className={cn(
					"w-full border placeholder:text-muted-foreground p-1.5 rounded-md my-1 font-bold bg-black text-white disabled:bg-slate-300 disabled:text-gray-400 ",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	},
);
Button.displayName = "Button";

export { Button };
