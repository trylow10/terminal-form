// utils.js
import { CONFIG } from "./config.js";

export function createListFormatter() {
  return new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
}

export function rainbow(string, seed) {
  return lolcat
    .rainbow(
      function (char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
      },
      string,
      seed
    )
    .join("\n");
}

export function renderFiglet(text, term) {
  const cols = term.cols();
  return trim(
    figlet.textSync(text, {
      font: CONFIG.font,
      width: cols,
      whitespaceBreak: true,
    })
  );
}

function trim(str) {
  return str.replace(/[\n\s]+$/, "");
}

export function rand(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}
