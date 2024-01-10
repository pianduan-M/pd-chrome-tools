export function getStorageSync(key, initializationValue = "") {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, function (data) {
      let result = data[key];
      if (typeof result === "undefined") {
        result = initializationValue;
      }
      resolve(result);
    });
  });
}

export function setStorageSync(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set({ [key]: value }, function () {
      resolve();
    });
  });
}
