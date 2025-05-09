import React from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Whoops! something went wrong</h1>
      </main>
    </>
  );
}
