import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, sepolia } from "wagmi/chains";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  projectId: "YOUR_PROJECT_ID",
  appName: "RainbowKit app",
  chains: [mainnet, sepolia],
});

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default App;
