import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../app/stores/authStore";
import { cn } from "../shared/utils/cn";

export default function Layout() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const setToken = useAuthStore((state) => state.setToken);

	// useEffect(() => {
	// 	if (token) {
	// 		setToken(token);
	// 	} else {
	// 		navigate("/login");
	// 	}
	// }, [setToken, token, navigate]);

	return (
		<main className={cn("w-full h-full flex flex-col items-center")}>
			<Outlet />
		</main>
	);
}
