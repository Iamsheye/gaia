import { useLayoutEffect } from "react";

const lockBody = () => {
  document.body.style.overflow = "hidden";
};

const lockReturn = (originalStyle: string) => {
  document.body.style.overflow = originalStyle;
};

const useLockBody = (value?: boolean) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (value) {
      lockBody();
    }
    return () => lockReturn(originalStyle);
  }, [value]);
};

export default useLockBody;
