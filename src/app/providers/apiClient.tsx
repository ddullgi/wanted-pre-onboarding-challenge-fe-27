import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// 300 second
				staleTime: 1000 * 300,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{/* <ReactQueryDevtools /> */}
			{children}
		</QueryClientProvider>
	);
};
