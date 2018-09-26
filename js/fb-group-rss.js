$(document).ready(function() {
$.getFeed({
   url: 'wallflux.com/feed/414072648646999?hl=fr_FR ',
   success: function(feed) {
     console.log(feed);
   }
 });
});