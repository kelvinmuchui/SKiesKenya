$(document).ready(function(){

  $.rawnet.cookieLaw({
    siteName: 'Portico',
    policyUrl: 'http://www.wshlimited.com/privacy-policy.pdf',
    target: '_blank'
  });
  
  $(".scroll-pane").jScrollPane({showArrows: true, scrollbarWidth: 17});

  $('.video_link a').fancybox({
    width: 480,
    height: 261,
    type: 'iframe',
    href: '/swf/play.html',
    overlayOpacity: 0.6,
    overlayColor: '#000'
  });
});