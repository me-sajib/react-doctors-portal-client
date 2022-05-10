import React from "react";
import icon from "../../assets/icons/quote.svg";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "New York, USA",
      img: person1,
    },
    {
      id: 2,
      name: "John Doe",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California, USA",
      img: person2,
    },
    {
      id: 3,
      name: "John Doe",
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Texas, USA",
      img: person3,
    },
  ];
  return (
    <section className="my-28">
      <div className="width-container">
        <div className="flex justify-between">
          <div className="testimonial-text">
            <h3 className="text-xl font-bold text-primary">Testimonial</h3>
            <h1 className="text-3xl">What Our Patients Says</h1>
          </div>
          <img src={icon} alt="" className="lg:w-24 w-16" />
        </div>

        {/* testimonials */}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-4">
          {testimonials.map((testimonial) => (
            <Review key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
