import ProductsGrid from '@/app/components/ProductsGrid';
import HomeHero from '@/app/components/HomeHero';

export default function Home() {
  return (
    <div className='bg-slate-900'>
      <HomeHero />
      <ProductsGrid />
    </div>
  );
}
