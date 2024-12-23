import { cn } from "@/lib/utils";
import { Page } from "@/app/interface/page";
import { ResultProps } from "../page";
import { useStore } from "@/app/store";


export default function ComicPanel(props: ResultProps) {
  const layout = useStore((s) => s.layout);
  return (
    <div className="w-full h-full">
      <div
        // id="comic-canvas"
        className={cn(
          `flex flex-col`,
          props.zoomLevel > 105 ? `items-start` : `items-center`
        )}
      >
        <div
          id="comic-canvas"
          className={cn(
            `comic-page bg-white`,

            `grid grid-cols-1`,
            props.currentNbPages > 1 ? `md:grid-cols-2` : ``,

            // spaces between pages
            `gap-x-3 gap-y-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16`,

            // when printed
            `print:gap-x-3 print:gap-y-4 print:grid-cols-1`
          )}
          style={{
            width: `${props.zoomLevel}%`,
          }}
        >
          {Array(props.currentNbPages)
            .fill(0)
            .map((_, i) => (
              <Page key={i} page={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
