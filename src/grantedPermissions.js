// Describes permissions/apis that don't need explicit permissions to work
// This is constructed manually (uuurgh)
module.exports = [
    {
        "android": [ "INTERNET" ],
        "apiName": "",
        "apiURL": "",
        "appType": "hosted",
        "name": "internet",
        "platforms": [
            "Android",
            "Desktop",
            "FxOS"
        ]
    },
    {
        "android": [ "SET_ORIENTATION" ],
        "apiName": "Screen Orientation",
        "apiURL": "https://developer.mozilla.org/en-US/docs/WebAPI/Managing_screen_orientation",
        "appType": "hosted",
        "name": "orientation",
        "platforms": [
            "Android",
            "Desktop",
            "FxOS"
        ]
    },
    {
        "android": [ "VIBRATE" ],
        "apiName": "Vibration",
        "apiURL": "https://developer.mozilla.org/en-US/docs/WebAPI/Vibration",
        "appType": "hosted",
        "name": "vibration",
        "platforms": [
            "Android",
            "Desktop",
            "FxOS"
        ]
    },
];
