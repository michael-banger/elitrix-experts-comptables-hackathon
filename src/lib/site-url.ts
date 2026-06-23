const productionUrl = "https://elitrix-experts-comptables-hackatho.vercel.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl).replace(/\/$/, "");
