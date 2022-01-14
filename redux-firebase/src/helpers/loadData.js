import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config-firebase';

export const loadData = async (uid) => {
    const response = await getDocs(collection(db, `${uid}/nominas/nomina/`));
    response.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
    });
    
};
