import { defineShikiSetup } from "@slidev/types";
import { readFileSync } from "node:fs";

export default defineShikiSetup((shiki) => {
  const grammarPath = require.resolve(
    "../../winglang/apps/vscode-wing/syntaxes/wing.tmLanguage.json"
  );
  const myLanguageGrammar = JSON.parse(readFileSync(grammarPath, "utf-8"));
  const myLanguage = {
    id: "wing",
    path: grammarPath,
    scopeName: "source.wing",
    grammar: myLanguageGrammar,
    aliases: ["wing"],
  };

  return {
    theme: {
      dark: 'github-dark',
      light: 'github-light',
    },
    langs: [myLanguage, ...shiki.BUNDLED_LANGUAGES],
  };
});
