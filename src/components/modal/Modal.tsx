import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
};

export const Modal: FC<Props> = ({ children, open, onClose }) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (open && modal) {
      modal.showModal();
    }

    if (modal) {
      return () => modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
};
