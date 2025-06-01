import init, { hello } from "./pkg/wasm_hello.js";

async function run() {
  await init();
  document.getElementById("run").onclick = () => {
    document.getElementById("output").textContent = hello();
  };
}

run();