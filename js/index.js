var inputReady=!0,input=$(".404-input");function resetForm(t){var n=$(".404-input");$(".new-output").removeClass("new-output"),n.val(""),$(".terminal").append('<p class="prompt">Sorry that command is not recognized.</p><p class="prompt output new-output"></p>'),$(".new-output").velocity("scroll")}function showKittens(){var t=document.body,n=document.getElementById("part1");t.removeChild(n),document.styleSheets[0].insertRule('body:before{content:""}',21),document.styleSheets[0].insertRule('body:after{content:""}',22),1<history.length?history.back():window.location.href="http://blog.safeandsound.cn"}function textEffect(e){var n=[";",".",",",":",";","~","`"],o=0,r=e.text().split(""),u=r.slice(0),i=u.map(function(t){return[n[Math.floor(Math.random()*n.length)],o++]});i=shuffle(i),$.each(u,function(t,n){var o=i[t];toUnderscore(u,e,o),setTimeout(function(){fromUnderscore(u,r,o,e)},10*t)})}function toUnderscore(t,n,o){t[o[1]]=o[0],n.text(t.join(""))}function fromUnderscore(t,n,o,e){t[o[1]]=n[o[1]],e.text(t.join(""))}function shuffle(t){for(var n,o,e=t.length;e;n=Math.floor(Math.random()*e),o=t[--e],t[e]=t[n],t[n]=o);return t}input.focus(),$(".container").on("click",function(t){input.focus()}),input.on("keyup",function(t){$(".new-output").text(input.val())}),$(".four-oh-four-form").on("submit",function(t){t.preventDefault();var n=$(".404-input").val().toLowerCase();"back"===n?showKittens():"game"===n?window.location.href="game.html":resetForm()});