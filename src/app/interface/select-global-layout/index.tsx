import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useStore } from "@/app/store";
import { LayoutName, defaultLayout, nonRandomLayouts } from "@/app/layouts";
import { useIsBusy } from "@/lib/useIsBusy";

import { SelectLayout } from "../select-layout";

function SelectGlobalLayoutContent() {
  const searchParams = useSearchParams();

  const requestedLayout =
    (searchParams?.get("layout") as LayoutName) || defaultLayout;

  const layout = useStore((s) => s.layout);
  const setLayout = useStore((s) => s.setLayout);

  const isBusy = useIsBusy();

  const [draftLayout, setDraftLayout] = useState<LayoutName>(requestedLayout);

  useEffect(() => {
    const layoutChanged = draftLayout !== layout;
    if (layoutChanged && !isBusy) {
      setLayout(draftLayout);
    }
  }, [layout, draftLayout, isBusy]);

  return (
    <SelectLayout
      defaultValue={defaultLayout}
      onLayoutChange={setDraftLayout}
      disabled={isBusy}
      layouts={nonRandomLayouts}
    />
  );
}

export function SelectGlobalLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectGlobalLayoutContent />
    </Suspense>
  );
}
