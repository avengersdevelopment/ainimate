export const SITE_CONFIG = {
  // url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  title: "AINIMATE",
  description: "",
  twitterHandle: "AINIMATE",
  caUrl: process.env.NEXT_PUBLIC_PUMP_FUN_URL ?? "",
  socialLinks: {
    AINIMATE: process.env.NEXT_PUBLIC_X__URL ?? "",
  },
} as const;
