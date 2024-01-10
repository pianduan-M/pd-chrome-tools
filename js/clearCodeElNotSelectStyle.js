function clearCodeElNotSelectStyle() {
  function action(el) {
    const styleValue = "auto";
    el.style.userSelect = styleValue;
    el.style["-ms-user-select"] = styleValue;
    el.style["-moz-user-select"] = styleValue;
    el.style["-khtml-user-select"] = styleValue;
    el.style["-webkit-user-select"] = styleValue;
    el.style["-webkit-touch-callout"] = styleValue;
  }

  const codeList = document.querySelectorAll("code");
  const preList = document.querySelectorAll("pre");

  codeList.forEach((el) => {
    action(el);
  });
  preList.forEach((el) => {
    action(el);
  });
}

clearCodeElNotSelectStyle();
