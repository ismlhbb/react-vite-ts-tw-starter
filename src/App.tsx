import * as React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "layouts/home/HomeLayout";
import NotFoundPage from "pages/404";
import ScrollRestoration from "components/ScrollRestoration";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/*" element={<HomeLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
