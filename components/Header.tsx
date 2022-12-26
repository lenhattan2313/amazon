import Image from "next/image";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useBasketStore from "@/store/basket";
type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const basketList = useBasketStore((state) => state.basketList);
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-4">
          <Image
            src="https://links.papareact.com/f90"
            alt="logo"
            className="object-contain cursor-pointer"
            width={150}
            height={40}
            onClick={() => router.push("/")}
          />
        </div>
        {/* SEARCH */}
        <div className="bg-yellow-400 hover:bg-yellow-500  cursor-pointer hidden sm:flex items-center h-10 rounded-md flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow outline-none flex-shrink rounded-l-md"
          />
          <AiOutlineSearch className="h-12 w-12 p-4 " />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            className="link"
            onClick={() => {
              if (!session) {
                signIn();
                return;
              }
              signOut();
            }}
          >
            <p>{session ? `Hello, ${session.user?.name}` : "Sign in"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            className="link relative flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 text-center text-black font-bold rounded-full bg-yellow-400">
              {basketList.length}
            </span>
            <AiOutlineShoppingCart className="h-10 w-10" />
            <p className="font-extrabold md:text-sm  hidden md:block mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 px-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <AiOutlineMenu className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&apos;s deal</p>
        <p className="hidden link lg:inline-flex">Electronic</p>
      </div>
    </header>
  );
};

export default Header;
