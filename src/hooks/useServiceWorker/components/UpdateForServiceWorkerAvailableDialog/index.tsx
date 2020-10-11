import React from "react";
import Dialog from "components/Dialog";
import useServiceWorker from "hooks/useServiceWorker";
import styles from "./UpdateForServiceWorkerAvailableDialog.module.css";

const UpdateForServiceWorkerAvailableDialog = () => {
  const { updateServiceWorker } = useServiceWorker();
  return (
    <Dialog>
      <p>There is a new version available.</p>
      <button onClick={updateServiceWorker} className={styles.update}>
        Update
      </button>
    </Dialog>
  );
};

export default UpdateForServiceWorkerAvailableDialog;
