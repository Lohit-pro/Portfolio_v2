import React from "react";

type Props = {
  theme: string;
};

export default function Qr({ theme }: Props) {
  return (
    <div className="w-72">
      <img
        src={theme === "dark" ? "/qr-code-d.svg" : "/qr-code-l.svg"}
        alt="QR"
      />
    </div>
  );
}
