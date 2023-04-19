import dbOnline from './gym-db-cloud.js';
import dbOffline from './gym-db-local'

class GymDB {
  constructor() {
    this.dbOnline = dbOnline;
    this.dbOffline = dbOffline;

    console.log('Song db initialized!');

    this.swController = null;
    this.swRegistration = null;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          if (registration.active && registration.sync) {
            this.swController = registration.active;
            this.swRegistration = registration;
          }
        });
    }
  }

  open() {
    dbOnline.open()
    return dbOffline.open();
  }

}

export default new GymDB;