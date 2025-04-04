
export default function Home() {
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

        <p className="font-bold pb-2">¿Que estás buscando en el bosque?</p>

        <ol className="grid gap-y-10 gap-x-5 grid-cols-2 text-center">
          <a href="/dashboard" className="rounded-full ring-2 ring-red-500">Dashboard</a>
          <a href="/draws" className="rounded-full ring-2 ring-red-500">Dibujos</a>
          <a href="/stories" className="rounded-full ring-2 ring-red-500">Anecdotas</a>
          <a href="/about" className="rounded-full ring-2 ring-red-500">About</a>
        </ol>

      </main>

    </div>
  );
}
