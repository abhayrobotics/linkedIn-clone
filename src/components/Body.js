import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";
import Profile from "./Profile";



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
        path:"/profile",
        element:<Profile/>

    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
