import { ScrollArea } from "@/components/ui/scroll-area";
import * as htmlToImage from "html-to-image";
import { ResultProps } from "../page";
import Image from "next/image";

export default function SummaryText(props: ResultProps) {
  // Function to share on Twitter
  const shareOnTwitter = () => {
    const text = encodeURIComponent(
      `I just generated an amazing comic at AINIMATE!\n\n"${props.summary.title}"\n${props.summary.description}\n\nTry it yourself here: https://AINIMATE.gg/`
    );
    const url = "https://twitter.com/intent/tweet?text=" + text;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col">
      {/* Title */}
      <h1 className="text-4xl text-[#FDDAFF] font-monumenExtended mb-4">
        {props.summary.title ?? ""}
      </h1>

      {/* Description (using ScrollArea if desired) */}
      <ScrollArea className="h-[36vh] max-h-[36vh]">
        <p className="text-[#FDDAFF] text-xl leading-tight font-encodeSans">
          {props.summary.description}
        </p>
      </ScrollArea>

      {/* Download / Share Row */}
      <div className="flex flex-row gap-6 mt-6">
        {/* Re-generate button */}
        <div
          className="grow bg-cover bg-center bg-transparent text-[#FA8BFF] h-[3.5rem] flex items-center justify-center cursor-pointer hover:opacity-80 mt-4"
          style={{
            backgroundImage: `url("/assets/images/generate-page/white-btn-bg.png")`,
            backgroundSize: "100% 100%",
          }}
          onClick={props.onNewSubmit}
        >
          <button className="w-full bg-transparent font-encodeSans text-black font-semibold tracking-wides text-xl hover:bg-transparent">
            RE-GENERATE
          </button>
        </div>
        {/* Download */}
        <div
          onClick={() => {
            htmlToImage
              .toJpeg(document.getElementById("comic-canvas") as HTMLElement, {
                quality: 1,
                pixelRatio: 5,
              })
              .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-comic.jpeg";
                link.href = dataUrl;
                link.click();
              });
          }}
          className="bg-cover bg-center flex flex-col gap-2 w-[8.25rem] h-[6.375rem] bg-transparent text-[#FA8BFF] cursor-pointer hover:opacity-80"
          style={{
            backgroundImage: `url("/assets/images/result-page/icon-bg.png")`,
          }}
        >
          <button
            className="flex flex-col gap-1 w-full h-full bg-transparent text-[#FA8BFF] font-encodeSans items-center justify-center
            transition focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            <Image
              src={"/assets/images/result-page/download-icon.png"}
              alt={"download"}
              width={50}
              height={50}
            />
            DOWNLOAD
          </button>
        </div>

        {/* Share */}
        <div
          onClick={shareOnTwitter}
          className="bg-cover bg-center flex flex-col gap-2 w-[8.25rem] h-[6.375rem] bg-transparent text-[#FA8BFF] cursor-pointer hover:opacity-80"
          style={{
            backgroundImage: `url("/assets/images/result-page/icon-bg.png")`,
          }}
        >
          <button
            className="flex flex-col gap-1 w-full h-full bg-transparent text-[#FA8BFF] font-encodeSans items-center justify-center
            transition focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            <Image
              src={"/assets/images/result-page/share-icon.png"}
              alt={"share"}
              width={50}
              height={50}
            />
            SHARE
          </button>
        </div>
      </div>
    </div>
  );
}
