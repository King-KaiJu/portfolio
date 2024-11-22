"use client";

import Image from "next/image";
import { useCharContext } from "@/app/contexts/CharContext";

const Overlap = () => {
  const { char } = useCharContext();
  if ((char.race == undefined) || (char.genre == undefined)) {
    return (
      <>
        <Image
          src={"/imgs/cyoc/blank-space.png"}
          height={700}
          width={700}
          alt=""
          className="absolute"
        />
      </>
    );
  } else if (char.type == undefined) {
    return (
      <Image
        src={`/imgs/cyoc/${char.race}/${char.race}-${char.genre}.png`}
        height={700}
        width={700}
        alt=""
        className="absolute"
      />
    );
  } else {
    return (
      <div>
        <Image
          src={`/imgs/cyoc/${char.race}/${char.race}-${char.genre}.png`}
          height={700}
          width={700}
          alt=""
          className="absolute"
        />
        <Image
          src={`/imgs/cyoc/${char.race}/${char.type}-${char.race}-${char.genre}.png`}
          height={700}
          width={700}
          alt=""
          className="absolute"
        />
      </div>
    );
  }
};

export default Overlap;
