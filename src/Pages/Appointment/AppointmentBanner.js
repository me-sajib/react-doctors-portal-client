import React from "react";
import bannerImg from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="width-container">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            alt=""
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="mx-12">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
