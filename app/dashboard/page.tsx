'use client';

import { logout } from "@/app/login/actions";

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
