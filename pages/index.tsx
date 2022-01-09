import type { NextPage } from "next";
import Head from "next/head";
import BrandIcon, { Brand } from "../components/brandIcons/brandIcon";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CNT-SO métiers du numérique</title>
        <meta name="description" content=">CNT-SO métiers du numérique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">
                  <span className="block">
                    Branche des métiers du numérique du syndicat
                    <span className=" text-red-600"> CNT-SO.</span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Salariés, indépendants et sous-traitants, notre combat est le
                  même. Faire valoir nos droit et nous réapproprier le domaine
                  des hautes technologies et de la création numérique.
                </p>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative pt-10 bg-black sm:pt-16 pb-14">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-3xl lg:mt-6 xl:text-3xl">
                  Nous contacter:
                </h1>
              </div>
              <div className="mx-auto max-w-md pt-8 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <a
                  href="https://discord.gg/3aJ5X3tybP"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <BrandIcon brand={Brand.DISCORD} width={50} height={50} />
                  <p className="text-white px-4 pt-4">
                    {" "}
                    Sur notre serveur Discord
                  </p>
                </a>
              </div>
              <div className="mx-auto max-w-md pt-8 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 ">
                <a
                  href="https://signal.group/#CjQKII2iBls-jWX3PrZaqPWLL2i4pYywUwJx3Wx2_bfb-SV0EhADSSlr_d4ZjBNEkjVzaRrm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <BrandIcon brand={Brand.SIGNAL} width={50} height={50} />
                  <p className="text-white px-4 pt-4">
                    Sur notre groupe Signal
                  </p>
                </a>
              </div>
              <div className="mx-auto max-w-md pt-8 px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <span className="text-white">
                  Par email: numerique[[at]]cnt-so.org
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
