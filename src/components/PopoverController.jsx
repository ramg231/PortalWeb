import { useEffect, useState } from "react";
import PopoverModal from "./PopoverModal";
import { popoverData } from "@/data/popoverData";

const PopoverController = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 🔴 si está apagado, no hace nada
    if (!popoverData.activo) return;

    const key = "popover-last-shown";
    const lastShown = localStorage.getItem(key);
    const now = Date.now();

    const delayMs = popoverData.delayMinutos * 60 * 1000;

    if (!lastShown || now - lastShown > delayMs) {
      setVisible(true);
      localStorage.setItem(key, now);
    }
  }, []);

  if (!visible) return null;

  return (
    <PopoverModal
      slides={popoverData.slides}
      initialIndex={0}
      onClose={() => setVisible(false)}
    />
  );
};

export default PopoverController;
