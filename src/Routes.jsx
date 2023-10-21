import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import { Google, Request } from "./Pages";

export const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/*" element={<Home/>}>
            <Route index element={<Request name={"google"}/>}/>
            <Route path="google" element={<Request name={"google"}/>}/>
            <Route path="instagram" element={<Request name={"instagram"}/>}/>
            <Route path="twitter" element={<Request name={"twitter"}/>}/>
            <Route path="twitter1" element={<Request name={"twitter1"}/>}/>
            <Route path="vk" element={<Request name={"vk"}/>}/>
            <Route path="yandex" element={<Request name={"yandex"}/>}/>
        </Route>
    )
)