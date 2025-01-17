import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";

import AccountPage from "./AccountPage";
import Network from "./Network";
import { Jobs } from "./Jobs";



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
    {
        path:"/account",
        element:<AccountPage/>

    },
    {
        path:"/network",
        element:<Network/>

    },
    {
        path:"/jobs",
        element:<Jobs/>

    },
    {
        path:"/profile/:id",
        element:<AccountPage/>

    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
