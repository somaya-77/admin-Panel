import {
  Home,
  Dashboard,
  ManageTeam,
  Contacts,
  Invoices,
  Profile,
  Calendar,
  Faq,
  BarChart,
  PieChart,
  LineChart,
  GeographyChart,
} from "pages";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<ManageTeam />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
