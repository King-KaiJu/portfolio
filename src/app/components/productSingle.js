import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";

const productSingle = ({product}) => {
    const { image, name, price, description, _id} = product;
  return (
    <section className="flex justify-center items-center">
        <div className="grid grid-cols-12 py-10 my-10 ml-20">
            <article className="col-span-5 ml-10 flex justify-center items-center p-10 bg-[#488BB8] rounded-lg">
                <Image
                    src={`/imgs/${image}`}
                    width={500}
                    height={500}
                    alt={name}
                    className="rounded-xl"
                />
            </article>
            <article className="col-span-5 ml-20 flex flex-col items-start p-5 pl-10 bg-[#488BB8] rounded-lg">
                <h1 className="text-[5rem] text-white">{name}</h1>
                <p className="text-[1.5rem] text-white">{description}</p>
                <article className="justify-between items-center pt-[10rem] grid grid-cols-12">
                    <h3 className="text-[5rem] text-white col-span-6">€ {price}</h3>
                    <AddToCart price={price} name={name} image={image} id={_id} className="col-span-4"/>
                </article>
            </article>
        </div>
    </section>
  )
}

export default productSingle