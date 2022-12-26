import useBasketStore from "@/store/basket";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { BsStarFill } from "react-icons/bs";
type Props = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  hasPrime: boolean;
  rating: number;
};

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}: Props) => {
  const addToBasket = useBasketStore((state) => state.addToBasket);
  const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
  return (
    <div className="grid grid-cols-5">
      <Image
        alt=""
        src={image}
        height={200}
        width={200}
        className="object-contain"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <BsStarFill className="h-5 w-5 text-yellow-500" />
              </div>
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat value={price} prefix={"$"} />
        {hasPrime && (
          <div className="flex items-center space-x-2 mt-5">
            <Image
              src={"https://links.papareact.com/fdw"}
              alt="prime"
              width={50}
              height={40}
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          className="button"
          onClick={() =>
            addToBasket({
              id,
              title,
              price,
              description,
              category,
              image,
              hasPrime,
              rating,
            })
          }
        >
          Add to basket
        </button>
        <button className="button" onClick={() => removeFromBasket(id)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
