"use client";

import React from "react";
import { useState } from "react";
import { useCharContext } from "@/app/contexts/CharContext";
import MergeImages from "@/app/components/MergeImages";

const Botonera = () => {
  const { char, introduce } = useCharContext();
  const [isFemale, setIsFemale] = useState(false);
  const [name, setName] = useState('Jane Doe');
  const [back, setBack] = useState(true);

  const maleToFemale = () => {
    if (isFemale == true) {
      introduce("m", char.race, char.type);
    } else {
      introduce("f", char.race, char.type);
    }
    setIsFemale(!isFemale);
  };

  const background = () =>{
    setBack(!back)
  }

  const change = event =>{
    setName(event.target.value)
  }


  return (
    <section className="flex flex-col justify-center items-center">
      <label className="text-white">Nombre del Personaje</label>
      <input type="text" placeholder={name} onChange={change} className="w-[30rem] text-center mb-4 bg-red-700 text-white p-2 rounded-3xl"/>
      <section className="grid grid-cols-12 justify-center items-center bg-[#B87648] mb-4 px-4 rounded-3xl pt-4">
        <article className="col-span-4 mx-4 flex flex-col justify-center items-center ">
          <h3 className="text-[white]">Genero</h3>
          <button onClick={() => maleToFemale()} className={`my-6 text-white text-center py-6 rounded-xl w-[10rem] ${isFemale ? 'bg-red-700' : 'bg-blue-900'}`}> {isFemale ? "Female" : "Male"} </button>
        </article>
        <article className="col-span-4 flex flex-col justify-center items-center mx-4">
          <h3 className="text-[white]">Raza</h3>
          <button onClick={() => introduce(char.genre, "human", char.type)} className="bg-red-700 text-white text-center w-[10rem] mb-4 rounded-xl"> Human </button>
          <button onClick={() => introduce(char.genre, "elf", char.type)} className="bg-red-700 text-white text-center w-[10rem] mb-4 rounded-xl"> Elf </button>
          <button onClick={() => introduce(char.genre, "dwarf", char.type)} className="bg-red-700 text-white text-center w-[10rem] mb-4 rounded-xl"> Dwarf </button>
        </article>
        <article className="col-span-4 flex flex-col justify-center items-center mx-4">
          <h3 className="text-[white]">Clase (tipo de daño)</h3>
          <button onClick={() => introduce(char.genre, char.race, "mixed")} className="bg-blue-900 text-white text-center w-[10rem] mb-4 rounded-xl"> Mixed </button>
          <button onClick={() => introduce(char.genre, char.race, "magic")} className="bg-blue-900 text-white text-center w-[10rem] mb-4 rounded-xl"> Magic </button>
          <button onClick={() => introduce(char.genre, char.race, "fisic")} className="bg-blue-900 text-white text-center w-[10rem] mb-4 rounded-xl"> Phisic </button>
        </article>
      </section>
      
      <button onClick={background} className={`my-6 text-white text-center px-6 py-5 rounded-xl w-[15rem] ${back ? 'bg-blue-900' : 'bg-red-700'}`}>{back ? "Descargar con fondo" : 'Descargar sin fondo'}</button>
      <MergeImages images={[`${back ? '/imgs/cantina.jpg':'/imgs/cyoc/blank-space.png'}`, `/imgs/cyoc/${char.race}/${char.race}-${char.genre}.png`, `/imgs/cyoc/${char.race}/${char.type}-${char.race}-${char.genre}.png`]} nombre={name}/>
    </section>
  );
};

export default Botonera;
