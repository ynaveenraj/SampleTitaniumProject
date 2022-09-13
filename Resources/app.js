var win = Ti.UI.createWindow({
    backgroundColor: "yellow"
});

var img = Titanium.UI.createView({
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 100
});

win.add(img);

// img.animate({
//     left: 0,
//     top: 0,
//     duration: 500,
//     curve: Titanium.UI.ANIMATION_CURVE_EASE_IN
// });

var a = Ti.UI.createAnimation({
    backgroundColor: 'red',
    duration: 250
});
var b = Ti.UI.createAnimation({
    backgroundColor: 'white',
    duration: 250
});
img.addEventListener('click', function () {
    img.animate(a, function () {
        img.animate(b, function () {
            img.animate(a, function () {
                img.animate(b, function () {
                    img.animate(a);
                });
            });
        });
    });
});

win.open();