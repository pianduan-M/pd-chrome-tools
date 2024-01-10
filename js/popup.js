import {
  isInterceptCopyKey,
  isClearCodeElNotSelectStyleKey,
} from "/enum/index.js";
import { getStorageSync, setStorageSync } from "/utils/index.js";

function initInterceptCopy() {
  const el = document.getElementById("removeCopy");
  el.addEventListener("change", onInterceptCopyClick);

  function onInterceptCopyClick(e) {
    chrome.tabs.query(
      {
        status: "complete",
      },
      (tabs) => {
        const result = e.target.checked;
        setStorageSync(isInterceptCopyKey, result);

        console.log(result, "result");

        tabs.forEach((tab) => {
          chrome.tabs.sendMessage(tab.id, { info: result });
        });
      }
    );
  }

  async function setElInitValue() {
    const result = await getStorageSync(isInterceptCopyKey, true);
    console.log(result, "result");
    el.checked = result;
  }
  setElInitValue();
}
initInterceptCopy();

function initClearDisableCode() {
  const el = document.getElementById("clearDisableCode");
  el.addEventListener("change", onInterceptCopyClick);

  function onInterceptCopyClick(e) {
    chrome.tabs.query(
      {
        status: "complete",
      },
      (tabs) => {
        const result = e.target.checked;
        setStorageSync(isClearCodeElNotSelectStyleKey, result);

        console.log(result, "result");

        tabs.forEach((tab) => {
          chrome.tabs.sendMessage(tab.id, { info: result });
        });
      }
    );
  }

  async function setElInitValue() {
    const result = await getStorageSync(isClearCodeElNotSelectStyleKey, true);
    el.checked = result;
  }
  setElInitValue();
}

initClearDisableCode();
