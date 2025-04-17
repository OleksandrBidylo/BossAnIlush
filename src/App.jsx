import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import ContactUs from "./pages/ContactUs";
import Burger from "./compotents/Burger/Burger";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./compotents/Layout/Layout"));

const OrderForm = lazy(() => import("./pages/OrderForm"));
const AdminPg = lazy(() => import("./pages/AdminPg"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Succes = lazy(() => import("./pages/Succes"));
const OurServices = lazy(() => import("./pages/OurServices"));

const App = () => {




  return (
    <div>
      <Suspense>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/our-services" element={<OurServices />} />
          </Route>
          <Route path="/admin-stuff" element={<AdminPg />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/order" element={<OrderForm />} />
          <Route path="/succes" element={<Succes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/bg-m" element={<Burger />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
