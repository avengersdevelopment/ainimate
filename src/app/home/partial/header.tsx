import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const links = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "docs",
      url: process.env.NEXT_PUBLIC_DOCS_URL,
    },
  ];

  return (
    <>
      <header className="absolute top-[5%] w-full z-50 text-white">
        <div className="relative w-full">
          <div className="absolute left-[10%] top-[40%]">
            <img className="w-full" src="/assets/home/AINIMATE.svg" alt="" />
          </div>
          <div className="flex justify-center items-center gap-10 w-full uppercase font-sora">
            <Link
              href={links?.[0].url ?? ""}
              className="hover:text-[#FA8BFF] group p-2  transition duration-300 relative"
            >
              <div>{links?.[0].name}</div>
              <Image
                height={10}
                width={10}
                className="absolute -translate-x-0 -translate-y-5 group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:opacity-100 opacity-20 transition duration-300"
                src="/assets/home/corner.svg"
                alt=""
              />
              <Image
                height={10}
                width={10}
                className="absolute -translate-x-2 right-0 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-0 rotate-180 group-hover:opacity-100 opacity-0 transition duration-300"
                src="/assets/home/corner.svg"
                alt=""
              />
            </Link>
            <Link
              href={links?.[1].url ?? ""}
              target="_blank"
              className="hover:text-[#FA8BFF] group p-2  transition duration-300 relative"
            >
              <div>{links?.[1].name}</div>
              <Image
                height={10}
                width={10}
                className="absolute -translate-x-0 -translate-y-5 group-hover:-translate-x-4 group-hover:-translate-y-8 group-hover:opacity-100 opacity-20 transition duration-300"
                src="/assets/home/corner.svg"
                alt=""
              />
              <Image
                height={10}
                width={10}
                className="absolute -translate-x-2 right-0 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-0 rotate-180 group-hover:opacity-100 opacity-0 transition duration-300"
                src="/assets/home/corner.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="absolute right-[42px] top-[-14px]">
            <Link
              href={process.env.NEXT_PUBLIC_PUMP_FUN_URL ?? ""}
              target="_blank"
            >
              <Image
                height={240}
                width={240}
                className="w-[330px] hover:animate-shake"
                src="/assets/home/wallet.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
