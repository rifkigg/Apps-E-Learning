import DisplayBook from "./components/Home/DisplayBook";
import SlideShow from "./components/Home/SlideShow";
import UserBar from "./components/Home/UserBar";
import Navbar from "./components/Utilities/NavBar";


const HomePage = () => {
  return (
    <>
      <body
        style={{
          background: "linear-gradient(to bottom, yellow, #d3d3d3)",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <UserBar />
        <SlideShow />
        <DisplayBook />
        <Navbar />
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </>
  );
};

export default HomePage;
