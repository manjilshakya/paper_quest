import Image from "next/image";
import img from "../../../../../../public/image/941680252040.png";

const logos = [
  {
    src: img,
    alt: "freshbooks",
  },
  {
    src: img,
    alt: "sendgrid",
  },
  {
    src: img,
    alt: "layers",
  },
  {
    src: img,
    alt: "adobe",
  },
];

const Trustedby = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        TRUSTED BY TOP COLLEGES FROM AROUND THE WORLD
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx}>
              <Image src={item.src} alt={item.alt} height={90} width={140} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Trustedby;
