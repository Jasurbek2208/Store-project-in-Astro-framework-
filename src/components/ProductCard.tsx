import { useState } from "preact/hooks";
import type { IProduct } from "../interface/types";

// Components
import Button from "./Button";

interface ProductCardprops {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardprops) {
  const [isStored, setIsStored] = useState(
    localStorage.getItem("miniShopStore")?.split(",") || ""
  );

  //
  function addStore() {
    if (!localStorage.getItem("miniShopStore")) {
      const currId: any = [product.id.toString()];
      localStorage.setItem("miniShopStore", currId);
      setIsStored(currId);
    } else {
      let local: any = localStorage.getItem("miniShopStore")?.split(",");
      if (local.includes(product.id.toString())) {
        const currId: any = [
          product.id.toString(),
          localStorage.getItem("miniShopStore"),
        ];
        let arr: any = localStorage
          .getItem("miniShopStore")
          ?.split(",")
          .filter((i: string) => i !== product.id.toString())
          .join(",");

        localStorage.setItem("miniShopStore", arr);
        setIsStored(arr.split(","));
      } else {
        let currId: any = localStorage.getItem("miniShopStore")?.split(",");

        currId.push(product.id.toString()),
          localStorage.setItem("miniShopStore", currId);
        setIsStored(currId);
      }
    }
  }

  //
  function maxLen(str: string, type: string) {
    let hero: String[] = str.split("");
    hero.length = type === "descrp" ? 70 : 42;
    type === "descrp"
      ? str.length > 70
        ? (str = hero.join("") + "...")
        : (str = hero.join(""))
      : str.length > 42
      ? (str = hero.join("") + "...")
      : (str = hero.join(""));

    return str;
  }

  return (
    <div key={product.id} class="relative max-w-[310px] h-[410px] border-2 animate-wiggle">
      <div
        class="mt-2 w-[100%] h-[160px]"
        style={{
          background: `url(${product.image}) no-repeat center`,
          backgroundSize: "contain",
        }}
        onClick={() => console.log("Ishladi !")}
      ></div>
      <i
        class={`fa-solid fa-basket-shopping text-xl text-[${
          isStored.includes(product.id.toString()) ? "#802f6e" : "#555"
        }] absolute top-[39%] right-3 cursor-pointer z-10`}
        onClick={addStore}
      ></i>
      <div class="relative p-3 h-[238px] flex flex-col">
        <h2 class="mt-2 text-[15px] font-medium">
          {maxLen(product.title, "title")}
        </h2>
        <p class="my-2">{product.price + "$"}</p>
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
