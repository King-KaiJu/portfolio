import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <div className='col-span-3 flex justify-center items-center flex-col m-10 p-5 bg-[#488AB7] rounded-2xl'>
      <Link href={`/product/${item._id}`}>
        <Image
          src={`/imgs/${item.image}`}
          alt={item.name}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          className='rounded-xl'
        />
        <h3 className="text-l pt-4 text-white">{item.name}</h3>
      </Link>
    </div>
  );
};

export default ProductCard;
