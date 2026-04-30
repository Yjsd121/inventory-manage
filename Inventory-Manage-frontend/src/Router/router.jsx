import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "../Dashboard/Dashboard";
import { ShowCards } from "../Products/Cards";
import { ShowOrders } from "../orders/Orders";
import { Profileview } from "../Profile/profile";

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