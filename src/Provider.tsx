import { HelmetProvider } from "react-helmet-async";
import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: { children: JSX.Element }) => {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>{children}</HelmetProvider>
    </ReduxProvider>
  );
};

export default Provider;
