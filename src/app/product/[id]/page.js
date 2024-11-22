import { getOneProductDB } from "@/app/actions";
import ProductSingle from "@/app/components/productSingle";

const Product = async ({ params }) => {
  const { id } = params;
  const response = await getOneProductDB(id);
  return (
    <div className="bg-slate-900">

      <ProductSingle product={response.product} />;
    </div>
)
};

export default Product;
