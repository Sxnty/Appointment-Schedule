import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5CF1SgvVtkmJk5JKx-nAWy__2gu_C8Ik",
  authDomain: "appointment-schedule-37363.firebaseapp.com",
  projectId: "appointment-schedule-37363",
  storageBucket: "appointment-schedule-37363.appspot.com",
  messagingSenderId: "968381490054",
  appId: "1:968381490054:web:5fcd98496b25beea27c207",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)