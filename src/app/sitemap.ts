import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://elitrix-experts.fr"; return ["","/services","/profils","/expert-comptable-yvelines","/ressources","/guide-forme-juridique-2026","/rendez-vous"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority:path===""?1:.7})); }
