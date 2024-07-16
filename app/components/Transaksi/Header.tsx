import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <Link href="/">
        <div className="flex gap-5 items-center w-full h-[80px] bg-[yellow] p-4 fixed top-0">
          <FaAngleLeft />
          <p>Transaksi</p>
        </div>
      </Link>
    </>
  );
};

export default Header;
