import Image from "next/image";
import React from "react";
import Product from "./Product";

type Props = {
  productList: any[];
};

const ProductFeed = ({ productList }: Props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {productList
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <div className="relative md:col-span-4 lg:col-span-3 xl:col-span-4 h-64">
        <Image
          src="https://links.papareact.com/dyz"
          alt="span"
          fill
          className="object-contain"
        />
      </div>
      <div className="md:col-span-2 ">
        {productList
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {productList
        .slice(5)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
