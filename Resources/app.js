var win = Ti.UI.createWindow({
    backgroundColor : "green"
});

var img = Ti.UI.createImageView({
    image: "tom.png"
});

win.add(img);

// img.animate({
//     left: 0,
//     top: 0,
//     duration: 500,
//     curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
// });

var a = Ti.UI.createAnimation({
    opacity: 0,
    duration: 2000
});
var b = Ti.UI.createAnimation({
    opacity: 1,
    duration: 2000
});
img.addEventListener('click', function () {
    img.animate(a, function () {
        img.animate(b);
    });
});

win.open();