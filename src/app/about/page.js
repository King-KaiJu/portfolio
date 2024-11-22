import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = async() => {
  
  const madolche = <Link href={'/product/66fe337a3412b83679dcc446'} className='text-orange-900'>Puddingcess Magidulce Chocolat-A-La-Mode</Link>

  return (
    <section className='bg-slate-900 grid grid-cols-12 py-10'>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
        <h1 className='text-3xl font-extrabold'>¿Quien Soy?</h1>
        <p className='text-xl font-bold'>Mi nombre es Federico, pero en internet me suelo encontrar como {'"Kaiju"'}, estoy estudiando Multimedia en la Universidad Maimonides, si encontraste esto es:<br></br> o que sos muy curioso<br></br> o que sos el profesor Leandro Amaro {'(en cuyo caso: Hola :D)'}<br></br> o que hubo una filtracion de documentos {'(no sabria de donde, pero mal ahi)'}.<br></br> Esta pagina la hice como un trabajo para aprender a hacer un Ecommerce, y decidi hacerla de cartas de YuGiOh! porque es un producto que aunque no lo parezca, son caros los cartones esos.</p>
        <Image
          src={`/imgs/buubb.png`}
          width={500}
          height={500}
          alt={'Kaiju Profile Pic'}
          className='rounded-3xl my-10'
        /> 
      </article>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
      <h1 className='text-3xl font-extrabold'>¿Que Hago?</h1>
      <p className='text-xl font-bold mb-16'>La verdad, no lo se ni yo, supuse que esta pagina deberia de estar, existir al menos. Tambien se me propone poner links a redes personales, pero no me gusta poner mis redes asi como asi. En cuanto a que pienso conseguir con esto, espero sacarme al menos un 8 en este trabajo {'(estoy escribiendo esto a las 4:45 de la mañana, y mi cama esa a unos pasos T-T)'} si todo sale bien, espero dar este verano {'(de 2024)'} dar los finales que devo de primero, y ya si eso, algunos de segundo</p>
      <Image
          src={`/imgs/krita.svg`}
          width={500}
          height={500}
          alt={'Logo de la tienda'}
          className='rounded-3xl my-10'
        /> 
      </article>
      <article className='col-span-4 bg-slate-600 mx-8 p-10 rounded-3xl'>
      <h1 className='text-3xl font-extrabold'>¿Que se supone que es esta pagina?</h1>
      <p className='text-xl font-bold'>Se supone que es un About... ¿Eh? ¿Que te refieres a esta pagina entera con el Ecommerce y todo? pues es un final. pase suplicios intentando pensar de que hacer esto, al final me decante por una suerte de Portfolio con un sistema de compras y un creador de personajes gratuito, personajes para el Dungeons and Dragons, ademas estaba planteando en hacer una notificacion de que si querias el personaje mejor dibujado, o con mas detalle o de otra cosa, alguna forma de contactarme. este trabajo me chupo todo el tiempo para el traba de la materia de los viernes, asi que ahora que termine, es hora de seguir dibujando</p>
      <Image
          src={`/imgs/hero.jpg`}
          width={500}
          height={500}
          alt={'Logo de la tienda'}
          className='rounded-3xl my-10'
        /> 
      </article>
    </section>
  )
}

export default About