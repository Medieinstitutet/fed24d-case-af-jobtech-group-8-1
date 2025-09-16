import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { JobAd } from "./pages/JobAd";
import { SavedJobs } from "./pages/SavedJobs";
import AboutNextStep from "./pages/AboutNextStep";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/jobad/:id",
				element: <JobAd />,
			},
      {
				path: "/saved-jobs",
				element: <SavedJobs />
			},
			{ path: "about", element: <AboutNextStep /> },
		],
	},
]);

