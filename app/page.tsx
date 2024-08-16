import Header1 from "@/components/header1";
import Header2 from "@/components/header2";
import Header3 from "@/components/header3";
import Header4 from "@/components/header4";
import Header5 from "@/components/header5";
import Header6 from "@/components/header6";
import Header7 from "@/components/header7";
import Header8 from "@/components/header8";
import IconArrowRight from "@/components/icon/IconArrowRight";
import IconPoint from "@/components/icon/IconPoint";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="my-0 mx-auto max-w-[1440px]">
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <Header7 />
      <Header8 />
    </main>
  );
}
