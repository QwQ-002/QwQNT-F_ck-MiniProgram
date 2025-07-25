import { replaceMiniAppArk } from "./replaceMiniAppArk.js";
const log = (...args) => {
  if (global.cacheLogs) {
    global.cacheLogs.push(args);
  }
  console.log(...args);
};

log("替换小程序卡片插件激活");

function onBrowserWindowCreated(window) {
  try {
    proxySend(window);
  } catch (err) {
    log("出现错误" + err.message);
  }
  return window;
}

function proxySend(window) {
  // 复写并监听ipc通信内容
  const originalSend = window.webContents.send;
  window.webContents.send = (...args) => {
    try {
      replaceMiniAppArk(args);
    } finally {
      originalSend.call(window.webContents, ...args);
    }
  };
}

if (global.qwqnt) {
  qwqnt.main.hooks.whenBrowserWindowCreated.on(onBrowserWindowCreated);
}

module.exports = { onBrowserWindowCreated };
