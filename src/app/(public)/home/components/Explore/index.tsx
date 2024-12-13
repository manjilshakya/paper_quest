// import SectionWrapper from "../../SectionWrapper"
import explore from "../../../../../../public/image/explore.png";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { Button } from "antd";

const Explore = () => {
  return (
    <SectionWrapper id="cta" className="pb-0 mt-[128px] mx-[128px]">
      <div className="">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={explore}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Create Successful Business Models with Our IT Solutions
            </h2>
            <p className="mt-3 text-gray-600">
              Blinder, a software development company, helps to digitize
              businesses by focusing on client’s business challenges, needs. We
              value close transparent cooperation and encourage our clients to
              participate actively in the project development life cycle.
            </p>
            <Button
              href="/get-started"
              className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Explore;
