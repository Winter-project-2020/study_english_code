// import firebase from 'firebase/app';

// // firestore: db관련
// // auth: user authentication
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
// 	apiKey: "AIzaSyB3r-eEF_fGIHpNXFimsH5Jr8yHXi53_gA",
// 	authDomain: "ayproj.firebaseapp.com",
// 	dataBaseURL: "https://ayproj.firebaseio.com",
// 	projectId: "ayproj",
// 	storageBucket: "ayproj.appspot.com",
// 	messagingSenderId: "700615001126",
// 	appId: "1:700615001126:web:b64a76ef4b49f13f8612e7",
// 	measurementId: "G-40K0L9H1V6"	
// };
// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// // GoogleAuthProvider 클래스를 auth라이브러리에서 사용할 수 있도록 불러온다.
// // GoogleAuthProvider 를 사용할 때 마다 구글 팝업 항상 띄우기  
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => (
// 	auth.signInWithPopup(provider)
// );
// export default firebase;