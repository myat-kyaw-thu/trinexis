import { Navbar } from '@/components/sections/navbar';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className='h-[2000px]'>
          <h1 className='text-green-500'>header</h1>
        </div>
      </div>
    </>
  );
}
