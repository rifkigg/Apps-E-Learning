// interface Iusers {
//   id: string;
//   username: string;
//   email: string;
//   gems: number;
//   coins: number;
//   exp: number;
//   avatar: string;

// }
import { getSession } from "@/lib";

const UserInfo = async () => {
  const session = await getSession();
  
  if (!session) {
    return <p>Please log in.</p>;
  }

  const { user } = session;
  return (
    <>
      <div className="mt-[100px]">
        <img
          src={user.avatar}
          alt="profile"
          className=" rounded-full w-[80px] mx-auto"
        />
        <p className="text-center text-xl">{user.username}</p>
        <p className="text-center">{user.email}</p>
      </div>
    </>
  )
};

export default UserInfo;
