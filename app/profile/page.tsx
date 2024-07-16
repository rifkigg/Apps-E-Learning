import LogoutButton from "../components/Profile/LogoutButton";
import UserInfo from "../components/Profile/UserInfo";
import Navbar from "../components/Utilities/NavBar";

const profile = () => {
  return (
    <>
      <UserInfo />
      <LogoutButton />
      <Navbar />
    </>
  );
};

export default profile;
