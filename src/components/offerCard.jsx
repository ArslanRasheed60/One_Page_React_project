import React from "react";
import image from "../assets/top_image.jpeg";

const OfferCard = (props) => {
  return (
    <div className="bg-white rounded-xl border-slate-50">
      <img src={image} alt="" />
      <div className="p-2 text-center">
        <h3 className="text-black font-bold">Unlimited Access with ELSA Pro</h3>
        <div className="p-4">
          <span className="bg-h_pink rounded-full text-white p-1 mx-2 font-medium">
            Popular
          </span>
          <span className="font-bold">Ksh 2,300.00</span>
        </div>
        <button className="bg-blue-400 font-medium p-2 text-white rounded-full w-11/12">
          Save 50%!
        </button>
        <p className="text-sm font-medium tracking-tighter p-4">
          Monthly subscription automatically renews each month. Cancel anytime
          in Subscriptions on Google Play.
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
