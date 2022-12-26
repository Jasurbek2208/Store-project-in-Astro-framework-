import type { IProduct } from "../interface/types";
import Button from "./Button";

interface ProductCardprops {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardprops) {
  return (
    <div key={product.id} class="max-w-[310px] border-2">
      <image
        src={product.image}
        alt={product.title}
        class="w-[100%] h-[auto] bg-[url(${})]"
      />
      <div className="p-4">
        <h2 class="mt-2 text-[19px] font-medium">{product.title}</h2>
        <p class="my-3">{product.price + "$"}</p>
        <p class="mb-6 max-w-[100%] overflow-hidden">{product.description}</p>
        <Button content="Open" onClick={() => console.log("hello World !")} />
      </div>
    </div>
  );
}
