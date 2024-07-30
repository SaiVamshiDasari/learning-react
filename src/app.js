import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Resmenu from "./components/Resmenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Collections from "./components/Collections";
import { BrowserRouter as Router } from 'react-router-dom';

//import HorizontalScroll from "./components/HorizantalScroll";

const App = () =>{
    return(
      <Router basename="/learning-react">
      <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </Provider></Router>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:  <App /> ,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/restaurants/:resId",
        element:<Resmenu />,
      },
      {
        path:"/collections/:collectionName",
        element: <Collections />,
      },
    ],
    errorElement: <Error />
    
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);