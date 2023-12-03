import React from "react";
import ApartmentList from "./ApartmentContent/ApartmentList";
import ContactForm from "./DataUpload/ContactForm";
//import DashBoard from "./DashboardPage/DashBoard";

function HomePage (){
    return(
        <div>
            <h1>Inside Home page</h1>
            <ApartmentList/>
        </div>
    );
}

export default HomePage;