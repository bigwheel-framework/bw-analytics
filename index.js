module.exports = function(ua,domain,bw) {
  if (window && typeof ua === 'string') {
    if (typeof domain !== 'string') {
      router = domain;
      domain = undefined;
    }
  	if (!window.ga) {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    }
    ga('create',ua,domain || 'auto');
    ga('send','pageview');
    bw.on('route',function(data) {
      ga('send', 'pageview', data.path || '/');
    });
  } else {
    console.log('This version of GA is only available in the browser.');
  }
};