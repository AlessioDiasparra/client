'use client';

import { GoogleOAuthProvider } from "@react-oauth/google";
import ModalProvider from "@/providers/modalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '291544750019-o7li1v1ao2itmuuhmh1gu9h26hlv6ups.apps.googleusercontent.com'}>
        <ModalProvider />
         {children}
    </GoogleOAuthProvider>
  );
}
