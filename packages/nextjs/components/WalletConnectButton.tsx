"use client";

import { useAppKit } from "@reown/appkit/react";

/**
 * Custom WalletConnect button using Reown AppKit
 * This provides an alternative to RainbowKit with additional features like email/social logins
 */
export const WalletConnectButton = () => {
  const { open } = useAppKit();

  return (
    <button className="btn btn-primary btn-sm" onClick={() => open()} type="button">
      WalletConnect
    </button>
  );
};

/**
 * Network switcher button using AppKit
 */
export const NetworkSwitcherButton = () => {
  const { open } = useAppKit();

  return (
    <button className="btn btn-secondary btn-sm" onClick={() => open({ view: "Networks" })} type="button">
      Switch Network
    </button>
  );
};

/**
 * AppKit's built-in button component (alternative)
 * This is a web component that doesn't require imports
 */
export const AppKitButton = () => {
  return <appkit-button />;
};

/**
 * AppKit's built-in network button component
 */
export const AppKitNetworkButton = () => {
  return <appkit-network-button />;
};
