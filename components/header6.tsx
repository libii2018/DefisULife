import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header6() {
  return (
    <div className="flex flex-col lg:py-28 lg:flex-row">
      <div className="my-16 px-4 lg:py-36 lg:pl-[112px] lg:pr-[60px]">
        <div className="my-4">
          <div className="p-2 w-[270px] mb-4 lg:mb-[22px] lg:text-xl lg:leading-[30px]">
            <Button variant={"primary"} size={"primary"} className="mr-2">
              <IconPoint
                width={"8px"}
                height={"8px"}
                stroke={"#9E77ED"}
                className="mr-[5px]"
              />
              We're hiring
            </Button>
            <Button variant={"secondary"} size={"secondary"} className="">
              Join our remote team
              <IconArrowRight
                className="mt-[1px] ml-[4px]"
                width={"13px"}
                height={"13px"}
                stroke={"#9E77ED"}
              />
            </Button>
          </div>
          <h1 className="font-semibold text-[#101828 ] text-4xl leading-[44px text-[#101828] mb-4 lg:text-6xl lg:leading-[60px] lg:max-w-[640px]">
            Portfolio performance tracking made easy
          </h1>
          <p className="font-normal text-[#475467] text-base leading-7 lg:text-[20px] lg:leading-[30px] lg:max-w-[640px] lg:mb-11">
            Design by maketers. Untitled gives you the guidance, data and
            innovation you need to become a better marketer.
          </p>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:items-end lg:justify-end lg:w-[480px] lg:h-[74px] lg:gap-3">
          <Button variant={"five"} size={"five"} className="mb-3 lg:mb-0">
            <Image
              className="mr-2"
              src="/img/9.jpg"
              width={132}
              height={44}
              alt="Picture of the iconright"
            />
          </Button>
          <Button variant={"five"} size={"five"}>
            <Image
              className="mr-2"
              src="/img/10.jpg"
              width={132}
              height={44}
              alt="Picture"
            />
          </Button>
        </div>
      </div>
      <div className="px-[68px]  lg:p-0 lg:w-[512px] lg:h-full lg:px-[99px] lg:pt-7">
        <Image
          className="w-full lg:hidden"
          src="/img/8.jpg"
          width={313.99}
          height={638.5}
          alt="Picture"
        />
        <Image
          className="w-full h-full hidden lg:block"
          src="/img/7.jpg"
          width={313.99}
          height={638.5}
          alt="Picture"
        />
      </div>
    </div>
  );
}
