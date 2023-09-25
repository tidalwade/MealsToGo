import { initializeApp } from 'firebase/app';
import {  getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5g1drmtjl5Ka92s6dXwzblCxJ-8usoR4",
    authDomain: "mealstogo-56fda.firebaseapp.com",
    projectId: "mealstogo-56fda",
    storageBucket: "mealstogo-56fda.appspot.com",
    messagingSenderId: "574839519852",
    appId: "1:574839519852:web:6756f3214eee445ea83649"
};

export const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app);