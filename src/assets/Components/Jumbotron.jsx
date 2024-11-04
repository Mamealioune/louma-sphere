import React from "react";

const Jumbotron = () => {
  return <div className="h-[900px] w-full bg-slate-200 " >
    <div className="bg-transparent space-y-2  ml-16 xl:absolute lg:bottom-0 lg:top-80 lg:left-48 md:left-1 ">
<h1 className="bg-transparent text-8xl font-bold uppercase font-raleway text-orange-600">Kay dieund</h1>
<h1 className="bg-transparent text-wh
 text-4xl
  font-montserrat">Explorez l'univers infini de Louma-Sphère, votre destination <br /> incontournable pour des trouvailles uniques et des expériences <br /> shopping extraordinaires!</h1>
 <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div class="absolute inset-0 w-3 bg-orange-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black bg-transparent group-hover:text-white">Plus d'avantages</span></button>
    <img
          src="../images/beats.png"
          alt=""
          className="w-[500px] h-[600px] bg-transparent absolute bottom-28 left-[1200px] hover:scale-75 duration-500"
        />
    </div>
  </div>;
};

export default Jumbotron;
