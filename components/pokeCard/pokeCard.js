import Image from "next/image";

const PokeCard = ({ name, imgUrl }) => {
  return (
    <div className="bg-red-400 m-4 p-2 w-50 h-50 rounded-xl hover:rounded-2xl hover:translate-x-3 transition-all ">
      <Image src={imgUrl} alt={name} width={300} height={300} />
      <h3 className="text-white text-2xl">{name}</h3>
    </div>
  );
};

export default PokeCard;
