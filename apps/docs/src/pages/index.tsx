import Head from "next/head";
import { Button, GuestLayout } from "ui";
import {useState} from 'react';
import {add} from 'math';

export default function Home() {
  const [counter, setCounter] = useState<number>(5)
  function handleClick() {
    setCounter(add(1, counter));
  }

  return (
    <GuestLayout>
      <Head>
        <title>Docs - Test Turborepo</title>
      </Head>

      <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        Docs
        <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-2">
          Test Turborepo
        </span>
      </h1>
      <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
        <Button onClick={handleClick}>Añadir 1 - {counter}</Button>
      </div>
    </GuestLayout>
  );
}
