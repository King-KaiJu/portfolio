'use client'

import Image from 'next/image'
import { useAppContext } from '@/app/contexts/AppContext'

const ProductCheckout = () =>{
    const { cart, cartTotal, handleRemoveProduct } = useAppContext();
    
    return (
      <section className='bg-[#B89748] rounded-lg p-5'>
        <h1>Products</h1>
        <article className='bg-[#B87648] rounded-lg p-5'>
          {cart.map(product => (
            <div key={product.id}>
              <article className='flex justify-between items-center'>
                <div className='flex items-center'>
                  <Image
                    src={`/imgs/${product.image}`}
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <h2 className='text-cyan-300 p-3 text-lg'>{`${product.name} x ${product.qty}`}</h2>
                </div>
                <p className='text-cyan-300 text-lg'>€ {(product.price * product.qty).toFixed(2)}</p>
              </article>
              <article className='text-right'>
                <button onClick={()=> handleRemoveProduct(product.id)} className='text-red-500 bg-red-900 rounded-md my-2 p-1'>Remove</button>
              </article>
            </div>
          ))}
        </article>
        <div className='flex items-center justify-center'>
          <p className='text-cyan-300 bg-[#33424F] text-xl p-5 my-4 rounded'>Total: € {(cartTotal()).toFixed(2)}</p>
        </div>
      </section>
    );
};

export default ProductCheckout