import React from "react";
import { Chat, Clock, Community, Dollar, Earth, Medical } from "../SVGIcons";

const driverBenefitsData = [
  {
    id: 1,
    img: <Clock />,
    title: "Flexible Schedule",
    description:
      "Drive on your terms. Whether you prefer part-time or full-time, CabBuddy gives you the freedom to create a schedule that suits your lifestyle.",
  },
  {
    id: 2,
    img: <Medical />,
    title: "Insurance Coverage",
    description:
      "CabBuddy provides comprehensive insurance coverage specifically designed to protect the cars rented through our platform. This coverage offers peace of mind to car owners.",
  },
  {
    id: 3,
    img: <Dollar />,
    title: "Earn Extra Income",
    description:
      "Experience competitive rates and fair compensation for your services as a driver. Take control of your income and enjoy a rewarding driving experience.",
  },
  {
    id: 4,
    img: <Community />,
    title: "Professional Drivers",
    description:
      "Deliver outstanding customer service as a CabBuddy driver. With our platform's enhanced customer service features, you can provide a seamless and memorable experience for passengers.",
  },
  {
    id: 5,
    img: <Earth />,
    title: "Contribution to Sustainability",
    description:
      "Sharing cars reduces the need for additional vehicles on the road, resulting in reduced traffic congestion, lower carbon emissions, and a positive environmental impact.",
  },
];

const DriverBenefits = () => {
  return (
    <section className="bg-white text-darkText text-center py-8 pt-24" id="benefits">
      <header className=" text-2xl md:text-4xl font-extrabold">
      Why give your car to CabBuddy ?
      </header>
      <div className="flex flex-col md:flex-row gap-4 my-8 md:px-16 lg:px-24">
        {driverBenefitsData.slice(0, 3).map((i) => (
          <div key={i.id} className="p-4 text-center ">
            <span className="w-full flex justify-center">{i.img}</span>
            <h1 className="font-bold text-lg">{i.title}</h1>
            <p className="text-slate-700">{i.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8 md:px-16 lg:px-24">
        {driverBenefitsData.slice(-2).map((i) => (
          <div key={i.id} className="p-4 text-center ">
            <span className="w-full flex justify-center">{i.img}</span>
            <h1 className="font-bold text-lg">{i.title}</h1>
            <p className="text-slate-700 max-w-40">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DriverBenefits;
