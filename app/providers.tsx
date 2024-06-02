'use client';

import { GoogleOAuthProvider } from "@react-oauth/google";
import ModalProvider from "@/providers/modalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
        <ModalProvider />
         {children}
    </GoogleOAuthProvider>
  );
}
