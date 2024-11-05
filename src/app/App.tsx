import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./providers/apiClient";
import { router } from "./routers/router";

function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	);
}

export default App;
