import { Route, Routes } from "react-router-dom";

import { Home } from "../Components/home"
import { Login } from "./login";
import { Advertiser } from "./advertiser";
import { Apartment } from "./apartment";
import { Category } from "./category";
import { City } from "./city"
import { Update } from "./Update";
import { AddApartment } from "./addApartment"
import { AddCategory } from "./addCategory";
import { Sign } from "./sign";
export const Routing = () => {
    return <>

        <Routes>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="apartment" element={<Apartment></Apartment>}></Route>
            <Route path="advertiser" element={<Advertiser></Advertiser>}></Route>
            <Route path="category" element={<Category></Category>}></Route>
            <Route path="city" element={<City></City>}></Route>
            <Route path="update/:id" element={<Update></Update>}></Route>
            <Route path="addApartment" element={<AddApartment></AddApartment>}></Route>
            <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
            <Route path="sign/:email/:password" element={<Sign></Sign>}></Route>
            <Route path="" element={<Apartment></Apartment>}></Route>

        </Routes>

    </>

}  
