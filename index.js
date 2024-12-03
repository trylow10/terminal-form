import { CONFIG, ROOT_DIR, DIRECTORIES } from "./config.js";
import { COMMAND_DEFINITIONS } from "./command.js";

$(document).ready(function () {
  const $terminalContainer = $("#terminal-container");

  figlet.defaults({ fontPath: `https://cdn.jsdelivr.net/npm/figlet/fonts` });
  figlet.preloadFonts([CONFIG.font], ready);

  function prompt() {
    return `<green>${this.state.currentDir || ROOT_DIR}</green> `;
  }

  const term = $terminalContainer.terminal(
    // Split the command string into an array where the first element is the command and the rest are arguments
    function (command, term) {
      const [cmd, ...args] = command.split(" ");
      if (COMMAND_DEFINITIONS[cmd]) {
        COMMAND_DEFINITIONS[cmd](term, ...args);
      } else {
        term.error(`Unknown command: ${cmd}`);
      }
    },
    {
      greetings: false,
      checkArity: false,
      execHash: true,
      prompt,
      completion(string) {
        const { name, rest } = $.terminal.parse_command(this.get_command());
        if (["cd", "ls"].includes(name)) {
          if (rest.startsWith("~/")) {
            return DIRECTORIES.map((dir) => `~/${dir}`);
          }
          return DIRECTORIES;
        }
        return Object.keys(COMMAND_DEFINITIONS);
      },
    }
  );

  if (!term.state) {
    term.state = { currentDir: ROOT_DIR };
  }

  term.pause();

  term.on("click", ".command", function () {
    const command = $(this).text();
    term.exec(command, { typing: true, delay: 50 });
  });

  term.on("click", ".directory", function () {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`, { typing: true, delay: 50 });
  });

  function ready() {
    term
      .echo(
        "<white>Welcome to Tsh, the friendly interactive shell\nType <green>help</green> for instructions on how to use Tsh</white> \n"
      )
      .resume();
  }
});
