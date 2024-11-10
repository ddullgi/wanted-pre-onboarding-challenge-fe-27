import { Outlet } from "react-router-dom";
import { cn } from "../shared/utils/cn";

export default function Layout() {
	return (
		<main className={cn("w-full h-full flex flex-col items-center")}>
			<Outlet />
		</main>
	);
}
