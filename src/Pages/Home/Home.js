import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Terms from "./Terms";

const Home = () => {
  return (
    <div className="mx-14">
      <Banner />
      <Info />
      <Services />
      <Terms />
      <MakeAppointment />
    </div>
  );
};

export default Home;
