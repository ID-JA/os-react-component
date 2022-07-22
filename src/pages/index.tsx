import type { GetStaticProps } from "next";
import type { Component } from "contentlayer/generated";
import { allComponents } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import TechnologiesCard from "@/components/TechnologyCard";
import LoadingComponent from "@/components/LoadingComponent";
import Link from "next/link";
import HeroTitle from "@/components/HeroTitle";

type Props = {
  components: Component[];
};

const Home = (components: Props) => {
  return (
    <section>
      <section className='py-12 '>
        <HeroTitle />
        <p className='text-sm font-light text-gray-500 dark:text-gray-300 md:max-w-md md:text-base'>
          JS/TS, Responsive, Semantique HTML, Accessibilty(A11y) No packages,
          Dark/Light mode{" "}
        </p>
      </section>
      <section className=' flex  w-full max-w-3xl flex-col space-y-6 py-12 md:flex-row md:justify-between md:space-y-0'>
        <TechnologiesCard
          technology='Next.js: '
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#D8B4FE] to-[#818CF8]'
        />
        <TechnologiesCard
          technology='TailwindCss: '
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
        />
        <TechnologiesCard
          technology='Vercel: '
          content='  with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead.'
          gradient='from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
        />
      </section>

      <section className='py-12 '>
        <h2 className='mb-4 text-xl font-semibold dark:text-white md:text-2xl'>
          Featured Components:
        </h2>
        <p className=' mb-4 max-w-2xl text-sm font-light leading-normal text-gray-500 dark:text-gray-300'>
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
          Wrestling with a bunch of complex media queries in your CSS sucks, so
          Tailwind lets you build responsive designs right in your HTML instead.
        </p>
        <Link href={"/components"}>
          <a>
            <p className='transitions text-sm font-semibold text-gray-400 hover:translate-x-1 hover:text-black dark:text-gray-300 hover:dark:text-white'>
              See All Components &gt;
            </p>
          </a>
        </Link>
      </section>

      <section className='grid w-full grid-cols-1 gap-10 rounded-xl py-6  md:grid-cols-3'>
        <LoadingComponent />
        <LoadingComponent />
        <LoadingComponent />
        <LoadingComponent />
        <LoadingComponent />
        <LoadingComponent />
      </section>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const components = allComponents.map((component) =>
    pick(component, ["title", "description", "image", "date", "tags"])
  );

  return { props: { components } };
};

export default Home;
