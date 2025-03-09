import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontendLayout from "./FrontendLayout";
import RootContext from '../context/RootContext';
import Loader from '../Loader/Loader';
import Home from '../views/Home/Home';
import PDFView from '../views/PDFView';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';  // Import the ScrollToTop component

const Error404 = lazy(() => import('../errors/Error404'));

const AppRoutes = () => {
  const { loading, setLoading } = useContext(RootContext);
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return loading ? <Loader /> : (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* ScrollToTop component will make sure the page scrolls to top on route change */}
        <Route path="/*" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="view-pdf/:id" element={<PDFView />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      <ScrollToTop /> 
    </Suspense>
  );
};

export default AppRoutes;
