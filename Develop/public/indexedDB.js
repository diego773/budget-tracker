const request = window.indexedDB.open(databaseName, 1);
let db;

request.onupgradeneeded = function (event) {
    const db = event.target.result;
  // Create another object store called "names" with the autoIncrement flag set as true.
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onerror = function (event) {
  // Generic error handler for all errors targeted at this database's
  // requests!
    console.log("There was an error" + event.target.errorCode);
};

request.onsuccess = function (event) {
    db = event.target.result;

    db.onerror = function (event) {
        console.log("error");
    };
    if (method === "put") {
        store.put(object);
    }
    if (method === "clear") {
        store.clear();
    }
    if (method === "get") {
        const all = store.getAll();
        all.onsuccess = function () {
            resolve(all.result);
        };
    }
};
