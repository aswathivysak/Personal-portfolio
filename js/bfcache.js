window.addEventListener("pagehide", function (event) {
    if (event.persisted) {
        console.log("Page is being cached for bfcache.");
    } else {
        console.log("Page is being unloaded normally.");
    }
});