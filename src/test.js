import firebase from "firebase/app";
import 'firebase/firestore'

const firestore=firebase.firestore()

firestore
.collection('user')
.doc('hDCQ9kwpiQBVHEFC9Y0b')
.collection('cartItems')
.doc('HI9IdFPhJ5iM7FC3Kthf')