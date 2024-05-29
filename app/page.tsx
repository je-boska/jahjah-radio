export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="px-4 py-20 text-center md:px-8">
        <h2 className="pb-4 font-serif text-2xl md:text-4xl xl:text-7xl">
          Thursday June 13th
        </h2>
        <p className="font-sans text-xl italic md:text-2xl xl:text-4xl">
          Jah Jah launches Jah Jah Radio to celebrate the Adidas x Snipes
          collaboration
        </p>
      </section>
      <section className="px-4 md:px-8">
        <div className="flex flex-wrap gap-2 border-4 border-black bg-JJ-lightGray p-8 font-serif text-2xl md:text-4xl xl:border-8 xl:text-7xl">
          <span>15:00</span>
          <span className="text-JJ-blue">Kikelomo</span>
        </div>
      </section>
    </main>
  );
}
