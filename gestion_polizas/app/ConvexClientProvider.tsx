"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return(
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHARE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ConvexProvider client={convex}>{children}</ConvexProvider>;
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}