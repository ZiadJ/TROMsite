<script>
var $ = jQuery;
DFLIP.defaults.allControls = "thumbnail,zoomIn,zoomOut,startPage,altPrev,pageNumber,altNext,endPage,play,share,more,pageMode,sound,download,fullScreen";


var rgxUrlFilter = new RegExp('(youtube.com/watch|youtu.be/|vimeo.com/|player.vimeo.com/|.mp4$|.gif$|.jpg$|.jpeg$|.gif$|.png$)');
jQuery('body').on('mouseenter', 'a', function () {
  if (rgxUrlFilter.test(this.href)) {
    jQuery(this).off('click').fancybox().on('click', function () {
      jQuery('.fancybox-container').appendTo('.df-fullscreen');
    });
  }
});


DFLIP.defaults.onFlip = function(flipbook){
flipbook.container.addClass("link-highlight");
   setTimeout(function(){
     // toggle back after 1 second
     flipbook.container.removeClass("link-highlight");
   },2000);
//isec can be used from delay
}


</script>
