import BackgroundToggle from "./components/BackgroundToggle";
import BackgroundToggle2 from "./components/BackgroundToggle2";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center dark:text-[--light]">
      <h1 className="mt-80 text-[72px] font-bold">Background Mode Toggler</h1>
      <div className="grid grid-cols-3 grid-rows-1 mt-10">
        <div className="col-span-1 row-span-1">
          <BackgroundToggle />
        </div>
        <span className="col-span-1 row-span-1" />
        <div className="col-span-1 row-span-1">
          <BackgroundToggle2 />
        </div>
      </div>
    </main>
  );
}
