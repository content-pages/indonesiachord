$(function () {
  $('a').click(function () {
    var ourText = $('.post-body');
    var currFontSize = ourText.css('fontSize');
    var finalNum = parseFloat(currFontSize, 10);
    var stringEnding = currFontSize.slice(-2);
    if (this.id == 'largesize') {
      finalNum *= 1.1;
    } else if (this.id == 'smallsize') {
      finalNum /= 1.1;
    } else if (this.id == 'normalsize') {
      finalNum = 16;
    }
    ourText.animate({ fontSize: finalNum + stringEnding }, 500);
  });
});
