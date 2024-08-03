import { useState } from "react";
import PropTypes from "prop-types";
import Input from "../ui/Input";
import Button from "../ui/Button";

import { useNavigate } from "react-router-dom";

import mastercardLogo from "/mastercard.png";
import paypalLogo from "/paypal.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full md:w-1/2">
      {/* Payment Method */}
      <div className="flex flex-col space-y-8">
        <h2 className="font-urbanist text-checkout text-start">
          Choose Payment Method
        </h2>
        <div className="flex items-center justify-between font-urbanist text-checkout container">
          <div
            className={`flex flex-col items-center cursor-pointer p-4 border-2 rounded-lg  ${
              selectedMethod === "creditcard" ? "border-primary" : "border-main"
            }`}
            onClick={() => handleSelectMethod("creditcard")}
          >
            <img
              src={mastercardLogo}
              alt="MasterCard"
              className="w-full h-16 mb-2"
            />
            <div className="flex items-center space-x-1">
              {selectedMethod === "creditcard" && (
                <IoIosCheckmarkCircleOutline className="text-primary" />
              )}
              <span className="text-base">Kreditkarte</span>
            </div>
          </div>
          <span>OR</span>
          <div
            className={`flex flex-col items-center cursor-pointer px-8 py-4 border-2 rounded-lg ${
              selectedMethod === "paypal"
                ? "border-primary"
                : "border-transparent"
            }`}
            onClick={() => handleSelectMethod("paypal")}
          >
            <img src={paypalLogo} alt="PayPal" className="w-full h-16 mb-2" />
            <div className="flex items-center space-x-1">
              {selectedMethod === "paypal" && (
                <IoIosCheckmarkCircleOutline className="text-primary" />
              )}
              <span className="text-base">PayPal</span>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="py-8 space-y-6 font-urbanist text-checkout">
        <div className="space-y-4">
          <h4>Raabattcode</h4>
          <Input type="text" />
        </div>

        <div className="space-y-4">
          <h4>Card Number</h4>
          <Input type="text" />
        </div>

        <div className="w-full flex gap-5">
          <div className="w-full space-y-4">
            <h4>Expiry</h4>
            <Input type="text" />
          </div>
          <div className="w-full space-y-4">
            <h4>CVC</h4>
            <Input type="text" />
          </div>
        </div>
      </div>

      <Button
        type="secondary"
        text="Weiter"
        onClick={() => navigate("/bericht-herunterladen")}
      />
    </div>
  );
};

PaymentMethod.propTypes = {
  selectedMethod: PropTypes.string,
};

export default PaymentMethod;
