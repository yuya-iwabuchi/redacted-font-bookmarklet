(function () {
  const styleId = 'texts-redacted';
  let styleElement = document.getElementById(styleId);
  if (!styleElement) {
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = '@import url(\'https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&display=swap\'); * { font-family: \'Redacted Script\' !important; }';
    document.head.appendChild(styleElement);
  } else {
    document.head.removeChild(styleElement);
  }
})();
