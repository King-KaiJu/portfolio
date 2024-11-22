import React from "react"
import Overlap from "@/app/components/Overlap";
import Botonera from "@/app/components/Botonera";
import Image from "next/image";

const Char = () => {
    return (
        <div>
            <section className="flex flex-col items-center bg-slate-900 ">
                <section className="bg-[#B89748] rounded-t-lg rounded-b-xl my-4">
                <article className="relative h-[700px] w-[700px] m-8">
                    <Image
                    src={'/imgs/cantina.jpg'}
                    width={700}
                    height={700}
                    alt="taverna"
                    className="absolute rounded-xl "/>
                    <Overlap />
                </article>
                <article className="mb-2 w-[700px] rounded-b-2xl">
                    <Botonera />
                </article>
                </section>
            </section>
        </div>
    )
  }
  
  export default Char