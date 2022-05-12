import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import Nav from "../component/nav/Nav";
import { RecoilRoot, useRecoilSnapshot, useSetRecoilState } from "recoil";
import { useEffect, useRef } from "react";
import ErrorBoundary from "../component/ErrorBoundary/ErrorBoundary ";
import { AppWrapper } from "../context/state";
function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary FallbackComponent={Component}>
        <RecoilRoot>
          <DebugObserver />
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </RecoilRoot>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
