import MainCard from "../components/MainCard";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <>
      <SideMenu />
      <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-1  justify-center  md:p-20 md:ml-14">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </>
  );
};

export default Home;
