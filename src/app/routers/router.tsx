import { createBrowserRouter } from "react-router-dom";
import Rayout from "../../pages/Rayout";
import LoginPage from "../../pages/auth/LoginPage";
import SignupPage from "../../pages/auth/SignupPage";
import TodoPage from "../../pages/todo/TodoPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Rayout />,
		children: [
			{
				path: "/",
				element: <TodoPage />,
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
