import { redirect } from "react-router-dom";

export const authLoader = () => {
	const authToken = localStorage.getItem("authToken");
	if (!authToken) {
		return redirect("/login");
	}
	return null;
};
