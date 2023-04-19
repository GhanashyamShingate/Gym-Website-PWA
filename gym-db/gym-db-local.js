/**
 * GameDB Interface using IndexedDB
 */
 class GameDB {
    constructor() {
      this.storeName = 'GymFit';
      this.isAvailable = false;
      this.db = null;
    }
  
    /**
     * Opens the database.
     */
    open() {
      return new Promise((resolve, reject) => {
  
        // Validates whether the indexedDB object is available.
        if (!indexedDB) {
          reject("Your browser doesn't support IndexedDB.");
          return;
        }
  
        // Opens/Creates the database.
        const request = indexedDB.open("Gym", 4);
  
        // Handles the errors when opening/creating the database.
        request.onerror = event => {
          reject(event.target.error.message);
        };
  
        // Handles the success when opening/creating the database.
        request.onsuccess = event => {
          this.db = event.target.result;
          if (this.db) {
            this.isAvailable = true;
            resolve();
          }
          else {
            reject('The database is not available.');
          }
        };
  
        // Handles the database upgrade.
        request.onupgradeneeded = event => {
          const db = event.target.result;
  
          // Creates the object store.
          const objectStore = db.createObjectStore(this.storeName, {
            // autoIncrement: true
            keyPath: "id"
          });
  
          // Creates the indexes.
          objectStore.createIndex("gym", "gym", { unique: true });
          objectStore.createIndex("fit", "fit", { unique: false });
        };
  
      });
    }