import Gallery from "./components/Gallery";
import PriceHeader from "./components/PriceHeader";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-[100vw] h-[100vh] flex mx-auto my-auto p-8">
        <div className="w-[80%] h-full">
          <PriceHeader />
          <Gallery />
        </div>
        <div className="w-[20%] h-full border-2 border-white rounded-r-lg flex flex-col justify-between p-2">
          <div className="w-full h-32 bg-white rounded-lg pl-8 ">
            <div className="w-[36%] h-full flex flex-col items-start justify-center text-sm">
              <p className="text-[#AAB1BA]">Nici un loc selectat</p>
              <p className="text-[#AAB1BA]">0 bilete</p>
            </div>
          </div>
          <div className="w-full h-40 bg-white rounded-lg p-8 flex flex-col items-center justify-between">
            <p className="text-2xl font-bold text-black">0 l.</p>
            <button className="py-4 px-6 bg-[#F3F4F7] w-full text-medium text-[#0F172A] uppercase flex items-center justify-center rounded-xl">
              cumpăra
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
