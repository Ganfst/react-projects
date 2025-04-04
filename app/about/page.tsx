
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
        <p className="font-bold pb-2">Este es el pinchi proposito</p>
        <div className="w-100 bg-sky-500/25 p-10 mt-5 rounded">
          <p>Crear un proyecto que almacenará otros proyectos dentro de si mismo. Serán divididos por páginas solamente y habrá un chingo de cosas todas mezcladas, sin embargo, cuando se tenga que crear un proyecto clean desde 0 en serio, pues se hará en su momento.</p>
        </div>
      </main>

    </div>
  );
}
