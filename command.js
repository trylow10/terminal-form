import { CONFIG, ROOT_DIR, DIRECTORIES, FILES } from "./config.js";
import { createListFormatter, renderFiglet, rand, rainbow } from "./utils.js";

export const COMMAND_DEFINITIONS = {
  help(term) {
    const formatted_list = COMMAND_LIST.map(
      (cmd) => `<white class="command">${cmd}</white>`
    );
    term.echo(
      `<span>List of available commands: ${LIST_FORMATTER.format(
        formatted_list
      )}</span>`
    );
  },

  me(term) {
    const seed = rand(256);
    const figletText = renderFiglet("Trilochan Aryal", term);
    term.echo(`<div class="me-command">${rainbow(figletText, seed)}</div>`);
    term.echo(
      `<div class="me-command">Software Engineer | Kathmandu, Nepal</div>`
    );
    term.echo(
      `<div class="me-command">A full-stack developer experienced in building web applications using JavaScript technologies having experience in React.js, Nodejs and DevOps.</div>`
    );
  },
  ls(term, dir = null) {
    if (dir) {
      if (dir.match(/^~\/?$/)) {
        printHomeContents(term);
      } else if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          term.error("Invalid directory");
        } else {
          const dir = dirs[0];
          term.echo(CONFIG.directories[dir].join("\n"));
        }
      } else if (term.state.currentDir === ROOT_DIR) {
        if (dir in CONFIG.directories) {
          term.echo(CONFIG.directories[dir].join("\n"));
        } else {
          term.error("Invalid directory");
        }
      } else if (dir === "..") {
        printHomeContents(term);
      } else {
        term.error("Invalid directory");
      }
    } else if (term.state.currentDir === ROOT_DIR) {
      printHomeContents(term);
    } else {
      const dir = term.state.currentDir.substring(2);
      term.echo(CONFIG.directories[dir].join("\n"));
    }
  },

  async joke(term) {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await res.json();
    if (data.type == "twopart") {
      term.animation(async () => {
        await term.echo(`Q: ${data.setup}`, {
          delay: 50,
          typing: true,
        });
        await term.echo(`A: ${data.delivery}`, {
          delay: 50,
          typing: true,
        });
      });
    } else if (data.type === "single") {
      term.echo(data.joke, {
        delay: 51,
        typing: true,
      });
    }
  },

  cd(term, dir = null) {
    if (dir === null || (dir === ".." && term.state.currentDir !== ROOT_DIR)) {
      term.state.currentDir = ROOT_DIR;
    } else if (dir.startsWith("~/") && DIRECTORIES.includes(dir.substring(2))) {
      term.state.currentDir = dir;
    } else if (DIRECTORIES.includes(dir)) {
      term.state.currentDir = `${ROOT_DIR}/${dir}`;
    } else {
      term.error("Wrong directory");
    }
  },

  echo(term, ...args) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
};

const LIST_FORMATTER = createListFormatter();
export const COMMAND_LIST = ["clear", ...Object.keys(COMMAND_DEFINITIONS)];

function printHomeContents(term) {
  term.echo(
    DIRECTORIES.map((dir) => `<white class="directory">${dir}</white>`).join(
      "\n"
    )
  );
  // term.echo(
  //   FILES.map((file) => `<white class="command">${file}</white>`).join("\n")
  // );
}
