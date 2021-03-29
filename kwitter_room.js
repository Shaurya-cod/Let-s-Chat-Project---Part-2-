
const firebaseConfig = {
      apiKey: "AIzaSyCvyC4QTqEQgg4u_Z__TKqymj4b7SkRUaY",
      authDomain: "let-s-chat-----part-2.firebaseapp.com",
      projectId: "let-s-chat-----part-2",
      storageBucket: "let-s-chat-----part-2.appspot.com",
      messagingSenderId: "963484229850",
      appId: "1:963484229850:web:f6937a9a78100cde9085e3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      });});}
getData();

