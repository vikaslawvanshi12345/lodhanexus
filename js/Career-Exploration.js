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
});
