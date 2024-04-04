"use client"
import { Hero } from "./_components/Hero";
import { CategorySearch } from "./_components/CategorySearch";
import { useEffect, useState } from "react";
// import GlobalAPI from "./_utils/GlobalAPI";
import GlobalAPI from "./_utils/GlobalApi";
import DoctorList from "./_components/DoctorList";

export default function Home() {

  const [doctorList,setDoctorList]=useState([]);
  useEffect(()=>{
    getDoctorsList();
  },[])
  const getDoctorsList=()=>{
    GlobalAPI.getDoctorList().then(resp=>{
      setDoctorList(resp.data.data);
    })
  }
  return (
    <main>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </main>
  );
}
