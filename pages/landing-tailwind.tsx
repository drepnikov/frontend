import * as React from "react";
import { NextPage } from "next";

interface ILandingTailwindPageProps {}

const LandingTailwindPage: NextPage<ILandingTailwindPageProps> = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src="landing-tailwind/images/logo.svg" />
          </div>

          <div className="hidden space-x-6 md:flex">
            <a className="hover:text-darkGrayishBlue" href="#">
              Pricing
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Product
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              About us
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Careers
            </a>
            <a className="hover:text-darkGrayishBlue" href="#">
              Community
            </a>
          </div>

          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex hustify-center-md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <img src="landing-tailwind/images/illustration-intro.svg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTailwindPage;
