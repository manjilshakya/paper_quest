import Image from "next/image";
import img from "../../../../../../public/image/941680252040.png";

const logos = [
  {
    src: img,
    alt: "BLE",
  },
  {
    src: img,
    alt: "SEE",
  },
  {
    src: img,
    alt: "+2",
  },
  {
    src: img,
    alt: "Bachelors",
  },
];

const Paper = () => (
  <div className="my-10" id="services">
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        Paper available with us!
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col flex-wrap items-center justify-center gap-2"
            >
              {/* <Image src={item.src} alt={item.alt} height={90} width={140} /> */}
              <h2>{item.alt}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Paper;
