import {
  isInterceptCopyKey,
  isClearCodeElNotSelectStyleKey,
} from "/enum/index.js";
import { getStorageSync, setStorageSync } from "/utils/index.js";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // 在页面加载完成时，changeInfo.status 将是 "complete"
  if (changeInfo.status === "complete") {
    if (tab.url.includes("chrome")) return;

    executeInterceptCopy(tab);
    executeClearCodeElNotSelectStyle(tab);
  }
});

async function executeInterceptCopy(tab) {
  const result = await getStorageSync(isInterceptCopyKey, true);
  if (result) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["js/interceptCopyEvent.js"],
    });
  }
}

async function executeClearCodeElNotSelectStyle(tab) {
  const result = await getStorageSync(isClearCodeElNotSelectStyleKey, true);
  if (result) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["js/clearCodeElNotSelectStyle.js"],
    });
  }
}
