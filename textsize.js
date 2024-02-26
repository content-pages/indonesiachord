$(function(){
    $(&#39;a&#39;).click(function(){
    var ourText = $(&#39;.post-body&#39;);
    var currFontSize = ourText.css(&#39;fontSize&#39;);
    var finalNum = parseFloat(currFontSize, 10);
    var stringEnding = currFontSize.slice(-2);
    if(this.id == &#39;largesize&#39;) {
    finalNum *= 1.1;
    }
    else if (this.id == &#39;smallsize&#39;){
    finalNum /=1.1;
    }
    else if (this.id == &#39;normalsize&#39;){
    finalNum =16;
    }
    ourText.animate({fontSize: finalNum + stringEnding},500);
    });
});
