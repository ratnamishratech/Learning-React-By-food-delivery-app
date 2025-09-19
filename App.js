import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import { lazy, Suspense, useEffect, useState} from "react";
// import Instamart from "./src/components/Instamart";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

//13.
// chuncking, code splitting, dynamic bundling, lazy loading, on demand loading.
// (This line uses React’s code-splitting feature to load the Instamart component only when it’s actually rendered, not during the initial bundle download.)
const Instamart = lazy(() => import("./src/components/Instamart"));

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// };
 
// const ResCard = (props) => {
// const ResCard = ({resdata, name}) => {

//3. using swiggy data manually for use.


const AppLayout = () => {
   //ep11(part-2) if want to change context value dynamically
   const [userName, setUserName] = useState();
   useEffect(() => {
    //make an api to call username and password
   const data = {
    name: "Ratna",
   };
   setUserName(data.name);
   }, []); 

    return (
       <Provider store={appStore}>
          {/* for changing dynmaically we want to pass setusername in vlaue eg: Ratna */}
       <UserContext RouterProvider value={{loggedInUser: userName, setUserName}}>
         <div className="app">
            <Header/>
            {/* <Body/> */}
            {/* 11. if i want routing but header stick on their place than we use children routes with outlet this replace by those one which needed. */}
            <Outlet/>
        </div>
       </UserContext>
       </Provider>
    );
};

//10. cont..
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
        {
        path:"/",
        element: <Body/>,
        },
        {
        path:"/about",
        element: <About/>,
        },
        {
        path:"/contact",
        element: <Contact/>,
        },
         {
        path:"/Instamart",
        element: <Suspense fallback={<h1>Loading...</h1>}><Instamart/></Suspense>,
        },
        {
        path: "/restaurants/:resId",
        element: <ResMenu />,
        },
        {
        path: "/cart",
        element: <Cart/>,
        }

    ],
        errorElement: <Error/>,
    },  
]);

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


