import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 h-screen left-0 w-20 m-0 flex flex-col bg-primary text-white shadow-lg justify-around">
      <SideBarIcon
        text="Home"
        icon={
          <AiFillHome
            size="25"
            onClick={() => {
              router.push("/");
            }}
          />
        }
      />
      <SideBarIcon
        text="Pokeparty"
        icon={
          <SiPokemon
            size="40"
            onClick={() => {
              router.push("/pokemons");
            }}
          />
        }
      />
      <SideBarIcon
        text="Your pokemons SSR"
        icon={<MdOutlineCatchingPokemon size="30" />}
        onClick={() => {
          router.push("/pokemons/ssr");
        }}
      />
      <SideBarIcon
        text="Your pokemons SSG"
        icon={<MdOutlineCatchingPokemon size="30" />}
        onClick={() => {
          router.push("/pokemons/ssg");
        }}
      />
      <SideBarIcon
        text="Your pokemons ISR"
        icon={<MdOutlineCatchingPokemon size="30" />}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
