# Redacted Font Bookmarklet

[Bookmarklet](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) to toggle overriding the page's font with [Redacted Script Fonts](https://github.com/christiannaths/redacted-font).

Add <a title="Redact" href="(function(){const styleId='texts-redacted';let styleElement=document.getElementById(styleId);if(!styleElement){const styleElement=document.createElement('style');styleElement.id=styleId;styleElement.textContent='@import url(\'https://fonts.googleapis.com/css2?family=Redacted+Script:wght@300;400;700&display=swap\'); * { font-family: \'Redacted Script\' !important; }';document.head.appendChild(styleElement)}else{document.head.removeChild(styleElement)}})()"> this link</a> to your bookmark and click on websites toggle the script:
