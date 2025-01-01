import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import All from "./pages/All";
import Category from "./pages/Category";
import Technology from "./pages/Technology";
import RootLayOut from "./layOut/RootLayOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<All />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
