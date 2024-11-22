'use client'
import { useAppContext } from "@/app/contexts/AppContext"

const AddToCart=({name, price, image, id})=>{

    const {handleAddToCart} = useAppContext();
    return(
        <>
        <button onClick={()=> handleAddToCart(name, price, image, id, 1)} className="rounded-xl bg-[#33424F] p-10 text-white w-[16rem]">Add To Cart</button>
        </>
    )
}

export default AddToCart