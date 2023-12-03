import DashBoard from "../DashboardPage/DashBoard";
import Apartments from "./Apartments";
import React,{useState} from "react";

export const ApartmentsArr = [
    {
      id: 1,
      bed: "1 bd",
      price: 955,
      address: "91 jump street, New york",
      zipcode: 60616,
      src: "/Roomimages/Room1.png",
    },
    {
      id: 2,
      bed: "1 bd",
      price: 855,
      address: "91 jump street, New york",
      zipcode: 60615,
      src: "/Roomimages/Room2.png",
    },
    {
      id: 3,
      bed: "2 bd",
      price: 1500,
      address: "Fatorda, Goa",
      zipcode: 403602,
      src: "/Roomimages/Room3.png",
    },
    {
      id: 4,
      bed: "3 bd",
      price: 1700,
      address: "St Xavier Road, Bengaluru",
      zipcode: 89642,
      src: "/Roomimages/Room4.png",
    },
    {
      id: 5,
      bed: "1 bd",
      price: 750,
      address: "Fatorda, Goa",
      zipcode: 403601,
      src: "/Roomimages/Room5.png",
    },
    {
      id: 6,
      bed: "2 bd",
      price: 1200,
      address: "91 jump street, New york",
      zipcode: 60616,
      src: "/Roomimages/Room6.png",
    },
    {
      id: 7,
      bed: "1 bd",
      price: 980,
      address: "St Xavier Road, Bengaluru",
      zipcode: 89644,
      src: "/Roomimages/Room7.png",
    },
  ];

  //import React, { useState } from "react";
  /*const [apartmentlist, setApartmentlist]= useState(ApartmentsArr);

    function addApartments(newApartment){
        setApartmentlist((previousState)=>{
            return [newApartment, ...previousState];
        })
    }*/
 export default function ApartmentList(){
  return(
    <>
   <DashBoard/>
   <Apartments apartments={ApartmentsArr}/>
   </>
  );
 }  