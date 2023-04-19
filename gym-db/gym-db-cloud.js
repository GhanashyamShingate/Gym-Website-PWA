import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    updateDoc,
    deleteDoc } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

class GymDB {

  constructor() {
    this.appName = "Gym PWA";
    this.db = null;
    this.isAvailable = false;
    console.log('Song db cloud initialized!');
  }

  open() {

    return new Promise((resolve, reject) => {
        try{
            const firebaseConfig = {
                apiKey: "AIzaSyDvT_j4aLAc4yQIFYSeKwCRnmGqji9Tf8g",
                authDomain: "final-project-info-6128.firebaseapp.com",
                projectId: "final-project-info-6128",
                storageBucket: "final-project-info-6128.appspot.com",
                messagingSenderId: "346476687810",
                appId: "1:346476687810:web:365e95ebd4729cd78da65b",
                measurementId: "G-G1S0WVQV9V"
            };
            
              // Initialize Firebase
              const app = initializeApp(firebaseConfig);
        
              this.db = getFirestore(app);
              if(this.db){
                this.isAvailable = true;
                resolve();
              } else{
                reject('Database not available!!')
              }
              console.log('Gym db opened!', this.db);
        }
        catch(error){
            reject(error.message);
        }
    })

  }

}

export default new GymDB;