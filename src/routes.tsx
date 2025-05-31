import { createBrowserRouter } from "react-router";
import App from "./App";
import MainPage from "./pages/MainPage";

export const router=createBrowserRouter([
     {
    path: "/",
    Component: App,
    
  },
  {
    path:'/start',
Component:MainPage,
  }
]);