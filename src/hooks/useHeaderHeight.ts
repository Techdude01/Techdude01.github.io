import { useCallback, useEffect, useState } from "react";

/**
 * Hook to dynamically calculate header height for precise scroll positioning
 */
export function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(80); // Default fallback

  const updateHeaderHeight = useCallback(() => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.getBoundingClientRect().height;
      // Extra offset so anchored sections are never hidden under the fixed header
      setHeaderHeight(height + 56);
    }
  }, []);

  useEffect(() => {
    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    const header = document.querySelector("header");

    if (header) {
      resizeObserver.observe(header);
    }

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, [updateHeaderHeight]);

  return headerHeight;
}
