import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header3() {
  return (
    <div className="flex flex-col lg:h-[1850px]">
      <div className="my-16 px-4 lg:flex-1 lg:py-36 lg:pl-[112px] lg:pr-[60px] ">
        <div className="my-4 lg:flex lg:flex-col lg:items-center lg:text-center">
          <div className="p-2 lg:w-[270px] mb-4 lg:mb-[22px] lg:text-xl lg:leading-[30px] lg:flex lg:flex-row lg:justify-center">
            <Button variant={"primary"} size={"primary"} className="mr-2">
              New feature
            </Button>
            <Button variant={"secondary"} size={"secondary"} className="">
              Check out the team dashboard
              <IconArrowRight
                className="mt-[1px] ml-[4px]"
                width={"13px"}
                height={"13px"}
                stroke={"#9E77ED"}
              />
            </Button>
          </div>
          <h1 className="font-semibold text-[#42307D] text-4xl leading-[44px text-[#101828] mb-4 lg:text-6xl lg:leading-[60px]">
            High-performing remote teams. The futur of work.
          </h1>
          <p className="font-normal text-[#6941C6] text-base leading-7 lg:text-[20px] lg:leading-[30px] max-w-[768px] lg:mb-11">
            Powerfull, self-serve teamengagement tools and analytics. Surcharge
            your managers & keep employees engaged from anywhere
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
          src="/img/4.jpg"
          width={343}
          height={280}
          alt="Picture"
        />
        <Image
          className="w-full h-full hidden lg:block"
          src="/img/4.jpg"
          width={720}
          height={720}
          alt="Picture"
        />
      </div>
    </div>
  );
}
