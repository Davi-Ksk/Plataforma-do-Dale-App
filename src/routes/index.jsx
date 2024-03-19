import { BrowserRouter } from "react-router-dom";


import { AppRoutes } from "./app.routes";
// import { AuthRoutes } from "./auth.routes";

export function Routes() {

    // const { user } = useAuth();

    return (
        <BrowserRouter>
            <AppRoutes />
            {/* <AuthRoutes /> */}
            {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
        </BrowserRouter>
    );
}