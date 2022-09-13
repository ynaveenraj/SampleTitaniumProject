var win = Ti.UI.createWindow({
    title: 'Click window to test',
    backgroundColor: 'white'
});

win.addEventListener('click', function (e) {
    var view = Titanium.UI.createView({
        backgroundColor: 'red',
        width: 250,
        height: 100
        // ,
        // bottom: 30
    });
    var label1 = Ti.UI.createLabel({
        color: '#900',
        font: { fontSize: 60 },
        // shadowColor: '#aaa',
        // shadowOffset: { x: 5, y: 5 },
        // shadowRadius: 3,
        // text: 'A simple label',
        // textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        width: 250, height: 100
    });
    var textField = Titanium.UI.createTextField({
        backgroundColor: 'red',
        color: 'white',
        font: { fontSize: 30 },
        width: 250,
        // height: 100,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
        alignment: Titanium.UI.TEXT_ALIGNMENT_LEFT
    });
    // view.add(label1);
    view.add(textField);
    var dialog = Ti.UI.createAlertDialog({
        ok: 'Okay',
        title: 'Enter Barcode',
        androidView: view
    });
    dialog.show();
});
win.open();