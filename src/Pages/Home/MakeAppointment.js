import React from "react";
import PrimaryBtn from "../Shared/PrimaryBtn";
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointmentBg})` }}>
      <div className="flex items-center text-white">
        <div className="flex-1 hidden lg:block">
          <img src={doctor} className="mt-[-100px]" alt="" />
        </div>
        <div className="flex-1 p-4">
          <h3 className="font-bold text-primary">Appointment</h3>
          <h1 className="text-3xl pt-4">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn />
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
