import Image from "next/image";
import IconArrowRight from "./icon/IconArrowRight";
import IconPoint from "./icon/IconPoint";
import { Button } from "./ui/button";

export default function Header1() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[720px]">
      <div className="my-16 px-4 lg:flex-1 lg:py-36 lg:pl-[112px] lg:pr-[60px] ">
        <div className="my-4">
          <div className="border rounded-[10px] border-[#D0D5DD] p-2 w-[270px] mb-4 lg:mb-[22px] lg:text-xl lg:leading-[30px]">
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
          <h1 className="font-semibold text-[#101828 ] text-4xl leading-[44px text-[#101828] mb-4 lg:text-6xl lg:leading-[60px]">
            People who care about your growth
          </h1>
          <p className="font-normal text-[#475467] text-base leading-7 lg:text-[20px] lg:leading-[30px] max-w-[480px] lg:mb-11">
            Powerfull, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
        </div>
        <div className="lg:flex lg:flex-row lg:w-[480px] lg:h-[74px]">
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="w-full h-full rounded-lg px-4 py-3 border mb-[6px] lg:w-[335px] lg:h-[48px]"
            />
            <span className="font-normal text-sm inline-block mb-4">
              We care about your data in our{" "}
              <a href="#" className="underline">
                {" "}
                privacy policy
              </a>
            </span>
          </form>
          <Button variant={"third"} size={"third"}>
            Get started
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
