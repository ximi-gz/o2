import dynamic from 'next/dynamic';

const DynamicO23 = dynamic(() => import('../components/o23'), { ssr: false });

const Page = () => {
  return (
    <div>
      <h1>Next.js mit Framer Motion</h1>
      <DynamicO23 />
    </div>
  );
};

export default Page;
