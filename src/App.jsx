import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./compotents/Layout/Layout";
import ContactUs from "./pages/ContactUs";

import OrderForm from "./pages/OrderForm";
import AdminPg from "./pages/AdminPg";
import NotFound from "./pages/NotFound";
import Succes from "./pages/Succes";
import OurServices from "./pages/OurServices";
import Burger from "./compotents/Burger/Burger";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-services" element={<OurServices />} />
        </Route>
        <Route path="/admin-stuff" element={<AdminPg />} />

        <Route path="/order" element={<OrderForm />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/bg-m" element={<Burger />} />
      </Routes>
    </div>
  );
};

export default App;
