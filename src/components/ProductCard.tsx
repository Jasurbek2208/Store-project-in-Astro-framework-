import type { IProduct } from "../interface/types";
import Button from "./Button";

interface ProductCardprops {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardprops) {
  function maxLen(str: string, type: string) {
    let hero: String[] = str.split("");
    hero.length = type === "descrp" ? 88 : 50;
    type === "descrp"
      ? str.length > 88
        ? (str = hero.join("") + "...")
        : (str = hero.join(""))
      : str.length > 50
      ? (str = hero.join("") + "...")
      : (str = hero.join(""));

    return str;
  }

  return (
    <div key={product.id} class="max-w-[310px] h-[450px] border-2">
      <div
        class="mt-2 w-[100%] h-[160px]"
        style={{
          background: `url(${product.image}) no-repeat center`,
          backgroundSize: "contain",
        }}
      ></div>
      <div class="relative p-4 h-[280px] flex flex-col">
        <h2 class="mt-2 text-[15px] font-medium">
          {maxLen(product.title, "title")}
        </h2>
        <p class="my-3">{product.price + "$"}</p>
        <p class="mb-6 max-w-[100%] text-[13px] overflow-hidden">
          {maxLen(product.description, "descrp")}
        </p>
        <a class="absolute bottom-3 w-[88%]" href={`product/${product.id}`}>
          <Button content="Open" />
        </a>
      </div>
    </div>
  );
}
