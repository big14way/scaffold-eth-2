"use client";

import { type ReactNode } from "react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import scaffoldConfig from "~~/scaffold.config";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

// Get project ID and networks from scaffold config
const projectId = scaffoldConfig.walletConnectProjectId;

// Create a new QueryClient for AppKit
const queryClient = new QueryClient();

// Metadata for AppKit
const metadata = {
  name: "Scaffold-ETH 2",
  description: "Built with Scaffold-ETH 2 and WalletConnect",
  url: typeof window !== "undefined" ? window.location.origin : "https://scaffoldeth.io",
  icons: ["https://avatars.githubusercontent.com/u/55535804"],
};

// Create WagmiAdapter for AppKit (uses existing wagmi config)
const wagmiAdapter = new WagmiAdapter({
  networks: scaffoldConfig.targetNetworks as any,
  projectId,
  ssr: true,
});

// Initialize AppKit with proper configuration
if (typeof window !== "undefined") {
  createAppKit({
    adapters: [wagmiAdapter],
    networks: scaffoldConfig.targetNetworks as any,
    projectId,
    metadata,
    features: {
      analytics: true, // Enable analytics
      email: true, // Enable email login
      socials: ["google", "github", "apple"], // Enable social logins
      emailShowWallets: true, // Show wallet options with email
    },
    themeMode: "dark",
    themeVariables: {
      "--w3m-accent": "#2299dd",
    },
  });
}

export function ScaffoldEthAppKitProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
