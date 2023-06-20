var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('SiteSearch1');
   window.open('sitesearch1-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
function displaylightbox(url, options)
{
   options.items = { src: url };
   options.type = 'iframe';
   $.magnificPopup.open(options);
}
$(document).ready(function()
{
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("#headerPanelMenu").panel({animate: true, animationDuration: 200, animationEasing: 'linear', dismissible: true, display: 'overlay', position: 'left', toggle: true});
   $("#headerPanelMenu_markup ul li a").click(function(event)
   {
       $.panel.hide($("#headerPanelMenu_panel"));
   });
   $('#InlineFrame1').magnificPopup(
   {
      type: 'iframe',
         dgfd
   });
   $('#InlineFrame2').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame3').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame4').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame5').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame6').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame7').magnificPopup(
   {
      type: 'iframe'
   });
   $('#InlineFrame8').magnificPopup(
   {
      type: 'iframe'
   });
   searchParseURL('SiteSearch1');
});
