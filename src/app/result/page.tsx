"use client";

import { useStore } from "@/app/store";
import LoadingBar from "@/components/loading/generating";
import { joinWords } from "@/lib/joinWords";
import { useDynamicConfig } from "@/lib/useDynamicConfig";
import { useLLMVendorConfig } from "@/lib/useLLMVendorConfig";
import { GeneratedPanel } from "@/types";
import { useEffect, useRef, useState, useTransition } from "react";
import { IUseGenerate, useGenerate } from "../new-landing/useGenerate";
import { getStoryContinuation } from "../queries/getStoryContinuation";
import ResultUIComponent from "./ui-component";

export interface ResultProps extends IUseGenerate {
  zoomLevel: number;
  currentNbPages: number;
  summary: {
    title: string;
    description: string;
  };
  onNewSubmit: () => void;
}

export default function ResultPage() {
  const generate = useGenerate();
  const summary = useStore((s) => s.summary);
  const zoomLevel = useStore((s) => s.zoomLevel);
  const currentNbPages = useStore((s) => s.currentNbPages);

  const setRevision = useStore((s) => s.setRevision);
  const setSummary = useStore((s) => s.setSummary);
  const isGeneratingStory = useStore((s) => s.isGeneratingStory);

  const [isSubmittedStory, setIsSubmittedStory] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  const [_isPending, startTransition] = useTransition();

  const llmVendorConfig = useLLMVendorConfig();
  const { config, isConfigReady } = useDynamicConfig();

  // useStore state management
  const setGeneratingStory = useStore((s) => s.setGeneratingStory);
  const font = useStore((s) => s.font);
  const preset = useStore((s) => s.preset);
  const prompt = useStore((s) => s.prompt);
  const maxNbPages = useStore((s) => s.maxNbPages);
  const previousNbPanels = useStore((s) => s.previousNbPanels);
  const currentNbPanels = useStore((s) => s.currentNbPanels);
  const maxNbPanels = useStore((s) => s.maxNbPanels);
  const setCurrentNbPanelsPerPage = useStore(
    (s) => s.setCurrentNbPanelsPerPage
  );
  const setMaxNbPanelsPerPage = useStore((s) => s.setMaxNbPanelsPerPage);
  const setCurrentNbPages = useStore((s) => s.setCurrentNbPages);
  const setMaxNbPages = useStore((s) => s.setMaxNbPages);
  const panels = useStore((s) => s.panels);
  const setPanels = useStore((s) => s.setPanels);
  const renderedScenes = useStore((s) => s.renderedScenes);
  const speeches = useStore((s) => s.speeches);
  const setSpeeches = useStore((s) => s.setSpeeches);
  const captions = useStore((s) => s.captions);
  const setCaptions = useStore((s) => s.setCaptions);

  const ref = useRef({
    existingPanels: [] as GeneratedPanel[],
    newPanelsPrompts: [] as string[],
    newSpeeches: [] as string[],
    newCaptions: [] as string[],
    prompt: "",
    preset: "",
  });

  useEffect(() => {
    if (isConfigReady) {
      setCurrentNbPanelsPerPage(config.nbPanelsPerPage);
      setMaxNbPanelsPerPage(config.nbPanelsPerPage);
    }
  }, [JSON.stringify(config), isConfigReady]);

  // react to prompt changes
  useEffect(() => {
    if (!prompt) {
      return;
    }

    if (prompt === useStore.getState().currentClap?.meta.description) {
      console.log(
        "sss",
        `loading a pre-generated comic, so skipping prompt regeneration..`
      );
      return;
    }

    if (prompt !== ref.current.prompt || preset?.label !== ref.current.preset) {
      ref.current = {
        existingPanels: [],
        newPanelsPrompts: [],
        newSpeeches: [],
        newCaptions: [],
        prompt,
        preset: preset?.label || "",
      };
    }

    startTransition(async () => {
      setGeneratingStory(true);

      const [stylePrompt, userStoryPrompt] = prompt
        .split("||")
        .map((x) => x.trim());

      // we have to limit the size of the prompt, otherwise the rest of the style won't be followed
      let limitedStylePrompt = stylePrompt.trim().slice(0, 77).trim();
      if (limitedStylePrompt.length !== stylePrompt.length) {
        console.log(
          "Sorry folks, the style prompt was cut to:",
          limitedStylePrompt
        );
      }

      // new experimental prompt: let's drop the user prompt, and only use the style
      const lightPanelPromptPrefix: string = joinWords(
        preset.imagePrompt(limitedStylePrompt)
      );

      // this prompt will be used if the LLM generation failed
      const degradedPanelPromptPrefix: string = joinWords([
        ...preset.imagePrompt(limitedStylePrompt),

        // we re-inject the story, then
        userStoryPrompt,
      ]);

      // we always generate panels 2 by 2
      const nbPanelsToGenerate = 2;

      for (
        let currentPanel = previousNbPanels;
        currentPanel < currentNbPanels;
        currentPanel += nbPanelsToGenerate
      ) {
        try {
          const candidatePanels = await getStoryContinuation({
            preset,
            stylePrompt,
            userStoryPrompt,
            nbPanelsToGenerate,
            maxNbPanels,
            existingPanels: ref.current.existingPanels,

            llmVendorConfig,
          });

          ref.current.existingPanels.push(...candidatePanels);

          const startAt = currentPanel;
          const endAt = currentPanel + nbPanelsToGenerate;
          for (let p = startAt; p < endAt; p++) {
            ref.current.newCaptions.push(
              ref.current.existingPanels[p]?.caption.trim() || "..."
            );
            ref.current.newSpeeches.push(
              ref.current.existingPanels[p]?.speech.trim() || "..."
            );
            const newPanel = joinWords([
              ref.current.existingPanels[p]?.instructions
                ? lightPanelPromptPrefix
                : degradedPanelPromptPrefix,

              ref.current.existingPanels[p]?.instructions || "",
            ]);
            ref.current.newPanelsPrompts.push(newPanel);
          }

          // update the frontend
          setSpeeches(ref.current.newSpeeches);
          setCaptions(ref.current.newCaptions);
          setPanels(ref.current.newPanelsPrompts);
          setGeneratingStory(false);

          // TODO generate the clap here
        } catch (err) {
          console.log("main.tsx: LLM generation failed:", err);
          setGeneratingStory(false);
          break;
        }
      }
    });
  }, [
    prompt,
    counter,
    preset?.label,
    previousNbPanels,
    currentNbPanels,
    maxNbPanels,
  ]);

  const handleNewSubmit = async () => {
    setIsLoading(true);
    setRevision(1);
    generate.handleSubmit();
    setCounter((prev) => prev + 1);

    // Fetch the summary
    const response = await fetch("/api/generate-summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: generate.draftPromptB, // Assuming this is the current prompt
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate summary");
    }

    const data = await response.json();
    setSummary(data); // Adjust this based on the actual structure of your API response

    // Set the submitted story state after a delay
    setTimeout(() => {
      setIsSubmittedStory(true);
    }, 3000);
  };

  useEffect(() => {
    if (!isGeneratingStory && isSubmittedStory) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isGeneratingStory, isSubmittedStory]);

  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <ResultUIComponent
          zoomLevel={zoomLevel}
          currentNbPages={currentNbPages}
          summary={summary}
          onNewSubmit={handleNewSubmit}
          {...generate}
        />
      )}
    </>
  );
}
