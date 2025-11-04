import { Nav } from '@/components/nav';
import { Hero } from '@/components/Home/hero';

export default function Home() {
  return (
    <div className={'relative flex flex-col w-full h-full'}>
      <Nav />
      <main className={' relative sm:gap-24 gap-8 flex flex-col '}>
        <div>
          <Hero />
          <div
            className={
              'relative min-h-screen flex flex-col pt-[40px] sm:pt-[80px] px-6 -top-44 sm:-top-52 w-full h-full bg-[#191919]'
            }
          >
            <section className={' max-w-4xl mx-auto text-white'}></section>
          </div>
        </div>
      </main>
    </div>
  );
}
