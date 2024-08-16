import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header2() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[720px]">
      <div className="my-16 px-4 lg:flex-1 lg:py-36 lg:pl-[112px] lg:pr-[60px] ">
        <div className="my-4 lg:h-[228px] lg:relative lg:mb-12">
          <h1 className="font-semibold text-[#101828 ] text-4xl leading-[44px] text-[#101828] mb-4 lg:text-6xl lg:leading-[60px] lg:w-[800px] lg:h-36 lg:absolute">
            Customer service software for customer-first teams
          </h1>
          <p className="font-normal text-[#475467] text-base leading-7 lg:text-[20px] lg:leading-[30px] max-w-[480px] lg:mb-11 lg:mt-[40px] lg:absolute lg:top-[110px]">
            The best customer service software for customer-first teams.
            Industry-leading email and live chat support.
          </p>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:items-end lg:justify-end lg:w-[480px] lg:h-[74px] lg:gap-3">
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
          src="/img/1.jpg"
          width={343}
          height={280}
          alt="Picture"
        />
        <Image
          className="w-full h-full hidden lg:block"
          src="/img/2.jpg"
          width={720}
          height={720}
          alt="Picture"
        />
      </div>
    </div>
  );
}
