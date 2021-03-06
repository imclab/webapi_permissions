// An object with the Android permissions and its Web API equivalent (sort of)
// Got the initial data visiting http://developer.android.com/reference/android/Manifest.permission.html
// running this in the console: obj = {}; Array.prototype.slice.call(document.body.querySelectorAll('#constants tr td:nth-child(2) a')).forEach(function(a) { obj[a.innerHTML] = ''; }); console.log(JSON.stringify(obj, null, 4))
// and copying the output here
// then editing to find the corresponding API name from here https://developer.mozilla.org/en-US/docs/WebAPI

module.exports = {
    "ACCESS_CHECKIN_PROPERTIES": "",
    "ACCESS_COARSE_LOCATION": "geolocation",
    "ACCESS_FINE_LOCATION": "geolocation",
    "ACCESS_LOCATION_EXTRA_COMMANDS": "",
    "ACCESS_MOCK_LOCATION": "",
    "ACCESS_NETWORK_STATE": "wifi-manage",
    "ACCESS_SURFACE_FLINGER": "",
    "ACCESS_WIFI_STATE": "wifi-manage",
    "ACCOUNT_MANAGER": "",
    "ADD_VOICEMAIL": "voicemail",
    "AUTHENTICATE_ACCOUNTS": "",
    "BATTERY_STATS": "Battery",
    "BIND_ACCESSIBILITY_SERVICE": "",
    "BIND_APPWIDGET": "",
    "BIND_DEVICE_ADMIN": "",
    "BIND_INPUT_METHOD": "",
    "BIND_NFC_SERVICE": "",
    "BIND_NOTIFICATION_LISTENER_SERVICE": "",
    "BIND_PRINT_SERVICE": "",
    "BIND_REMOTEVIEWS": "",
    "BIND_TEXT_SERVICE": "",
    "BIND_VPN_SERVICE": "",
    "BIND_WALLPAPER": "",
    "BLUETOOTH": "bluetooth",
    "BLUETOOTH_ADMIN": "bluetooth",
    "BLUETOOTH_PRIVILEGED": "bluetooth",
    "BRICK": "",
    "BROADCAST_PACKAGE_REMOVED": "",
    "BROADCAST_SMS": "",
    "BROADCAST_STICKY": "",
    "BROADCAST_WAP_PUSH": "",
    "CALL_PHONE": "telephony",
    "CALL_PRIVILEGED": "telephony",
    "CAMERA": "Camera",
    "CAPTURE_AUDIO_OUTPUT": "audio-capture",
    "CAPTURE_SECURE_VIDEO_OUTPUT": "",
    "CAPTURE_VIDEO_OUTPUT": "camera",
    "CHANGE_COMPONENT_ENABLED_STATE": "",
    "CHANGE_CONFIGURATION": "settings",
    "CHANGE_NETWORK_STATE": "settings",
    "CHANGE_WIFI_MULTICAST_STATE": "wifi-manage",
    "CHANGE_WIFI_STATE": "wifi-manage",
    "CLEAR_APP_CACHE": "",
    "CLEAR_APP_USER_DATA": "",
    "CONTROL_LOCATION_UPDATES": "",
    "DELETE_CACHE_FILES": "",
    "DELETE_PACKAGES": "",
    "DEVICE_POWER": "",
    "DIAGNOSTIC": "",
    "DISABLE_KEYGUARD": "",
    "DUMP": "",
    "EXPAND_STATUS_BAR": "",
    "FACTORY_TEST": "",
    "FLASHLIGHT": "Camera",
    "FORCE_BACK": "",
    "GET_ACCOUNTS": "",
    "GET_PACKAGE_SIZE": "",
    "GET_TASKS": "",
    "GET_TOP_ACTIVITY_INFO": "",
    "GLOBAL_SEARCH": "",
    "HARDWARE_TEST": "",
    "INJECT_EVENTS": "",
    "INSTALL_LOCATION_PROVIDER": "",
    "INSTALL_PACKAGES": "webapps-manage",
    "INSTALL_SHORTCUT": "",
    "INTERNAL_SYSTEM_WINDOW": "",
    "INTERNET": "TCP Socket",
    "KILL_BACKGROUND_PROCESSES": "",
    "LOCATION_HARDWARE": "",
    "MANAGE_ACCOUNTS": "",
    "MANAGE_APP_TOKENS": "",
    "MANAGE_DOCUMENTS": "",
    "MASTER_CLEAR": "",
    "MEDIA_CONTENT_CONTROL": "audio-channel-content",
    "MODIFY_AUDIO_SETTINGS": "audio-channel-normal",
    "MODIFY_PHONE_STATE": "",
    "MOUNT_FORMAT_FILESYSTEMS": "device-storage",
    "MOUNT_UNMOUNT_FILESYSTEMS": "device-storage",
    "NFC": "",
    "PERSISTENT_ACTIVITY": "",
    "PROCESS_OUTGOING_CALLS": "audio-channel-telephony",
    "READ_CALENDAR": "",
    "READ_CALL_LOG": "",
    "READ_CONTACTS": "contacts",
    "READ_EXTERNAL_STORAGE": "device-storage:sdcard",
    "READ_FRAME_BUFFER": "",
    "READ_HISTORY_BOOKMARKS": "",
    "READ_INPUT_STATE": "",
    "READ_LOGS": "",
    "READ_PHONE_STATE": "telephony",
    "READ_PROFILE": "",
    "READ_SETTINGS": "settings",
    "READ_SMS": "sms",
    "READ_SOCIAL_STREAM": "",
    "READ_SYNC_SETTINGS": "",
    "READ_SYNC_STATS": "",
    "READ_USER_DICTIONARY": "",
    "REBOOT": "",
    "RECEIVE_BOOT_COMPLETED": "",
    "RECEIVE_MMS": "mms",
    "RECEIVE_SMS": "sms",
    "RECEIVE_WAP_PUSH": "",
    "RECORD_AUDIO": "audio-capture",
    "REORDER_TASKS": "",
    "RESTART_PACKAGES": "",
    "SEND_RESPOND_VIA_MESSAGE": "",
    "SEND_SMS": "sms",
    "SET_ACTIVITY_WATCHER": "",
    "SET_ALARM": "Alarm",
    "SET_ALWAYS_FINISH": "",
    "SET_ANIMATION_SCALE": "",
    "SET_DEBUG_APP": "",
    "SET_ORIENTATION": "",
    "SET_POINTER_SPEED": "",
    "SET_PREFERRED_APPLICATIONS": "",
    "SET_PROCESS_LIMIT": "",
    "SET_TIME": "",
    "SET_TIME_ZONE": "",
    "SET_WALLPAPER": "",
    "SET_WALLPAPER_HINTS": "",
    "SIGNAL_PERSISTENT_PROCESSES": "",
    "STATUS_BAR": "",
    "SUBSCRIBED_FEEDS_READ": "",
    "SUBSCRIBED_FEEDS_WRITE": "",
    "SYSTEM_ALERT_WINDOW": "",
    "TRANSMIT_IR": "",
    "UNINSTALL_SHORTCUT": "",
    "UPDATE_DEVICE_STATS": "",
    "USE_CREDENTIALS": "",
    "USE_SIP": "",
    "VIBRATE": "",
    "WAKE_LOCK": "power",
    "WRITE_APN_SETTINGS": "wifi-manage",
    "WRITE_CALENDAR": "",
    "WRITE_CALL_LOG": "",
    "WRITE_CONTACTS": "contacts",
    "WRITE_EXTERNAL_STORAGE": "device-storage:sdcard",
    "WRITE_GSERVICES": "",
    "WRITE_HISTORY_BOOKMARKS": "",
    "WRITE_PROFILE": "",
    "WRITE_SECURE_SETTINGS": "",
    "WRITE_SETTINGS": "settings",
    "WRITE_SMS": "sms",
    "WRITE_SOCIAL_STREAM": "",
    "WRITE_SYNC_SETTINGS": "",
    "WRITE_USER_DICTIONARY": ""
};
