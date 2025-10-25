'use client';

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}