import React from 'react'
import Inner from '@/app/components/Inner'
import ProductCheckout from '@/app/components/productCheckout'
import FormCheckout from '@/app/components/formCheckout'

const Cart = () => {
  return (
    <section className='h-screen bg-slate-900' >
      <Inner>
        <section className='grid grid-cols-12 pt-10'>
          <article className='col-span-6 mr-4'>
            <FormCheckout />
          </article>
          <article className='col-span-6 ml-4'>
            <ProductCheckout />
          </article>
        </section>
      </Inner>
    </section>
  )
}

export default Cart