"use client";
import React from "react";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useLocalStorage } from "usehooks-ts";

import { FontName, defaultFont } from "@/lib/fonts";

import { PresetName, defaultPreset } from "@/app/engine/presets";
import { useStore } from "@/app/store";

import { LayoutName, defaultLayout } from "@/app/layouts";

import { useOAuth } from "@/lib/useOAuth";
import { useIsBusy } from "@/lib/useIsBusy";

import { getLocalStorageShowSpeeches } from "@/lib/getLocalStorageShowSpeeches";
import { localStorageKeys } from "@/app/interface/settings-dialog/localStorageKeys";
import { defaultSettings } from "@/app/interface/settings-dialog/defaultSettings";

export interface IUseGenerate {
  isBusy: boolean;
  setDraftPreset: React.Dispatch<React.SetStateAction<string>>;
  showCaptions: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCaptions: (showCaptions: boolean) => void;
  showSpeeches: boolean;
  setShowSpeeches: (showSpeeches: boolean) => void;
  setDraftLayout: React.Dispatch<
    React.SetStateAction<
      "random" | "Layout0" | "Layout1" | "Layout2" | "Layout3"
    >
  >;
  isDesktop: boolean;
  handleSubmit: () => void;
  //   setDraftPrompt: React.Dispatch<React.SetStateAction<string>>;
  setDraftPromptA: React.Dispatch<React.SetStateAction<string>>;
  setDraftPromptB: React.Dispatch<React.SetStateAction<string>>;
  draftPrompt: string;
  draftPromptA: string;
  draftPromptB: string;
  draftPreset: string;
  draftLayout:
    | "random"
    | "Layout0"
    | "Layout1"
    | "Layout2"
    | "Layout3"
    | "Layout4";
}

export const useGenerate = (): IUseGenerate => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const searchParams = useSearchParams();
  const layout = useStore((s) => s.layout);

  const requestedPreset =
    (searchParams?.get("preset") as PresetName) || defaultPreset;
  const requestedFont = (searchParams?.get("font") as FontName) || defaultFont;
  const requestedStylePrompt =
    (searchParams?.get("stylePrompt") as string) || "";
  const requestedStoryPrompt =
    (searchParams?.get("storyPrompt") as string) || "";
  const requestedLayout =
    layout === "random" ? defaultLayout : layout;

  // const font = useStore(s => s.font)
  // const setFont = useStore(s => s.setFont)
  const preset = useStore((s) => s.preset);
  const prompt = useStore((s) => s.prompt);

  const setLayout = useStore((s) => s.setLayout);

  const setShowSpeeches = useStore((s) => s.setShowSpeeches);
  const showSpeeches = useStore((s) => s.showSpeeches);

  const setShowCaptions = useStore((s) => s.setShowCaptions);
  const showCaptions = useStore((s) => s.showCaptions);

  const currentNbPages = useStore((s) => s.currentNbPages);
  const setCurrentNbPages = useStore((s) => s.setCurrentNbPages);

  const generate = useStore((s) => s.generate);

  const isBusy = useIsBusy();

  const [lastDraftPromptA, setLastDraftPromptA] = useLocalStorage<string>(
    "AI_COMIC_FACTORY_LAST_DRAFT_PROMPT_A",
    requestedStylePrompt
  );

  const [lastDraftPromptB, setLastDraftPromptB] = useLocalStorage<string>(
    "AI_COMIC_FACTORY_LAST_DRAFT_PROMPT_B",
    requestedStoryPrompt
  );

  // TODO should be in the store
  const [draftPromptA, setDraftPromptA] = useState(lastDraftPromptA);
  const [draftPromptB, setDraftPromptB] = useState(lastDraftPromptB);
  const draftPrompt = `${draftPromptA}||${draftPromptB}`;

  const [draftPreset, setDraftPreset] = useState<PresetName>(requestedPreset);
  const [draftLayout, setDraftLayout] = useState<LayoutName>(requestedLayout);

  const { isLoggedIn, enableOAuthWall } = useOAuth({ debug: false });

  const [hasGeneratedAtLeastOnce, setHasGeneratedAtLeastOnce] =
    useLocalStorage<boolean>(
      localStorageKeys.hasGeneratedAtLeastOnce,
      defaultSettings.hasGeneratedAtLeastOnce
    );

  const [showAuthWall, setShowAuthWall] = useState(false);

  // we synchronize the draft prompt with the local storage
  useEffect(() => {
    if (lastDraftPromptA !== draftPromptA) {
      setLastDraftPromptA(draftPromptA);
    }
  }, [draftPromptA]);
  useEffect(() => {
    if (lastDraftPromptA !== draftPromptA) {
      setDraftPromptA(lastDraftPromptA);
    }
  }, [lastDraftPromptA]);
  useEffect(() => {
    if (lastDraftPromptB !== draftPromptB) {
      setLastDraftPromptB(draftPromptB);
    }
  }, [draftPromptB]);
  useEffect(() => {
    if (lastDraftPromptB !== draftPromptB) {
      setDraftPromptB(lastDraftPromptB);
    }
  }, [lastDraftPromptB]);

  // we need a use effect to properly read the local storage
  useEffect(() => {
    setShowSpeeches(getLocalStorageShowSpeeches(true));
  }, []);

  const handleSubmit = () => {
    // if (enableOAuthWall && hasGeneratedAtLeastOnce && !isLoggedIn) {
    //   setShowAuthWall(true);
    //   return;
    // }

    const promptChanged = draftPrompt.trim() !== prompt.trim();
    const presetChanged = draftPreset !== preset.id;
    const layoutChanged = draftLayout !== layout;

    if (!isBusy) {
      generate(draftPrompt, draftPreset, draftLayout);
    }
  };

  // useEffect(() => {
  //   const layoutChanged =
  //     JSON.stringify(draftLayout) !== JSON.stringify(layout);
  //   if (layoutChanged && !isBusy) {
  //     setLayout(draftLayout);
  //   }
  // }, [draftLayout, layout, isBusy, setLayout]);

  return {
    isBusy,
    setDraftPreset,
    showCaptions,
    open,
    setOpen,
    setShowCaptions,
    showSpeeches,
    setShowSpeeches,
    setDraftLayout,
    isDesktop,
    handleSubmit,
    setDraftPromptA,
    setDraftPromptB,
    draftPromptA,
    draftPrompt,
    draftPromptB,
    draftPreset,
    draftLayout,
  };
};
