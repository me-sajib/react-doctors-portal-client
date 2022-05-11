import React from "react";

const BookingAppointment = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="card-title text-secondary justify-center">{name}</h2>
        <p>
          {slots[0]}
          {slots.length < 1 && "Try another date"}
        </p>
        <p>
          {slots.length ? (
            slots.length + " spaces available"
          ) : (
            <span className="text-red-500"> No space available</span>
          )}
        </p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length < 1}
            for="booking-modal"
            class="btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary "
          >
            BOOKING APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
