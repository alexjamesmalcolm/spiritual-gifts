import React, { lazy } from "react";
import useServiceWorker from "hooks/useServiceWorker";

const InitialServiceWorkerInstallationDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/InitialServiceWorkerInstallationDialog"
    )
);
const UpdateForServiceWorkerAvailableDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/UpdateForServiceWorkerAvailableDialog"
    )
);

const ServiceWorker = () => {
  const { isInitialized, isUpdated } = useServiceWorker();
  return (
    <>
      {isInitialized && <InitialServiceWorkerInstallationDialog />}
      {isUpdated && <UpdateForServiceWorkerAvailableDialog />}
    </>
  );
};

export default ServiceWorker;
