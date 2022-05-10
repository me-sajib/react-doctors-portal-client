import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      des: "",
      img: fluoride,
    },
    {
      _id: 2,
      title: "Cavity Filling",
      des: "",
      img: cavity,
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      des: "",
      img: whitening,
    },
  ];
  return (
    <div className="my-28 w-full">
      <div className="width-container">
        <div className="text-center">
          <h3 className="text-primary uppercase font-bold">our services</h3>
          <h1 className="text-4xl">Service We Provide</h1>
        </div>
        <div className=" mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
