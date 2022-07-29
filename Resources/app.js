// Intent object to launch the application
var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_MAIN,
    // Substitute the correct class name for your application
    className: 'com.titanium.appcelarator.SampleTitaniumProject',
    // Substitue the correct package name for your application
    packageName: 'com.titanium.appcelarator'
});
intent.flags |= Ti.Android.FLAG_ACTIVITY_NEW_TASK;
intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

// Create a PendingIntent to tie together the Activity and Intent
var pending = Titanium.Android.createPendingIntent({
    intent: intent,
    flags: Titanium.Android.FLAG_UPDATE_CURRENT
});

// Create the notification
var notification = Titanium.Android.createNotification({
    // icon is passed as an Android resource ID -- see Ti.App.Android.R.
    icon: Ti.App.Android.R.drawable.my_icon,
    contentTitle: 'Something Happened',
    contentText: 'Click to return to the application.',
    contentIntent: pending
});

// Send the notification.
Titanium.Android.NotificationManager.notify(1, notification);