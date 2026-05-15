import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "../features/Dashboard/Dashboard";
import { ShowCards } from "../features/Products/Cards";
import { ShowOrders } from "../features/orders/Orders";
import { Profileview } from "../features/Profile/profile";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Products" element={<ShowCards />} />
        <Route path="/Orders" element={<ShowOrders />} />
        <Route path="/Profile" element={<Profileview />} />
      </Routes>
    </BrowserRouter>
  );
}