
## Stack used
-   React
-   react-router-dom
-   tailwind

## Features to add
-   login page
-   firebase authentication
-   Header
-   icon in header + search functionality
-   create a post :like share comment , reply to a comment
-   search with gemini ai, post with ai
-   firebase cloudstore
-   

# STEP BY STEP GUIDE
- open terminal
    - cd linkedin
    - npx create-react-app .
        - delete the icon, test.js file and app.css code in src folder
    - npm start : check running server


## configure tailwind from website steps
    - follow https://tailwindcss.com/docs/guides/create-react-app

## configure react-router-dom
    - npm i -D react-router-dom
    - set up the main component as <Body /> in app.js
    - Set the path in the Body component using createBrowserRouter and RouterProvider methods
    
   ```` javascript
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
````


## Material UI icons
-   npm install @mui/material @emotion/react @emotion/styled
-   npm install @mui/icons-material
    ### USAGE
    - import LinkedInIcon from '@mui/icons-material/LinkedIn';

    - <LinkedInIcon  sx={{ fontSize: 40 }} color="primary"/>


## standard 

-   px-2 py-3 my-2