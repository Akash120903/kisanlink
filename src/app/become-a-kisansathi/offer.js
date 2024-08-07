import React from "react";
import Heading from "../components/heading";
function OfferComponent() {
  return (
    <div className="lg:-mt-16 lg:w-3/4 mx-auto lg:px-8 lg:py-12  small:ml-2 small:mr-2 lg:ml-48 text-center">
      <Heading value={"What do we offer?"}></Heading>

      <p className="mb-8 text-lg">
        So, as a PoSP, you can operate as a finance provider, soil testing
        specialist, inputs, advisory services, equipment, output purchase
        provider etc. all from a single App.
      </p>
      <p className="text-lg">
        We facilitate you to become an authorized Point of Sales Person (PoSP)
        for Agri Companies i.e. provides you with knowledge and certificate that
        allows you to sell products/services to farmers directly, and thus
        called a Kisansathi.
      </p>
    </div>
  );
}

export default OfferComponent;
