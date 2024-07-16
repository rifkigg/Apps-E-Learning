import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <>
      {/* <div className="flex justify-between"> */}
      <Link href="/">
        <div className="flex gap-5 items-center w-full h-[80px] bg-[yellow] p-4 fixed top-0">
          <FaAngleLeft />
          <p>Program Studi</p>
          {/* <IoMdSearch /> */}
        </div>
        {/* </div> */}
      </Link>
    </>
  );
};

export default Header;
