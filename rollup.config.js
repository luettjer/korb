import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import * as child_process from "child_process";

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  resolve({
    dedupe: ["svelte"]
  }),
];

export default [{
  input: "app/src/renderer/index.ts",
  output: {
    sourcemap: true,
    format: "umd",
    name: "korb",
    file: "dist/renderer/bundle.js"
  },
  plugins: [
    ...plugins, 
    svelte({
      dev: !production,
      css: css => {
        css.write("app/static/svelte.css")
      },
    }),
    typescript(),
    !production && serve()
  ]
}];

function serve() {
  let running = false;

  return {
    writeBundle() {
      if(!running) {
        running = true;
        child_process.spawn("npm", ["run", "start", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  }
}
