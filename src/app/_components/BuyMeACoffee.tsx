"use client";

import useDelay from "../_hooks/useDelay";

const BuyMeACoffee = () => {
  const delay = useDelay("slide-in-from-bottom", 1500);

  return (
    <div className={`mt-5 md:mt-10 ${delay ? delay : "invisible"}`}>
      <a
        href="https://www.buymeacoffee.com/lohit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
          alt="Buy Me A Coffee"
          className="w-[110px] h-[35px] md:w-[150px] md:h-[45px]"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;
