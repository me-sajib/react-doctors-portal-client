import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingAppointment from "./BookingAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/treatment")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-6 width-container">
      <h3 className="text-xl text-center text-secondary">
        Available appointment on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {services.map((service) => (
          <BookingAppointment
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
