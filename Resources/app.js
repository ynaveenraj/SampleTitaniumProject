Ti.UI.backgroundColor = 'white';

var win1 = Ti.UI.createWindow({
    backgroundColor: 'blue'
});

var win2 = Ti.UI.createWindow({
    backgroundColor: 'yellow'
});

var activityIndicator = Ti.UI.createActivityIndicator({
    color: 'green',
    message: 'Loading ...',
    style: Ti.UI.ActivityIndicatorStyle.BIG_DARK,
    top: 10,
    left: 10,
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE
});

// The activity indicator must be added to a window or view for it to appear
win2.add(activityIndicator);

// eventListeners must always be loaded before the event is likely to fire
// hence, the open() method must be positioned before the window is opened
win2.addEventListener('open', function (e) {
    activityIndicator.show();
    // do some work that takes 6 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function () {
        e.source.close();
        activityIndicator.hide();
    }, 6000);
});

win1.open();
win2.open();