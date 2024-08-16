import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header7() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[720px]">
      <div className="my-16 px-4 lg:flex-1 lg:py-36 lg:pl-[112px] lg:pr-[60px] ">
        <div className="my-4 lg:h-[228px] lg:mb-12">
          <div className="p-2 lg:w-[270px] mb-4 lg:mb-[22px] lg:text-xl lg:leading-[30px] lg:flex lg:flex-row lg:justify-center">
            <Button variant={"primary"} size={"primary"} className="mr-2">
              <IconPoint
                width={"8px"}
                height={"8px"}
                stroke={"#9E77ED"}
                className="mr-[5px]"
              />
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
          <h1 className="font-semibold text-[#101828 ] text-4xl leading-[44px text-[#101828] mb-4 lg:text-6xl lg:leading-[60px]">
            People who care about your growth
          </h1>
          <p className="font-normal text-[#475467] text-base leading-7 lg:text-[20px] lg:leading-[30px] max-w-[480px] lg:mb-11">
            Powerfull, self-serve product and growth analytics to help you
            convert, engage, and retain more.
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
          src="/img/12.jpg"
          width={343}
          height={280}
          alt="Picture"
        />
        <Image
          className="w-full h-full hidden lg:block"
          src="/img/11.jpg"
          width={720}
          height={720}
          alt="Picture"
        />
      </div>
    </div>
  );
}
