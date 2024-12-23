import {  Encode_Sans_Expanded, Sora } from "next/font/google";
import localFont from "next/font/local";


export const encodeSansExpanded = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-encodeSansExpanded",
});
export const sora = Sora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sora",
});

// 

// export const komika = localFont({
//   src: "../fonts/Komika-Hand/Komika-Hand.woff2",
//   variable: "--font-komika",
// });

export const cabinetgrotesk = localFont({
  src: "../fonts/Cabinet-Grotesk/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
});
export const monumentextended = localFont({
  src: "../fonts/Monumen-Extended/MonumentExtended-Regular.otf",
  variable: "--font-monument-extended",
});
export const extended = localFont({
  src: "../fonts/Extended/extended.ttf",
  variable: "--font-extended",
});
export const nunito = localFont({
  src: "../fonts/Nunito/Nunito.ttf",
  variable: "--font-nunito",
});

export const actionman = localFont({
  src: "../fonts/Action-Man/Action-Man.woff2",
  variable: "--font-action-man",
});

// export const karantula = localFont({
//   src: "../fonts/Karantula/Karantula.woff2",
//   variable: "--font-karantula",
// });

// export const manoskope = localFont({
//   src: "../fonts/Manoskope/MANOSKOPE-Bold.woff2",
//   variable: "--font-manoskope",
// });

// export const paeteround = localFont({
//   src: "../fonts/Paete-Round/Paete-Round.woff2",
//   variable: "--font-paete-round",
// });

// export const qarmic = localFont({
//   src: "../fonts/Qarmic-Sans/Qarmic-Sans-Abridged.woff2",
//   variable: "--font-qarmic-sans",
// });

// export const archrival = localFont({
//   src: "../fonts/SF-Arch-Rival/SF-Arch-Rival.woff2",
//   variable: "--font-sf-arch-rival",
// });

// export const cartoonist = localFont({
//   src: "../fonts/SF-Cartoonist-Hand/SF-Cartoonist-Hand.woff2",
//   variable: "--font-sf-cartoonist-hand",
// });

// export const toontime = localFont({
//   src: "../fonts/SF-Toontime/SF-Toontime.woff2",
//   variable: "--font-sf-toontime",
// });

// export const vtc = localFont({
//   src: "../fonts/VTC-Letterer-Pro/VTC-Letterer-Pro.woff2",
//   variable: "--font-vtc-letterer-pro",
// });

// export const digitalstrip = localFont({
//   src: "../fonts/DigitalStripBB/DigitalStripBB_Reg.woff2",
//   variable: "--font-digital-strip-bb",
// });

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// If loading a variable font, you don"t need to specify the font weight
export const fonts = {
  // indieflower,
  // thegirlnextdoor,
  // komika,
  actionman,
  // karantula,
  // manoskope,
  cabinetgrotesk,
  // paeteround,
  // qarmic,
  //  archrival,
  // cartoonist,
  // toontime,
  // vtc,
  // digitalstrip,
  monumentextended,
  encodeSansExpanded,
  sora,
  extended,
  
  nunito,
};

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// If loading a variable font, you don"t need to specify the font weight
export const fontList = Object.keys(fonts);

export type FontName = keyof typeof fonts;

export const defaultFont = "cartoonist" as FontName;

export const classNames = Object.values(fonts).map((font) => font.className);

export const className = classNames.join(" ");

export type FontClass =
  // | "font-indieflower"
  // | "font-thegirlnextdoor"
  // | "font-komika"
  | "font-actionman"
  // | "font-karantula"
  // | "font-manoskope"
  // | "font-paeteround"
  // | "font-qarmic"
  // | "font-archrival"
  // | "font-cartoonist"
  // | "font-toontime"
  // | "font-vtc"
  | "font-monument-extended"
  | "font-encodeSansExpanded"
  | "font-sora"
  | "font-extended"
  | "font-digitalstrip";
