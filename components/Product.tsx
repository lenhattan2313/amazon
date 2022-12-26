import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import CurrencyFormat from "react-currency-format";
type Props = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }: Props) {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        className="object-contain m-auto"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <BsStarFill className="h-5 w-5 text-yellow-500" />
            </div>
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat value={price} prefix="$" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src={"https://links.papareact.com/fdw"}
            alt="prime"
            width={50}
            height={40}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
