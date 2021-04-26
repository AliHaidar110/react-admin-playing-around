import { FirebaseAuthProvider } from 'react-admin-firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyAGnHYFzpONy6QWX-Z9TyNkUZ0lYsPv3Xg',
   authDomain: 'login-with-react-admin.firebaseapp.com',
   projectId: 'login-with-react-admin',
   storageBucket: 'login-with-react-admin.appspot.com',
   messagingSenderId: '549621711988',
   appId: '1:549621711988:web:92a62ab6059a0de1aabd21',
};

const firebaseOptions = {};

export const authProvider = FirebaseAuthProvider(firebaseConfig);
