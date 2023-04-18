import React, { useEffect, useState } from "react";
import Card from "./Card";
import MainHero from "./MainHero";
import NavBar from "./NavBar";
import StatCard from "./StatCard";
import { getCompany } from "@/services/apiservices";
import { toast } from "react-toastify";

export default function HeroSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCompany().then((res) => {
      if (res.success) {
        setData(res.company);
      } else {
        console.log(res); //error
        toast.error("Error getting company data");
      }
    });
  }, []);

  return (
    <div className="bg-primary">
      <div className="h-screen w-screen bg-primary">
        <div className="relative w-full bg-primary">
          <NavBar />
          <div className="container h-auto w-auto mx-auto">
            <MainHero />
          </div>
          <div className="container mx-auto my-auto mt-12">
            <div className="flex flex-row p-6 justify-between mx-auto">
              <StatCard title="Users" value={400} icon="user" />
              <StatCard title="Commuities" value={500} icon="graph" />
              <StatCard title="Potenial Airdrop" value={10} icon="airdrop" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="container mx-auto">
          <span className="text-5xl mt-10">Potenial Airdrop</span>
        </div>
      </div>
      <div className="container mx-auto my-auto mt-12">
        <div className="flex flex-row p-6 justify-between">
          {data.map((item, idx) => (
            <Card
              key={idx}
              display_name={item.display_name}
              company_description={item.description}
              company_website={item.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
