import { useState, useEffect } from "react";

const useDelay = (className: string, delay: number) => {
  const [appliedClassName, setAppliedClassName] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppliedClassName(className);
    }, delay);

    return () => clearTimeout(timer);
  }, [className, delay]);

  return appliedClassName;
};

export default useDelay;
