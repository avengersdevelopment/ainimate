/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import { IUseGenerate } from "../../new-landing/useGenerate";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CoinItem {
  name: string;
  image: string;
  storyline: string;
  style: string;
}

export interface SelectCharacterProps extends IUseGenerate {}

export default function SelectCharacter(props: SelectCharacterProps) {
  const listCoin = [
    {
      name: "moodeng",
      image: "/assets/images/landing/coin/moodeng.png",
      storyline:
        "Moodeng, A young hippopotamus, possibly experiencing a moment of surprise or excitement, is depicted with its mouth wide open, showcasing its expressive and playful nature.",
      style:
        "The image displays a cartoonish style with bold, smooth lines and a simple color palette. The use of exaggerated features and minimal shading adds to the whimsical and humorous tone.",
    },
    {
      name: "pepe",
      image: "/assets/images/landing/coin/pepe.png",
      storyline:
        "Pepe, A cartoon frog character sits on a circular platform, appearing contemplative while holding a small object, possibly a flower, in its hand. The frog's expression suggests a moment of introspection or calmness.",
      style:
        "The image features a cartoonish style with smooth, clean lines and a simple color palette. The use of soft, muted colors and minimalistic design elements contributes to a serene and whimsical atmosphere.",
    },
    {
      name: "doge",
      image: "/assets/images/landing/coin/doge.png",
      storyline:
        "Doge, A Shiba Inu dog, with an expressive face, seems to be caught in a moment of surprise or curiosity as it looks towards the viewer. The setting appears to be indoors, giving a sense of domestic tranquility.",
      style:
        "The image is characterized by a realistic photographic style with a focus on the dog's expressive features. The colors are natural and warm, with soft lighting that highlights the dog's fur texture.",
    },
    {
      name: "pnut",
      image: "/assets/images/landing/coin/pnut.png",
      storyline:
        "Pnut, a daring cowboy squirrel, defends the forest's hidden peanut treasure from sneaky bandits. With quick reflexes and a nutty sense of justice, Pnut keeps the peace in the Wild Nutlands.",
      style:
        "Cartoonish, vibrant, western-themed, with dynamic action poses and rustic textures.",
    },
    {
      name: "popcat",
      image: "/assets/images/landing/coin/popcat.png",
      storyline:
        "Popcat, The image depicts a cartoonish cat with an exaggeratedly large open mouth, suggesting it might be meowing loudly or expressing surprise.",
      style:
        "The artistic style is minimalistic and whimsical, featuring bold outlines and a muted color palette. The overall aesthetic is playful and humorous, with a focus on simplicity and exaggeration.",
    },
    {
      name: "wif",
      image: "/assets/images/landing/coin/wif.png",
      storyline:
        "WIF, A dog wearing a cozy pink knitted beanie, sits calmly, possibly enjoying a moment of quiet contemplation or posing for a charming photo.",
      style:
        "The image has a simple, candid style with a focus on texture, highlighted by the soft knit of the pink beanie and the smooth fur of the dog. The neutral background emphasizes the warm tones of the beanie and the dog's fur, creating a gentle, inviting aesthetic.",
    },
  ];

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [isError, setIsError] = useState(false);

  // For storing multiple uploaded images
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve previously uploaded single image
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setUploadedImage(storedImage);
    }
    // Retrieve previously uploaded multiple images
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  const sendImageToAPI = async (imageData: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: "",
          imageData: imageData,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      props.setDraftPromptB(data.json.storyline);
      props.setDraftPromptA(data.json.style);
    } catch (error) {
      setIsError(true);
      // alert("Failed to generate story. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        const updatedImages = [...uploadedImages, imageData];
        setUploadedImages(updatedImages);
        localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid JPEG or PNG image.");
    }
  };

  const removeUploadedImage = (index: number) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
    localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
  };

  // Merge default list with uploaded images + a "plus" button
  const listWithPlus = [
    ...listCoin,
    ...uploadedImages.map((image, index) => ({
      name: `uploaded-${index}`,
      image,
      storyline: "Write your storyline here...",
      style: "Insert your comic style here...",
    })),
    {
      name: "plus",
      image: "/assets/images/landing/btn_plus.png",
      storyline: "",
      style: "",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-monumenExtended text-white mb-6">
        LIST OF CHARACTER
      </h1>

      {/* Scrollable container for all characters */}
      <div className="h-[16rem] overflow-y-auto overflow-x-hidden">
        {/* Character grid */}
        <div className="grid grid-cols-8 gap-7 mr-1">
          {listWithPlus.map((coin, index) => {
            // If "plus" coin => show the "Add new character" button
            if (coin.name === "plus") {
              return (
                <button
                  key={index}
                  className="aspect-square bg-transparent border-[2.44px] border-[#FA8BFF] h-[6.5rem] 
                             border-dashed border-purple-900/50 rounded-lg 
                             flex items-center justify-center 
                             hover:bg-purple-900/10 transition-colors"
                  aria-label="Add new character"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {/* Example icon (e.g. Lucide's Plus). Replace as needed. */}
                  <Plus className="w-14 h-14 text-[#FA8BFF]" />
                </button>
              );
            }

            // Otherwise, it's either a default coin or an uploaded image
            return (
              <div
                key={index}
                className={`group relative aspect-square bg-transparent border-[2.44px] 
                           ${
                             selectedCharacter === coin.name
                               ? "border-[#FA8BFF]"
                               : "border-[#FA8BFF]/60 hover:border-[#FA8BFF]"
                           } h-[6.5rem] rounded-lg overflow-hidden flex items-center justify-center`}
              >
                <button
                  className={`absolute inset-0 group-hover:opacity-100 
                    ${
                      selectedCharacter === coin.name
                        ? "opacity-100"
                        : "opacity-80"
                    }`}
                  onClick={() => {
                    setSelectedCharacter(coin.name);
                    if (coin.name.startsWith("uploaded-")) {
                      sendImageToAPI(coin.image);
                    } else {
                      props.setDraftPromptB(coin.storyline);
                      props.setDraftPromptA(coin.style);
                    }
                  }}
                >
                  {coin.name.startsWith("uploaded-") ? (
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      className="object-cover w-full h-full rounded-md"
                      width={500}
                      height={500}
                    />
                  ) : (
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      className="object-contain w-full h-full"
                      width={500}
                      height={500}
                    />
                  )}
                </button>

                {/* X button for removing uploaded images */}
                {coin.name.startsWith("uploaded-") && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeUploadedImage(index - listCoin.length);
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white 
                               rounded-full w-4 h-4 text-xs flex items-center justify-center"
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}

          {/* Hidden file input for uploading images */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/jpeg,image/png"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      {/* Simple Alert Component */}
      {isError && (
        <div
          className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm",
            "p-4"
          )}
        >
          <div
            className={cn(
              "bg-[#1A1A1A] border border-[#2C2C2C] text-white px-6 py-4 rounded-lg relative",
              "max-w-md w-full shadow-2xl",
              "transform transition-all duration-300 ease-in-out"
            )}
            role="alert"
          >
            <button
              onClick={() => setIsError(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <strong className="font-bold text-lg mb-2 text-[#FDDAFF]">Information</strong>
              <span className="text-center text-gray-300">
                Feature Coming Soon 🔥
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
