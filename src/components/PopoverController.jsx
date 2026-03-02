import { useEffect, useState } from "react";
import PopoverModal from "./PopoverModal";
import { getActivePopover } from "@/api/strapi";

const PopoverController = () => {
  const [visible, setVisible] = useState(false);
  const [popover, setPopover] = useState(null);

  useEffect(() => {
    getActivePopover()
      .then((res) => {
        const items = res?.data?.data;

        if (!Array.isArray(items) || items.length === 0) return;

        const pop = items[0];

        if (!pop.activo) return;

        const key = "popover-last-shown";
        const lastShown = localStorage.getItem(key);
        const now = Date.now();

        const delayMs = (pop.delayMinutos || 0) * 60 * 1000;

        if (!lastShown || now - lastShown > delayMs) {
          setPopover(pop);
          setVisible(true);
          localStorage.setItem(key, now);
        }
      })
      .catch((err) => console.error("Popover error:", err));
  }, []);

  if (!visible || !popover) return null;

  return (
    <PopoverModal
      slides={popover.slides}
      initialIndex={0}
      onClose={() => setVisible(false)}
    />
  );
};

export default PopoverController;
