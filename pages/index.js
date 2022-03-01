import SideBar from "../components/sideBar/sideBar";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SideBar />
      <h1 className="text-red-400 text-9xl text-bold ">
        Welcome to the Pokeworld
      </h1>
    </div>
  );
}
