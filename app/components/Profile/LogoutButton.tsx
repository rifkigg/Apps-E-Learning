import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";

const LogoutButton = () => {
  return (
    <>
      {/* <div className="flex justify-center mt-[10px]">
        <button className="p-4 text-sm bg-fuchsia-100 rounded-3xl">
          <p className="mx-[10px]">Logout</p>
        </button>
      </div> */}
      <div className="flex justify-center mt-[10px]">
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/");
          }}
        >
          <button
            type="submit"
            className="p-4 text-sm bg-fuchsia-100 rounded-3xl shadow-xl"
          >
            <p className="mx-[10px]">Logout</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default LogoutButton;
