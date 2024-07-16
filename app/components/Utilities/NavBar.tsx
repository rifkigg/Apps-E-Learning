"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FaBookOpen,
  FaShoppingBag,
  FaWallet,
  FaBell,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center border-t-2 bg-white fixed bottom-0 w-full p-4">
        <Link href="/">
          <div className="book">
            <FaBookOpen size={24} className="text-[gray]" />
          </div>
        </Link>
        <Link href="/transaksi">
          <div className="bag">
            <FaShoppingBag size={24} className="text-[gray]" />
          </div>
        </Link>
        <Link href="/pembelian">
          <div className="wallet">
            <FaWallet size={24} className="text-[gray]" />
          </div>
        </Link>
        <Link href="/notifikasi">
          <div className="bell">
            <FaBell size={24} className="text-[gray]" />
          </div>
        </Link>
        <Link href="/profile">
          <div className="profile">
            <FaUser size={24} className="text-[gray]" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
