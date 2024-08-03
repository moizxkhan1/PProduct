import PaymentMethod from "../Product/PaymentMethod";
import Summary from "../Product/Summary";
import Breadcrumb from "../ui/Breadcrumb";

const Checkout = () => {
  return (
    <div className="container py-10 space-y-8">
      <Breadcrumb />
      <div className="flex flex-col-reverse gap-10 md:flex-row justify-between md:gap-5">
        <PaymentMethod />
        <Summary amount="$ 500.00" />
      </div>
    </div>
  );
};

export default Checkout;
