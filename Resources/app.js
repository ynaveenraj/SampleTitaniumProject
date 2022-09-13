var win = Ti.UI.createWindow({
    title: 'title',
    backgroundColor: '#fff'
});

var box = Ti.UI.createView({
    backgroundColor: 'red',
    height: '100',
    width: '100'
});
win.add(box);

box.addEventListener('click', function () {
    var matrix = Ti.UI.createMatrix2D();
    matrix = matrix.rotate(180);
    matrix = matrix.scale(2, 2);
    var a = Ti.UI.createAnimation({
        transform: matrix,
        duration: 2000,
        autoreverse: true,
        repeat: 3
    });
    box.animate(a);
});


win.add(box);

win.open();