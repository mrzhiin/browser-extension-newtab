import { UAParser } from "ua-parser-js";

const DOMContentBefore = () => {
  const title = chrome.i18n.getMessage("title") || "New Tab";

  document.write(`
  <title>${title}</title>`);

  const parser = new UAParser();
  const browser = parser.getBrowser();

  let color = "";

  switch (browser.name) {
    case "Edge":
      color = "#2d2d2d";
      break;
    case "Chrome":
      color = "#323639";
      break;
    default:
      color = "#192227";
      break;
  }

  document.write(`
  <style>
    @media (prefers-color-scheme: dark) {
      body {
        background: ${color};
      }
    }
  </style>
  `);
};

DOMContentBefore();
