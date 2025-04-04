
"use client"; // Asegúrate de usar esto en archivos dentro de app/ si usas el App Router

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="items-center justify-items-center p-8 ">

      {/* Titulo del nav */}
      <header className="">
        <h1 className=" text-2xl inline">TheLostWood</h1>
      </header>

      {/* Contenido del nav */}
      <main className="justify-items-center">
        <div className="bg-neutral-100 w-screen">
          .
        </div>

        {/* Btn volver */}
        <div className="my-8">
          <a onClick={() => router.back()} className="rounded-full ring-2 ring-red-500">Volver</a>
        </div>

        {/* Contenido */}
        <p className="font-bold pb-2">Este es el pinchi DIBUJO</p>

        <img src="https://static1.e926.net/data/51/30/51300afe6615546de42e69a711a803c2.png"
          alt="Cade Maplebottom" width="350" />


      </main>

    </div>
  );
}
