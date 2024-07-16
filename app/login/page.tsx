import { redirect } from "next/navigation";
import { getSession, login } from "@/lib";

export default async function Page() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
        }}
      >
        <div className="flex justify-center items-center h-screen bg-indigo-600">
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold">
              <i className="fa-solid fa-user"></i> Login
            </h1>
            <hr className="mt-3" />
            <div className="mt-3">
              <label className="block text-base mb-2">Email</label>
              <input
                type="email"
                id="email"            
                name="email"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Email..."
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Password..."
              />
            </div>
            
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
              >
                <i className="fa-solid fa-right-to-bracket"></i>
                &nbsp;&nbsp;Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
