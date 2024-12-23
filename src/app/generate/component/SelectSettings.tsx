/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { IUseGenerate } from "../../new-landing/useGenerate";
import {
  defaultPreset,
  nonRandomPresets,
  PresetName,
  presets,
} from "@/app/engine/presets";
import {
  allLayoutLabels,
  layoutIcons,
  LayoutName,
  nonRandomLayouts,
} from "@/app/layouts";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch2 } from "@/components/ui/switch2";
import { Textarea } from "@/components/ui/textarea";

import { useStore } from "@/app/store";

export interface SelectSettingBoxProps extends IUseGenerate {
  onNewSubmit: () => void;
}

export default function SelectSettingsBox(props: SelectSettingBoxProps) {
  const setLayout = useStore((s) => s.setLayout);
  return (
    <div>
      {/* Textarea Storyline */}
      <div className="bg-[#FA8BFF]/[0.07] backdrop-blur-lg p-4 h-44 border-2 border-[#FA8BFF] mb-4">
        <textarea
          placeholder="Write your story here...."
          value={props.draftPromptB}
          onChange={(e) => props.setDraftPromptB(e.target.value)}
          className="w-full h-full bg-transparent text-white placeholder-white/70 resize-none focus:outline-none"
        />
      </div>
      <div className="bg-[#FA8BFF]/[0.07] backdrop-blur-lg p-4 h-28 border-2 border-[#FA8BFF]">
        <textarea
          placeholder="Insert your comic style here..."
          value={props.draftPromptA}
          onChange={(e) => props.setDraftPromptA(e.target.value)}
          className="w-full h-full bg-transparent text-white placeholder-white/70 resize-none focus:outline-none"
        />
      </div>
      {/* CHOOSE STYLE */}
      <div>
        <Select
          onValueChange={(value) => {
            props.setDraftPreset(value as PresetName);
          }}
          disabled={props.isBusy}
          value={props.draftPreset}
        >
          {/* The trigger with a blurred background, border, and pink text */}
          <SelectTrigger className="w-full bg-[#FA8BFF]/[0.07] backdrop-blur-lg border-2 border-[#FA8BFF] text-[#FDDAFF] text-xs font-monumenExtended focus:outline-none hover:bg-white/10 transition-colors mt-4 focus:ring-0 focus:ring-offset-0 rounded-none">
            <SelectValue placeholder="CHOOSE STYLE" />
          </SelectTrigger>

          {/* The dropdown content with a semi-transparent background, border, and white text */}
          <SelectContent className="bg-white/10 text-white overflow-y-auto max-h-[10rem] rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none">
            {nonRandomPresets.map((key) => (
              <SelectItem
                key={key}
                value={key}
                className="text-xs font-monumenExtended bg-[#141414] hover:bg-white/20 transition-colors"
              >
                {presets[key].label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* PREFERENCES */}
      <div>
        <h2 className="text-[#FDDAFF] text-lg font-medium tracking-wider font-monumenExtended mb-2 mt-4">
          PREFERENCES
        </h2>
        <div className="space-y-[0.6rem]">
          {/* CAPTION */}
          <div className="flex gap-10 items-center">
            <span className="text-white font-monumenExtended text-xs w-24">
              CAPTION
            </span>
            <Switch2
              checked={props.showCaptions}
              onCheckedChange={props.setShowCaptions}
            />
          </div>

          {/* BUBBLES */}
          <div className="flex gap-10 items-center">
            <span className="text-white font-monumenExtended text-xs w-24">
              BUBBLES
            </span>
            <Switch2
              checked={props.showSpeeches}
              onCheckedChange={props.setShowSpeeches}
              defaultChecked={props.showSpeeches}
            />
          </div>
        </div>
      </div>

      {/* CHOOSE GRID */}
      <div>
        <h2 className="text-[#FDDAFF] text-lg font-medium tracking-wider font-monumenExtended mt-2 mb-1">
          CHOOSE GRID
        </h2>
        <div className="grid grid-cols-4 gap-2 w-[15rem]">
          {nonRandomLayouts.map((grid, index) => {
            const selected = props.draftLayout === grid;
            return (
              <button
                key={index}
                onClick={() => {
                  props.setDraftLayout(grid as LayoutName);
                  setLayout(grid as LayoutName);
                }}
                className={
                  "p-2 bg-transparent backdrop-blur-sm rounded-lg transition-all border-2 border-[#FA8BFF]/40 opacity-50" +
                  (selected ? "ring-2 ring-[#FA8BFF] border-[#FA8BFF] opacity-100" : "")
                }
              >
                <div className="relative w-full aspect-square">
                  {(layoutIcons as any)[grid] ? (
                    <Image
                      src={(layoutIcons as any)[grid]}
                      fill
                      alt={grid}
                      className="rounded-sm object-contain opacity-100"
                    />
                  ) : (
                    <div className="text-[#FA8BFF] text-xs flex items-center justify-center w-full h-full">
                      {(allLayoutLabels as any)[grid]}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* GENERATE BUTTON */}
      <div
        className="bg-cover bg-center bg-transparent text-[#FA8BFF] h-[3rem] w-full flex items-center justify-center cursor-pointer hover:opacity-80 mt-4"
        style={{
          backgroundImage: `url("/assets/images/generate-page/white-btn-bg.png")`,
          backgroundSize: "100% 100%",
        }}
        onClick={props.onNewSubmit}
      >
        <button className="w-full bg-transparent font-encodeSans text-black font-semibold tracking-wides text-xl hover:bg-transparent">
          GENERATE
        </button>
      </div>

      {/* Loading overlay */}
      {/* {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-4 rounded-lg">
            <p className="text-lg text-white font-semibold">
              Generating story...
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}
