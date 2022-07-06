import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Input from "./components/Input";
import Tree from "./components/Tree.js";

function App() {
  const [tree, setTree] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function fetchHistory(address) {
      const provider = new ethers.providers.EtherscanProvider(
        "homestead",
        "GA5DBDU9R58E28EUTCVD9KA3H3FXBP5MH94"
      );

      const historyGetter = await provider.getHistory(address);
      const txList = new Set();
      historyGetter.forEach((tx) => {
        txList.add(
          tx.from === ethers.utils.getAddress(address) ? tx.to : tx.from
        );
      });

      setTree([...txList].slice(0, 20));
    }

    fetchHistory(address);
  }, [address]);

  function triggerFetch(newAddress) {
    setAddress(newAddress);
  }

  return (
    <div>
      <Input triggerFetch={triggerFetch} />
      <Tree tree={tree} triggerFetch={triggerFetch} address={address} />
    </div>
  );
}

export default App;
