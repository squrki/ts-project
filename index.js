import { log, chats } from "./chats.js";
const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    // @ts-ignore
    window.supportAI.enableAutoReply();
});
log(chats);
// function main(): void {
//   const projectName = "support.ai";
//   console.log(welcome(projectName));
// }
// function welcome(name: string) {
//   return "Hello, " + name.toLowerCase();
// }
// main();
