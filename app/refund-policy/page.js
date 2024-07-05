import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-20  px-6 md:px-30 lg:px-[200px] space-y-10">
        <div className="justify-center flex">
          <h1 className="text-5xl font-black pb-10"> REFUND POLICY </h1>
        </div>

        <h3 className="text-lg font-normal">
          The policy is valid for a period of 30 calendar days from the date of
          the delivery. If you receive your order and are not satisfied for any
          reason listed below you can return the product for a refund. If the
          period of 30 days has lapsed since the purchase, I can't,
          unfortunately, offer you a refund.
        </h3>

        <div className="space-y-6 ">
          <h2 className="text-3xl font-normal">Refund requirements</h2>

          <h3 className="text-lg font-normal">
            The following criteria must be met to qualify for a refund:
          </h3>

          <ul className="list-disc list-inside text-lg font-normal">
            <li>Product is defective (damaged poster)</li>
            <li>Product is not as described</li>
          </ul>

          <h3 className="text-lg font-normal">
            In order to ensure the above criteria has been met, all returns will
            be inspected. If the product does not meet the listed criteria, we
            reserve the right not to issue a refund.
          </h3>
        </div>

        <div className="space-y-6 ">
          <h2 className="text-3xl font-normal">Proof of purchase</h2>

          <h3 className="text-lg font-normal">
            To complete your refund, I require a receipt, purchase order or
            other proof of purchase. Please note that without the aforementioned
            proof of purchase, I will not issue a refund.
          </h3>
        </div>

        <div className="space-y-6 ">
          <h2 className="text-3xl font-normal">Shipping items</h2>

          <h3 className="text-lg font-normal">
            In order to return an order, you must contact us first.
          </h3>

          <h3 className="text-lg font-normal">
            Returns can be mailed to: Vratislav Pecka, Na Jezerce 7, 14000
            Prague, Czech Republic. You will be responsible for paying for the
            shipping costs with regard to the items that you wish to return. I
            will refund the shipping costs upon receiving the items.
          </h3>

          <h3 className="text-lg font-normal">
            You must take care to ensure that the goods are properly packaged so
            that they will not be damaged while in transit. If the product is
            found damaged or used beyond what it takes for us to reasonably
            inspect it, then we may reject a refund.
          </h3>
        </div>

        <div className="space-y-6 ">
          <h2 className="text-3xl font-normal">Contact </h2>

          <h3 className="text-lg font-normal">
            If you would like to contact me concerning any matter relating to
            this Refund Policy, you may send an email to adithya@uxbyte.in
          </h3>
        </div>
      </div>
    </>
  );
};

export default page;
