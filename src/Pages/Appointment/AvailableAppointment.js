import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingAppointment from "./BookingAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState({});

  const formateDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formateDate], () =>
    fetch(`http://localhost:5000/available?date=${formateDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) return <Loading />;
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
