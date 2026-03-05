import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CountryDeployments from "./pages/CountryDeployments";
import Ecosystem from "./pages/Ecosystem";
import ForGovernments from "./pages/ForGovernments";
import ForPartners from "./pages/ForPartners";
import Home from "./pages/Home";
import JoinTheMovement from "./pages/JoinTheMovement";
import Solutions from "./pages/Solutions";
import Technology from "./pages/Technology";
import UseCases from "./pages/UseCases";

// Root route using Layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Page routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const ecosystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ecosystem",
  component: Ecosystem,
});

const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions",
  component: Solutions,
});

const useCasesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/use-cases",
  component: UseCases,
});

const forGovernmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/for-governments",
  component: ForGovernments,
});

const forPartnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/for-partners",
  component: ForPartners,
});

const technologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technology",
  component: Technology,
});

const countryDeploymentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/country-deployments",
  component: CountryDeployments,
});

const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/join",
  component: JoinTheMovement,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  ecosystemRoute,
  solutionsRoute,
  useCasesRoute,
  forGovernmentsRoute,
  forPartnersRoute,
  technologyRoute,
  countryDeploymentsRoute,
  joinRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
