import React from "react";

const Review = ({ testimonial }) => {
  const { img, name, des, location } = testimonial;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{des}</p>
        <div className="flex items-center pt-3">
          <img src={img} alt="" className="lg:w-24 w-16" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-primary">{name}</h3>
            <h4 className="text-xl">{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
