import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegUser, FaRegHeart } from "react-icons/fa";

const Navbar = () => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuRef = useRef(null);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeSubMenu = (e) => {
    if (subMenuRef.current && !subMenuRef.current.contains(e.target)) {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSubMenu);

    return () => {
      document.removeEventListener("mousedown", closeSubMenu);
    };
  }, []);
  return (
    <div className="bg-white w-full h-24 flex items-center  shadow-md text-sm text-gray-600 pl-6">
      <div className="flex items-center bg-transparent gap-4">
        <img
          src="../images/pngegg (1).png"
          alt="logo"
          className="w-24 h-20 mr-6 bg-transparent "
          title="Louma-sphère votre plateforme de vente la plus accessible"
        />
        <div className="bg-transparent h-10 gap-1 items-center pl-4 rounded-[4px]  lg:inline-flex cursor-pointer">
         
          <span className="bg-transparent text-xl font-semibold flex"   onClick={toggleSubMenu}>All
          {showSubMenu ? (
            <IoIosArrowUp
              className="bg-transparent w-[20px] h-[30px] ml-2 cursor-pointer"
              onClick={toggleSubMenu}
            />
          ) : (
            <IoIosArrowDown
              className="bg-transparent w-[20px] h-[30px] ml-2 cursor-pointer"
              onClick={toggleSubMenu}
            />
          )}
          </span>

          {showSubMenu && (
          <div
            className="absolute top-[68px]  left-[150px]  bg-white shadow-md py-2 px-4 flex flex-col items-start"
            ref={subMenuRef}
            style={{ maxWidth: "fit-content" }} // Ajustez la largeur maximale ici
          >
            {/* Votre contenu de sous-menu ici */}
            <p className="hover:text-orange-300">Contenu du sous-menu</p>
            <p>Option 1</p>
            <p>Option 2</p>
            <h1>Cla</h1>
            
            <p>Nouvelle Option</p>
            <p>Autre Option</p>
            <p>Autre Option</p>
            <p>Autre Option</p>
            {/* ... */}
          </div>
        )}
        </div>
        <div className="flex gap-2  bg-transparent  w-[740px] space-x-10">
          <div className="flex gap-2 bg-transparent items-center hover:text-orange-600">
            <TiHomeOutline className="bg-transparent w-[20px] h-[30px] " />
            <a href="#" className="bg-transparent text-xl font-semibold">
              Accueil
            </a>
          </div>
          <div className="flex gap-2 bg-transparent items-center hover:text-orange-600">
            <CiCreditCard1 className="bg-transparent w-[20px] h-[30px] " />
            <a href="#" className="bg-transparent text-xl font-semibold">
              Cartes fidélités
            </a>
          </div>
          <div className="flex gap-2 bg-transparent items-center hover:text-orange-600">
            <MdOutlineContactSupport className="bg-transparent w-[20px] h-[30px] " />
            <a href="#" className="bg-transparent text-xl font-semibold">
              Support
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-1 bg-transparent items-center ">
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-gray-100 shadow-lg text-slate-200  w-96 h-12 pl-4 text-[16px] border p-2 focus:border-orange-500 focus:outline-none "
        />{" "}
        <div
          className="bg-orange-500 w-[45px] h-[45px] flex justify-center items-center hover:bg-orange-400 cursor-pointer"
          title="Rechercher..."
        >
          {" "}
          <IoSearch className=" w-[25px] h-[25px] fill-white cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-6 bg-transparent ml-96 cursor-pointer  ">
        <div className="flex gap-2 bg-transparent items-center hover:text-orange-600 ">
          <SlBasket className="bg-transparent w-8 h-8 " />
          <h1 className="bg-transparent text-xl font-semibold">Panier</h1>
        </div>
        <div className="flex gap-2 bg-transparent items-center cursor-pointer hover:text-orange-600 ">
          <FaRegUser className="bg-transparent w-8 h-8" />
          <h1 className="bg-transparent text-xl font-semibold">Connexion</h1>
        </div>
        <div className="flex gap-2 bg-transparent items-center cursor-pointer hover:text-orange-600 ">
          <FaRegHeart className="bg-transparent w-8 h-8" />
          <h1 className="bg-transparent text-xl font-semibold">
            Liste souhaits
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
