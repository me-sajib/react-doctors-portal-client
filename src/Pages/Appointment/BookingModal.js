import React from "react";
import { format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const appointmentUser = async (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const slot = e.target.slot.value;
    const number = e.target.number.value;
    const date = e.target.date.value;

    // check user fill up or not
    if (
      userName === "" ||
      email === "" ||
      slot === "" ||
      number === "" ||
      date === ""
    ) {
      return toast.error("Please fill up all the fields");
    }
    const appointment = {
      treatmentId: _id,
      treatment: name,
      patientName: userName,
      email,
      number,
      slot,
      date,
    };
    await axios
      .post("http://localhost:5000/booking", appointment)
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Appointment booked successfully");
        } else if (res.data.result === false) {
          toast.error(`Slot already booked ${date}  at  ${slot}`);
        }
      });
    refetch();
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold ">
            You are booking:{" "}
            <span className="text-lg text-secondary">{name} </span>
          </h3>
          <div className="my-4">
            <form
              onSubmit={appointmentUser}
              className="grid grid-cols-1 gap-3 justify-items-center"
            >
              <input
                type="text"
                disabled
                name="date"
                value={format(date, "PP")}
                class="input input-bordered input-md w-full max-w-xs"
              />
              {/* slot appointment option */}
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots &&
                  slots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
              </select>
              {/* user name */}
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                placeholder="your name"
                class="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email}
                placeholder="your email"
                class="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="number"
                name="number"
                placeholder="your phone number"
                class="input input-bordered input-md w-full max-w-xs"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
