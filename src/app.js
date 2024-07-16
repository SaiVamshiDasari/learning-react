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
import HorizontalScroll from "./components/HorizantalScroll";

const App = () =>{
    return(
      <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
    errorElement: <Error />
    
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);