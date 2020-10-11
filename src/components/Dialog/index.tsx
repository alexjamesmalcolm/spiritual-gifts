import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./Dialog.module.css";

const Dialog = ({
  children,
  duration,
}: {
  children: ReactNode;
  duration?: number;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = useCallback(() => setIsOpen(false), []);
  useEffect(() => {
    if (duration) {
      const timeoutId = setTimeout(handleClose, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [duration, handleClose]);
  return useMemo(
    () => (
      <dialog open={isOpen} className={styles.dialog}>
        {children}
        <button onClick={handleClose}>Close</button>
      </dialog>
    ),
    [children, handleClose, isOpen]
  );
};

export default Dialog;
