import packageJson from "../package.json" with { type: "json" };

const baseUrl = "https://matt123miller.dev";
const github = "https://github.com/matt123miller";
const siteRepo = `${github}/matt123miller.dev`;
const twitter = "https://twitter.com/matt123miller";
const mastodon = "https://hachyderm.io/@m11r";
const linkedin = "https://www.linkedin.com/in/matt123miller/";
const email = "matt@m11r.dev";

export const links = {
  github,
  siteRepo,
  twitter,
  mastodon,
  linkedin,
  email,
  baseUrl,
};

export default {
  links,
  description: packageJson.description,
  name: packageJson.name,
};
