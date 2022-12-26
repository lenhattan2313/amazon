import { CheckoutProduct, Header } from "@/components";
import Product from "@/components/Product";
import useBasketStore from "@/store/basket";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";

type Props = {};

const CheckOut = (props: Props) => {
  const { data: session } = useSession();
  const basketList = useBasketStore((state) => state.basketList);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width="1020"
            height="250"
            alt=""
            className="object-contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {basketList.length === 0
                ? "Your Amazon Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {basketList.map(
              ({
                id,
                title,
                price,
                description,
                category,
                image,
                hasPrime,
                rating,
              }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  hasPrime={hasPrime}
                  rating={rating}
                />
              )
            )}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {basketList.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({basketList.length}) items:
                <span className="font-bold ml-1">
                  <CurrencyFormat
                    value={basketList
                      .reduce((sum, cur) => {
                        return sum + parseFloat(cur.price);
                      }, 0)
                      .toFixed(2)}
                    prefix={"$"}
                  />
                </span>
              </h2>
              <button
                className={`button mt-2 ${
                  !session && "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
