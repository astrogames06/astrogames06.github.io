
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log("Got request");


    if (request.code == "ping") {
        console.log("RECEIVED PING")
        sendResponse();
    } else if (request.code == "save_sync") {
        var info = JSON.parse(request.delta);

        chrome.storage.local.get(["last_save"], function(items) {
            let last_save = items['last_save'];
            if (last_save == null) {
                console.log("Not saving to chrx because it doesn't have last_save in chrome.storage.sync.")
                return;
            }

            last_save = JSON.parse(last_save);
            var the_delta = {...info.map_delta};
            for (let key in the_delta) {
                if (last_save[key] != null) {
                    the_delta[key].xp = Number(the_delta[key].xp) - Number(last_save[key]);
                }
                if (the_delta[key].xp == 0) {
                    delete the_delta[key];
                }
            }

            console.log("Success");
            chrome.storage.local.set({
                delta: JSON.stringify(the_delta),
                NAME: info.mem_name
            });
            sendResponse();
        });
    } else {
        console.log("unknown background comm req");
    }
    
});