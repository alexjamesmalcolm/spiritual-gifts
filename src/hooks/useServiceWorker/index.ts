import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const useServiceWorker = () => {
  const isUpdated = useSelector(
    (store: RootState) => store.serviceWorker.serviceWorkerUpdated
  );
  const isInitialized = useSelector(
    (store: RootState) => store.serviceWorker.serviceWorkerInitialized
  );
  return useMemo(
    () => ({
      isUpdated,
      isInitialized,
    }),
    [isInitialized, isUpdated]
  );
};

export default useServiceWorker;
