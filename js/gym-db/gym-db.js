import dbOnline from './gym-db-cloud.js';

class GymDB {
  constructor() {
    this.dbOnline = dbOnline;

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
    return dbOnline.open();
  }

}

export default new GymDB;