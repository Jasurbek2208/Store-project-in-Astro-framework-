import { useState } from "preact/hooks";

export default function StoreProducts() {
  let storeArr: any = localStorage.getItem("miniShopStore")?.split(",") || null;

  return (
    <div>
      {storeArr ? (
        storeArr?.map((prod: string) => (
          <div>
            <h1>{prod}</h1>
            {console.log(prod)}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, libero unde! Rerum, aspernatur, animi distinctio velit
              accusamus neque quas placeat magnam tempore id expedita possimus
              voluptatibus veritatis iure vitae dolores tempora deserunt!
            </p>
          </div>
        ))
      ) : (
        <h1>NULL NOT FOUND !</h1>
      )}
    </div>
  );
}
