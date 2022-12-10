import { useState } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(false);

  const [toggleDisplay, setToggleDisplay] = useState(false);

  // toggle section - Testimonials & Gallery
  const changeValue = () => {
    setToggle(!toggle);
  };

  // toggle NavBar
  const displayValue = () => {
    setToggleDisplay(!toggleDisplay);
  };

  return {
    setToggleDisplay,
    toggleDisplay,
    toggle,
    changeValue,
    displayValue,
  };
}
