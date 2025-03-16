import React from "react";

type Props = {
  theme: string;
};

export default function Qr({ theme }: Props) {
  return (
    <div className="w-72">
      <img src="/qr-d.svg" alt="QR" className="hidden dark:block" />
      <img src="/qr-l.svg" alt="QR" className="dark:hidden" />
    </div>
  );
}
