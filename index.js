const font = "Georgi16";

figlet.defaults({ fontPath: `https://cdn.jsdelivr.net/npm/figlet/fonts` });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const directories = {
  social: [
    "",
    "<white>Contact Me</white>",
    [
      ["aryaltrylowchan@gmail.com", "mailto:aryaltrylowchan@gmail.com"],
      ["(+977) 9861574412", "(+977) 9861574412"],
      ["Portfolio", "atrilochan.com.np"],
      ["Github", "https://github.com/trylow10/"],
      ["Linkedin", "https://www.linkedin.com/in/trilochanaryal/"],
    ]
      .map(([name, url]) => {
        return `<a href="${url}">${name}</a>`;
      })
      .join(" | "),
    "",
  ],
  education: [
    "",
    "<white>education</white>",

    '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kielce University of Technology</a> <yellow>"Computer Science"</yellow> 2002-2007 / 2011-2014',
    '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">Post-secondary</a> Electronic School <yellow>"Computer Systems"</yellow> 2000-2002',
    '* Electronic <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">Technikum</a> with major <yellow>"RTV"</yellow> 1995-2000',
    "",
  ],
  projects: [
    "",
    "<white>Open Source projects</white>",
    [
      [
        "jQuery Terminal",
        "https://terminal.jcubic.pl",
        "library that adds terminal interface to websites",
      ],
      [
        "LIPS Scheme",
        "https://lips.js.org",
        "Scheme implementation in JavaScript",
      ],
      ["Sysend.js", "https://jcu.bi/sysend", "Communication between open tabs"],
      ["Wayne", "https://jcu.bi/wayne", "Pure in browser HTTP requests"],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
    }),
    "",
  ].flat(),
  skills: [
    "",
    "<white>languages</white>",

    ["JavaScript", "TypeScript", "Python", "SQL", "PHP", "Bash"].map(
      (lang) => `* <yellow>${lang}</yellow>`
    ),
    "",
    "<white>libraries</white>",
    ["React.js", "Redux", "Jest"].map((lib) => `* <green>${lib}</green>`),
    "",
    "<white>tools</white>",
    ["Docker", "git", "GNU/Linux"].map((lib) => `* <blue>${lib}</blue>`),
    "",
  ].flat(),
};

const dirs = Object.keys(directories);

const root = "~";
let cwd = root;

// not every command needs to be binary
// we picked those three that works more like real programs
const files = ["joke"];

function prompt() {
  return `<green>~</green> `;
}

function print_home() {
  term.echo(
    dirs
      .map((dir) => {
        return `<white class="directory">${dir}</white>`;
      })
      .join("\n")
  );
  term.echo(
    files
      .map((file) => {
        return `<whitels class="command">${file}</whitels>`;
      })
      .join("\n")
  );
}

const commands = {
  help() {
    term.echo(`List of available commands: ${help}`);
  },
  me() {
    const seed = rand(256);
    term.echo(() => rainbow(render("Trilochan Aryal\n"), seed));
    term.echo(() => "Software Engineer | Kathmandu, Nepal\n");
    term.echo(
      () =>
        "A full-stack developer experienced in building web applications using JavaScript technologies having experience in React.js, Nodejs and DevOps.\n"
    );
  },
  ls(dir = null) {
    if (dir) {
      if (dir.match(/^~\/?$/)) {
        print_home();
      } else if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          this.error("Invalid directory");
        } else {
          const dir = dirs[0];
          this.echo(directories[dir].join("\n"));
        }
      } else if (cwd === root) {
        if (dir in directories) {
          this.echo(directories[dir].join("\n"));
        } else {
          this.error("Invalid directory");
        }
      } else if (dir === "..") {
        print_home();
      } else {
        this.error("Invalid directory");
      }
    } else if (cwd === root) {
      print_home();
    } else {
      const dir = cwd.substring(2);
      this.echo(directories[dir].join("\n"));
    }
  },
  async joke() {
    // we use programming jokes so it fit better developer portfolio
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await res.json();
    if (data.type == "twopart") {
      // this allow to create sequence of typing animations
      this.animation(async () => {
        // as said before in every function, passed directly
        // to terminal, you can use `this` object
        // to reference terminal instance
        await this.echo(`Q: ${data.setup}`, {
          delay: 50,
          typing: true,
        });
        await this.echo(`A: ${data.delivery}`, {
          delay: 50,
          typing: true,
        });
      });
    } else if (data.type === "single") {
      this.echo(data.joke, {
        delay: 51,
        typing: true,
      });
    }
  },
  cd(dir = null) {
    if (dir === null || (dir === ".." && cwd !== root)) {
      cwd = root;
    } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
      cwd = dir;
    } else if (dirs.includes(dir)) {
      cwd = root + "/" + dir;
    } else {
      this.error("Wrong directory");
    }
  },
  echo(...args) {
    if (args.length > 0) {
      term.echo(args.join(" "));
    }
  },
};

// clear is default command that you can turn off with an option
const command_list = ["clear"].concat(Object.keys(commands));
const formatted_list = command_list.map(
  (cmd) => `<white class="command">${cmd}</white>`
);
const help = formatter.format(formatted_list);

const re = new RegExp(`^\s*(${command_list.join("|")})(\s?.*)`);

$.terminal.new_formatter([
  re,
  function (_, command, args) {
    return `<white class="command">${command}</white><aquamarine>${args}</aquamarine>`;
  },
]);

// $.terminal.xml_formatter.tags.blue = (attrs) => {
//   return `[[;#55F;;${attrs.class}]`;
// };
// $.terminal.xml_formatter.tags.green = (attrs) => {
//   return `[[;#44D544;;${attrs.class}]`;
// };

const term = $("body").terminal(commands, {
  greetings: false,
  checkArity: false,
  completion(string) {
    // in every function we can use this to reference term object
    const { name, rest } = $.terminal.parse_command(this.get_command());
    if (["cd", "ls"].includes(name)) {
      if (rest.startsWith("~/")) {
        return dirs.map((dir) => `~/${dir}`);
      }
      if (cwd === root) {
        return dirs;
      }
    }
    return Object.keys(commands);
  },
  execHash: true,
  prompt,
});

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

function rainbow(string, seed) {
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

function rand(max) {
  return Math.floor(Math.random() * (max + 1));
}

function render(text) {
  const cols = term.cols();
  return trim(
    figlet.textSync(text, {
      font: font,
      width: cols,
      whitespaceBreak: true,
    })
  );
}

function trim(str) {
  return str.replace(/[\n\s]+$/, "");
}

function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}
