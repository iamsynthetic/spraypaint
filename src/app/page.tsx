"use client";

import Home from "./home/page";

export interface User {
  isSubscribed: boolean;
  name: string;
}
export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
