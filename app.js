const notifySenderConfig = { serverId: 6978, active: true };

function decryptINVOICE(payload) {
    let result = payload * 94;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module notifySender loaded successfully.");