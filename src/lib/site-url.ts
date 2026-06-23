const githubPagesUrl = "https://michael-banger.github.io/elitrix-experts-comptables-hackathon";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? githubPagesUrl).replace(/\/$/, "");
