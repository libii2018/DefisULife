import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header4() {
  return (
    <div className="flex flex-col">
      <div className="px-4 lg:flex-1 lg:py-36 lg:pl-[112px] lg:pr-[60px] ">
        <div className="my-4 lg:flex lg:flex-col lg:items-center lg:text-center">
          <h1 className="font-semibold text-[#101828] text-4xl leading-[44px text-[#101828] mb-4 lg:text-6xl lg:leading-[60px]">
            Beautiful analytics to grow smarter
          </h1>
          <p className="font-normal text-[#475467] text-base leading-7 lg:text-[20px] lg:leading-[30px] max-w-[768px] lg:mb-11">
            Powerful, self-serve produci and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:w-full lg:h-[74px] lg:gap-3">
          <Button variant={"third"} size={"third"} className="mb-3 lg:mb-0">
            Get started
          </Button>
          <Button variant={"four"} size={"four"}>
            <Image
              className="mr-2"
              src="/img/iconplay.svg"
              width={16.67}
              height={16.67}
              alt="Picture of the iconright"
            />
            Demo
          </Button>
        </div>
      </div>
      <div className="px-4 lg:flex-1 lg:p-0">
        <Image
          className="w-full lg:hidden"
          src="/img/5.jpg"
          width={343}
          height={280}
          alt="Picture"
        />
        <Image
          className="w-full h-full hidden lg:block"
          src="/img/5.jpg"
          width={720}
          height={720}
          alt="Picture"
        />
      </div>
    </div>
  );
}
