import { replaceMiniAppArk } from "./replaceMiniAppArk.js";
const log = (...args) => {
  if (global.cacheLogs) {
    global.cacheLogs.push(args);
  }
  console.log("[替换小程序卡片]", ...args);
};

try {
  if (global.IpcInterceptor) {
    IpcInterceptor.onIpcSend(replaceMiniAppArk);
    log("已启用");
  } else {
    throw new Error("未找到 IpcInterceptor，请安装前置插件 QWQNT-IpcInterceptor");
  }
} catch (err) {
  log("出现错误：" + err.message);
}
