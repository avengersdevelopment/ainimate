import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Docs",
    url: process.env.NEXT_PUBLIC_DOCS_URL,
  },
];

export default function Footer() {
  return (
    <>
      <section className="h-[30rem] text-white p-[75px] overflow-hidden font-monumenExtended relative">
        <div className="w-full h-full relative">
          <Image
            width={500}
            height={500}
            className="absolute w-full"
            src="/assets/home/footer.svg"
            alt=""
          />
          <div className="absolute w-full h-full gap-[10rem] px-[4rem] flex justify-between items-center text-[#FDDAFF]">
            <div className="w-full font-encodeSans  text-[20px] ">
              <Image
                width={500}
                height={500}
                className="w-[349px] mb-3"
                src="/assets/home/AINIMATE.svg"
                alt=""
              />
              <div className="w-[298px] text-wrap ">
                Transforming creativity into comics, one click at a time.
              </div>
            </div>
            <div className="w-full flex justify-end gap-8">
              <div>
                <span className="font-extended mb-5 text-nowrap text-[24px] text-[#FA8BFF]">
                  Quick Links
                </span>
                <ul className="font-encodeSans">
                  {links?.map((link) => (
                    <li key={link.name} className="hover:underline">
                      <Link href={link.url || ""}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-extended mb-5 text-nowrap text-[24px] text-[#FA8BFF]">
                  Social Media{" "}
                </span>
                <div className="font-encodeSans flex flex-col gap-1">
                  <Link href={"#"} className="hover:underline">
                    X
                  </Link>
                  <Link href={"#"} className="hover:underline">
                    Developer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
