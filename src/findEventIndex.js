/**
 * 判断事件名称
 * @param {Array} args 目标数组
 * @param {String|String[]} eventName 目标字符串,目标字符串数组
 * @returns {Number} 目标字符串在数组中的索引,没有找到返回-1
 */
function findEventIndex(args, eventName) {
  if (!args?.[2] || !Array.isArray(args[2])) {
    return -1;
  }
  if (Array.isArray(eventName)) {
    return args[2].findIndex((item) => eventName.some((event) => item.cmdName === event));
  } else if (typeof eventName === "string") {
    return args[2].findIndex((item) => item.cmdName === eventName);
  } else {
    return -1;
  }
}

function findEvent(args, eventName) {
  if (args[2] instanceof Object && args[2]?.cmdName) {
    if (Array.isArray(eventName)) {
      return eventName.includes(args[2].cmdName);
    } else {
      return args[2].cmdName === eventName;
    }
  } else {
    return false;
  }
}

export { findEventIndex, findEvent };
