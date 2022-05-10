import React from "react";
import appointmentBg from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      className="my-28 py-12"
      style={{ background: `url(${appointmentBg})` }}
    >
      <div className="text-center">
        <h3 className="text-primary font-bold">Contact Us</h3>
        <h1 className="text-3xl text-white">Stay Contact With Us</h1>
        <div className="form mt-8">
          <input
            type="text"
            placeholder="email address"
            class="input input-bordered input-md w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="subject"
            class="input my-4 input-bordered input-md w-full max-w-xs"
          />
          <br />
          <textarea
            class="textarea textarea-bordered textarea-md w-full max-w-xs"
            placeholder="your message"
          ></textarea>
          <br />
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
