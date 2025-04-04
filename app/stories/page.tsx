
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
        <p className="font-bold pb-2">Este es el pinchi CHISME</p>

        <img src="https://static.wikia.nocookie.net/e60d395c-dae9-4646-ba7e-c49618afb08b/scale-to-width/755"
          alt="Cade Maplebottom" width="350" />


      </main>

    </div>
  );
}
