import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="my-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <InfoCard
        title="Opening Hours"
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard title="Visit our location" img={marker} bgColor="bg-accent" />
      <InfoCard
        title="Contact us now"
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Info;
