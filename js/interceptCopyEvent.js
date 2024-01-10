function interceptCopyAction(e) {
  e.stopPropagation();
  console.log("拦截 copy 事件");
}

function startInterceptCopy() {
  document.body.addEventListener("copy", interceptCopyAction, {
    capture: true,
  });
}

function stopInterceptCopy() {
  document.body.removeEventListener("copy", interceptCopyAction, {
    capture: true,
  });
  console.log("停止拦截 copy 事件");
}

startInterceptCopy();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const result = JSON.parse(request.info);

  if (result) {
    startInterceptCopy();
  } else {
    stopInterceptCopy();
  }

  // sendResponse("我收到了你的情书，popup~");
});
