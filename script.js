function about() {
  var url = prompt("Your wix.com website? : ");

  if (!url.startsWith("https://")) {
    url = "https://" + url;
  }

  (function() {
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.setAttribute('id', 'hd7343f');
    iframe.style.position = 'fixed';
    iframe.style.top = '-50px';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '105%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '999999';
    var win = window.open('about:blank');
    win.document.write(iframe.outerHTML);
    win.document.head.appendChild(script);
    window.close();
  })();
}
