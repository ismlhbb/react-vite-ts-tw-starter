import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "pages/404";
import Header from "components/header/Header";
import PageLoadingBar from "components/PageLoadingBar";

const HomePage = React.lazy(() => import("pages/home"));
const CounterPage = React.lazy(() => import("pages/counter"));
const ExamplePage = React.lazy(() => import("pages/example"));

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50">
          <div className="layout">
          <PageLoadingBar isFallback={false} />
            <React.Suspense fallback={<PageLoadingBar isFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="counter" element={<CounterPage />} />
                <Route path="example" element={<ExamplePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </div>
        </section>
      </main>
    </>
  );
}

export default React.memo(HomeLayout);
