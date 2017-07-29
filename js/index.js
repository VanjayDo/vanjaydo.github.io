var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function (e) {
    input.focus();
});

input.on('keyup', function (e) {
    $('.new-output').text(input.val());
    // console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function (e) {
    e.preventDefault();
    // var val = $(this).children($('.404-input')).val().toLowerCase();
    var val=$('.404-input').val().toLowerCase();
    var href;
    if (val === 'back') {
        showKittens();
    } else {
        resetForm();
    }
});

function resetForm(withKittens) {
    var message = "Sorry that command is not recognized."
    var input = $('.404-input');

    $('.new-output').removeClass('new-output');
    input.val('');
    $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

    $('.new-output').velocity(
        'scroll'
    ), {duration: 100}
}

function showKittens() {
    var parent = document.body;
    var part1 = document.getElementById("part1");
    parent.removeChild(part1);
    document.styleSheets[0].insertRule('body:before{content:""}',21);
    document.styleSheets[0].insertRule('body:after{content:""}',22);
    history.back();

    // 打印
    // $('.terminal').append("<div class="kittens">" +
    //     "<p class="prompt">bbbbbbbb</p>" +
    //     "<p class="prompt">b::::::b                                                  kkkkkkkk</p>" +
    //     "<p class="prompt">b::::::b                                                  k::::::k</p>" +
    //     "<p class="prompt">b::::::b                                                  k::::::k</p>" +
    //     "<p class="prompt"> b:::::b                                                  k::::::k</p>" +
    //     "<p class="prompt"> b:::::bbbbbbbbb      aaaaaaaaaaaaa       cccccccccccccccc k:::::k    kkkkkkk</p>" +
    //     "<p class="prompt"> b::::::::::::::bb    a::::::::::::a    cc:::::::::::::::c k:::::k   k:::::k</p>" +
    //     "<p class="prompt"> b::::::::::::::::b   aaaaaaaaa:::::a  c:::::::::::::::::c k:::::k  k:::::k</p>" +
    //     "<p class="prompt"> b:::::b    b::::::b    aaaaaaa:::::a c::::::c     ccccccc k::::::k:::::k</p>" +
    //     "<p class="prompt"> b:::::b     b:::::b  aa::::::::::::a c:::::c              k:::::::::::k</p>" +
    //     "<p class="prompt"> b:::::b     b:::::b a::::aaaa::::::a c:::::c              k:::::::::::k</p>" +
    //     "<p class="prompt"> b:::::b     b:::::ba::::a    a:::::a c::::::c     ccccccc k::::::k:::::k</p>" +
    //     "<p class="prompt"> b:::::bbbbbb::::::ba::::a    a:::::a c:::::::cccccc:::::ck::::::k k:::::k</p>" +
    //     "<p class="prompt"> b::::::::::::::::b a:::::aaaa::::::a  c:::::::::::::::::ck::::::k  k:::::k</p>" +
    //     "<p class="prompt"> b:::::::::::::::b   a::::::::::aa:::a  cc:::::::::::::::ck::::::k   k:::::k</p>" +
    //     "<p class="prompt"> bbbbbbbbbbbbbbbb     aaaaaaaaaa  aaaa    cccccccccccccccckkkkkkkk    kkkkkkk</p>" +
    //     "<p class="prompt">                                                                             </p>" +
    //     "<p class="prompt">         nnnn  nnnnnnnn        ooooooooooo   wwwwwww           wwwww           wwwwwww</p>" +
    //     "<p class="prompt">         n:::nn::::::::nn    oo:::::::::::oo  w:::::w         w:::::w         w:::::w</p>" +
    //     "<p class="prompt">         n::::::::::::::nn  o:::::::::::::::o  w:::::w       w:::::::w       w:::::w</p>" +
    //     "<p class="prompt">         nn:::::::::::::::n o:::::ooooo:::::o   w:::::w     w:::::::::w     w:::::w</p>" +
    //     "<p class="prompt">           n:::::nnnn:::::n o::::o     o::::o    w:::::w   w:::::w:::::w   w:::::w</p>" +
    //     "<p class="prompt">           n::::n    n::::n o::::o     o::::o     w:::::w w:::::w w:::::w w:::::w</p>" +
    //     "<p class="prompt">           n::::n    n::::n o::::o     o::::o       w:::::::::w     w:::::::::w</p>" +
    //     "<p class="prompt">           n::::n    n::::n o:::::ooooo:::::o        w:::::::w       w:::::::w</p>" +
    //     "<p class="prompt">           n::::n    n::::n o:::::::::::::::o         w:::::w         w:::::w</p>" +
    //     "<p class="prompt">           n::::n    n::::n  oo:::::::::::oo           w:::w           w:::w</p>" +
    //     "<p class="prompt">           nnnnnn    nnnnnn    ooooooooooo              www             www</p>" +
    //     "<p class="prompt">                                                                             </p>" +
    //     "<p class="prompt">                                                                             </p>" +
    //     "<p class="prompt">                                                                             </p>" +
    //     "<p class="prompt">                                                              </p></div>");

    // var lines = $('.kittens p');
    // $.each(lines, function (index, line) {
    //     setTimeout(function () {
    //         $(line).css({
    //             "opacity": 1
    //         });
    //
    //         textEffect($(line))
    //     }, index * 100);
    // });
    //
    // $('.new-output').velocity(
    //     'scroll'
    // ), {duration: 100}
    //
    // setTimeout(function () {
    //     var gif;
    //
    //     $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kittens', function (result) {
    //         gif = result.data.image_url;
    //         $('.terminal').append('<img class="kitten-gif" src="' + gif + '" "="">');
    //         resetForm(true);
    //     });
    // }, (lines.length * 100) + 1000);
}

function textEffect(line) {
    var alpha = [';', '.', ',', ':', ';', '~', '`'];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);

    var emptyString = copyString.map(function (el) {
        return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    })

    emptyString = shuffle(emptyString);

    $.each(copyString, function (i, el) {
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);

        setTimeout(function () {
            fromUnderscore(copyString, splitString, newChar, line);
        }, i * animationSpeed);
    })
}

function toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
}


function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};