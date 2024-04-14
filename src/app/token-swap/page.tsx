"use client";

import { NavBar } from "@/components/NavBar";
import { SquidWidget } from "@0xsquid/widget";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export default function TokenSwap() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main className="flex min-h-screen flex-col my-auto justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-20">
        <NavBar />
      </div>

      <div className="mx-auto w-[400px]  mt-16">
        {loading ? (
          <Skeleton className="w-full h-[600px]" />
        ) : (
          <SquidWidget
            config={{
              integratorId: process.env.SQUID_KEY!,
              companyName: "Alex swap",
              loadPreviousStateFromLocalStorage: true,
              style: {
                neutralContent: "#9DA7B1",
                baseContent: "#FFFDFD",
                base100: "#434565",
                base200: "#202230",
                base300: "#161522",
                error: "#ED6A5E",
                warning: "#FFB155",
                success: "#2EAEB0",
                primary: "#AB67CB",
                secondary: "#37394C",
                secondaryContent: "#B2BCD3",
                neutral: "#383A4C",
                roundedBtn: "24px",
                roundedCornerBtn: "999px",
                roundedBox: "20px",
                roundedDropDown: "0px",
              },
              slippage: 1.5,
              infiniteApproval: false,
              enableExpress: true,

              apiUrl: "https://api.squidrouter.com",
              comingSoonChainIds: [],
              titles: {
                swap: "Swap",
                settings: "Settings",
                wallets: "Wallets",
                tokens: "Select Token",
                chains: "Select Chain",
                history: "History",
                transaction: "Transaction",
                allTokens: "Select Token",
                destination: "Destination address",
                depositAddress: "Deposit address",
              },
              priceImpactWarnings: {
                warning: 3,
                critical: 5,
              },
              environment: "mainnet",
              showOnRampLink: true,
              defaultTokens: [],
              collectFees: {
                integratorAddress:
                  process.env.PUBLIC_NEXT_WALLET_PUBLIC_ADDRESS!, // The EVM address of the integrator that will receive the fee
                fee: 50, // The amount in "basis points" for the fee. 50 = 0.05%. there is currently soft limit of 1% fee allowed for each tx.
              },
            }}
          />
        )}
      </div>
    </main>
  );
}
