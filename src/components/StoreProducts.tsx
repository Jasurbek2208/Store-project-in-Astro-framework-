import { useEffect, useState } from "preact/hooks";
import type { IProduct } from "../interface/types";

export default function StoreProducts() {
  const [storeArr, setStoreArr] = useState<any>(
    localStorage.getItem("miniShopStore")?.split(",") || null
  );
  const [products, setProducts] = useState<IProduct[] | null>(null);

  async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    setProducts(await res.json());
  }

  function removeProduct(id: string) {
    setStoreArr(storeArr.filter((i: string) => i !== id));
    localStorage.setItem(
      "miniShopStore",
      storeArr.filter((i: string) => i !== id)
    );
  }

  function maxLen(str: string, type: string) {
    let hero: String[] = str.split("");
    hero.length = type === "descrp" ? 65 : 45;
    type === "descrp"
      ? str.length > 65
        ? (str = hero.join("") + "...")
        : (str = hero.join(""))
      : str.length > 45
      ? (str = hero.join("") + "...")
      : (str = hero.join(""));

    return str;
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (storeArr?.length === 0) {
      setStoreArr(null);
      localStorage.removeItem("miniShopStore");
    }
  }, [storeArr]);

  return (
    <div class="m-[-16px] pt-1 pb-16">
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-gray-50 z-[-10]"></div>
      {storeArr ? (
        products?.map((product: IProduct) =>
          storeArr.includes(product.id.toString()) ? (
            <div
              class="my-2 border border-black-800 bg-white relative animate-wiggle"
              key={product.id}
            >
              <a
                class="px-1 py-2 flex justify-start items-start gap-2 cursor-default focus:outline-none"
                href={`product/${product.id}`}
              >
                <div
                  class="min-w-[130px] h-[90px] sm:min-w-[150px] sm:h-[110px] border border-black-800"
                  style={{
                    background: `url(${product.image}) no-repeat center`,
                    backgroundSize: "contain",
                  }}
                ></div>
                <div class="flex flex-col max-w-[100%] gap-1 pr-5">
                  <h1 class="font-bold text-sm sm:text-base">
                    {maxLen(product.title, "title")}
                  </h1>
                  <p class="font-mono font-semibold text-sm sm:text-sm">
                    {product.price + "$"}
                  </p>
                  <p class="text-xs sm:text-base">
                    {maxLen(product.description, "descrp")}
                  </p>
                </div>
              </a>
              <i
                class="fa-solid fa-xmark text-xl absolute top-1 right-2 bg-slate-50 px-2 py-0 border-0 rounded-full opacity-80 cursor-pointer z-30"
                onClick={(e) => {
                  e.stopPropagation();
                  removeProduct(product.id.toString());
                }}
              ></i>
            </div>
          ) : null
        )
      ) : (
        <h1 class="mt-40 text-xl font-medium text-center">
          Products Not Found !
        </h1>
      )}
    </div>
  );
}
