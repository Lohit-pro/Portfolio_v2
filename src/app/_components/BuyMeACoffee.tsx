// _components/BuyMeACoffee.tsx
"use client";

const BuyMeACoffee = () => {
  return (
    <div className="fixed bottom-16 right-4 z-50 md:bottom-6 md:right-6">
      <a href="https://www.buymeacoffee.com/lohit" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="w-[130px] h-[40px]"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;
