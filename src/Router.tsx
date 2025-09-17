import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { SavedJobs } from "./pages/SavedJobs";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/saved-jobs",
				element: <SavedJobs />,
			},
		],
	},
]);
