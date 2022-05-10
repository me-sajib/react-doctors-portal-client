import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Terms from "./Terms";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="mx-14">
      <Banner />
      <Info />
      <Services />
      <Terms />
      <MakeAppointment />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
