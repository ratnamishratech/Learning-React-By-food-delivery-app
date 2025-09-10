import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import { lazy, Suspense } from "react";
// import Instamart from "./src/components/Instamart";




//13.
// chuncking, code splitting, dynamic bundling, lazy loading, on demand loading.
const Instamart = lazy(() => import("./src/components/Instamart"));

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// };
 
// const ResCard = (props) => {
// const ResCard = ({resdata, name}) => {

//3. using swiggy data manually for use.


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* <Body/> */}
            {/* 11. if i want routing but header stick on their place than we use children routes with outlet this replace by those one which needed. */}
            <Outlet/>
        </div>
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
}

    ],
        errorElement: <Error/>,
    },  
]);

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


