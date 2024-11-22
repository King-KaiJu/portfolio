import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  const dndchar = response.products.filter((a) => a.filtro === "dndchar")
  const dndscene = response.products.filter((a) => a.filtro === "dndscene")
  const draw = response.products.filter((a) => a.filtro === "draw")
  return (
    <section>
      <Inner>
        <h2 className='pt-5 text-white text-center text-3xl'>My Drawings and Drafts</h2>
        <div className='grid grid-cols-12'>
          {draw.map((index, item) => (
            <ProductCard key={index} item={draw[item]}/>
          ))}
        </div>
        <h2 className='pt-5 text-white text-center text-3xl'>DnD Character Images</h2>
        <div className='grid grid-cols-12'>
          {dndchar.map((index, item) => (
            <ProductCard key={index} item={dndchar[item]} />
          ))}
        </div>
        <h2 className='pt-5 text-white text-center text-3xl'>DnD Scene Images</h2>
        <div className='grid grid-cols-12'>
          {dndscene.map((index, item) => (
            <ProductCard key={index} item={dndscene[item]} />
          ))}
        </div>
      </Inner>
    </section>
  );
}