const notification = document.getElementById("btn");
if ("Notification" in window && "serviceWorker" in navigator) {
  notification.addEventListener("click", () => {
    console.log("Permission:", Notification.permission);
    //debugger;
    switch (Notification.permission) {
      case "denied":
        notificationNotAllowed();
        break;

      case "default":
        console.log("In default");
        requestUserPermission();
        //debugger;
        break;

      case "granted":
        displayNotification();
        //notificationButton.disabled = true;
        //notificationButton.style.visibility = "hidden";
        //newForm.style.display = "none";
        //debugger;
        break;
    }
  });
} else {
  notificationNotAllowed();
}
function notificationNotAllowed() {
  console.log("Notifications not allowed!");
  //notificationButton.disabled = true;
  //notificationButton.style.visibility = "hidden";
  //songaddform.style.display = "none";
}
function requestUserPermission() {
  console.log("Requesting permission");
  //debugger;
  Notification.requestPermission().then((permission) => {
    console.log("User choice", permission);
    if (permission === "granted") {
      displayNotification();
    } else if (permission === "default") {
      //requestUserPermission();
      console.log("User Choice:", permission);
    } else {
      notificationNotAllowed();
    }
  });
}
function displayNotification() {
  console.log("Showing Notification");
  //   const Option = {
  //     body: body,
  //     icon: "/icons/android-chrome-36x36.png",
  //     actions: [
  //       { action: "Agree", title: "Agree" },
  //       { action: "DisAgree", title: "Disagree" },
  //     ],
  //   };
  //   //new Notification(title, Option);
  //   navigator.serviceWorker.ready.then((registration) => {
  //     registration.showNotification(title, Option);
  //   });
  //newForm.style.display = "none";
  //
  //debugger;
  if (Notification.permission === "granted") {
    console.log("In showbutton");
    const titleOfNotification = "Welcome To Gymwala News";
    const Option = {
      body: "Thanks for Subscribing",
      icon: "/icons/android-chrome-36x36.png",
      actions: [
        { action: "Agree", title: "Agree" },
        { action: "DisAgree", title: "Disagree" },
      ],
    };
    //new Notification(title, Option);
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(titleOfNotification, Option);
    });
  } else {
    alert("Permission is not granted");
  }
}
