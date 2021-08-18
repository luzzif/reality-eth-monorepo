import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

export function useChainId() {
  const provider = useProvider();
  const [chainId, setChainId] = useState(1);

  useEffect(() => {
    provider.on("network", (network) => {
      setChainId(network.chainId);
    });
  }, [provider]);

  return chainId;
}
