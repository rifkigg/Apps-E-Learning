import { useEffect, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import Image from "next/image";
import { getSession } from "@/lib";

const UserBar = async () => {
  const session = await getSession();

  if (!session) {
    return <p>Please log in.</p>;
  }

  const { user } = session;

  return (
    <section className="m-4 p-2 h-auto flex bg-white rounded-sm shadow-md">
      <div className="flex w-full items-center">
        <div className="m-2 w-[50px] ">
          <Image
            src={user.avatar}
            alt="avatar"
            className=" rounded-full w-[50px] "
            width={50}
            height={50}
          />
        </div>
        <div className="w-full">
          <p>{user.username}</p>
          <div className="w-full h-3 relative rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute"></div>
            <div
              id="progress-bar"
              className="w-8 h-full bg-blue-600 relative "
            ></div>
          </div>
          <div className="flex">
            <div className="diamond mr-2 flex items-center">
              <IoDiamondOutline style={{ color: "#5f9ece" }} />
              <p>{user.gems}</p>
            </div>
            <div className="flex justify-between w-full">
              <div className="coins flex items-center">
                <FaCoins style={{ color: "#ffd43b" }} />
                <p>{user.coins}</p>
              </div>
              <div className="exp">
                <p>{user.exp} EXP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBar;
