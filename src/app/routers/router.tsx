import { authLoader } from "@/entities/auth/loader/authLoader";
import { Layout, LoginPage, SignupPage, TodoPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,

		children: [
			{
				path: "/",
				element: <TodoPage />,
				loader: () => {
					return authLoader();
				},
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/signup",
				element: <SignupPage />,
			},
		],
	},
]);
