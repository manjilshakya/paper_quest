import explore from "../../../../../../public/image/explore.png";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { Button } from "antd";

const Explore = () => {
  return (
    <SectionWrapper id="explore" className="pb-0 mt-12 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src={explore}
            className="rounded-lg mx-auto lg:mx-0 w-full max-w-md lg:max-w-lg"
            alt="Create Successful Business Models with Our IT Solutions"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Create Successful Business Models with Our IT Solutions
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Blinder, a software development company, helps digitize businesses
            by focusing on client’s business challenges and needs. We value
            close transparent cooperation and encourage our clients to
            participate actively in the project development life cycle.
          </p>
          <Button
            href="/get-started"
            className="mt-6 px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-md transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Explore;
