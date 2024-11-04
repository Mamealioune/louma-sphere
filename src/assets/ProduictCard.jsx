import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ProduictCard = () => {
  return (
    < >
    <div className="w-[1900px] m-auto  ">
    <div className="grid grid-cols-6  items-center justify-center">
    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/Nike Air Force.png"
        alt="Nike"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          Meillleurs Pair Nike
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>



    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>

    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>

    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>


    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>



    <div
      className=" bg-white text-gray-700
  w-72 min-h-[10rem] ml-2 mt-2 
   shadow-lg rounded-md overflow-hidden "
    >
      <img
        src="../images/puma.png"
        alt="puma"
        className="w-full h-full object-cover hover:scale-75 duration-150 ease-in-out "
      />
      <div className="p-5 flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            Official store
          </span>
        </div>

        <h2
          className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap "
          title="Meilleurs Pair nike"
        >
          t-shirt Puma Blue sky
        </h2>
        <div>
          <span className="text-xl font-bold">25.000 frc</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">30.000 frc</span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <IoIosStar className="fill-yellow-500" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
            Ajout Panier
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <FaRegHeart className="opacity-50" />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <MdOutlineRemoveRedEye className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default ProduictCard;
