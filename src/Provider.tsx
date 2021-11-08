import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const ServiceWorker = lazy(() => import("components/ServiceWorker"));

const Provider = ({ children }: { children: JSX.Element }) => {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <Suspense fallback={null}>
          <ServiceWorker />
        </Suspense>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
  );
};

export default Provider;
