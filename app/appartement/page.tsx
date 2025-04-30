"use client"

import Headappart from "./Headappart";
import {useState, useEffect} from "react";
import { collection, getDocs} from "firebase/firestore";
import {db} from "@/app/db/firebaseConfig";
import DBappart from "./DBappart";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApparType } from "../Types/apparType";

export default function Home() {

  const [dataProducts, setDataProducts] = useState<ApparType[]>([])

  useEffect(()=> {
    fetchData()
  }, [])

  const fetchData = async ()=>{
    const productsCollection = collection(db, "appart");
    const productsSnapchot = await getDocs(productsCollection);
    const productsData = productsSnapchot.docs.map((doc)=> ({
      id: doc.id,
      ...doc.data()
    })) as ApparType[];
    setDataProducts(productsData)
  }
  console.log(dataProducts)

  return (
    <>
    <br/><br/><br/>
    <DBappart dataProducts={dataProducts} />
    </>
  );
}
