import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config-firebase';

export const loadData = async (uid) => {
    const data = [];
    const response = await getDocs(collection(db, `${uid}/nominas/nomina/`));
    response.forEach((doc) => {
        const nominaData = doc.data();
        data.push({
            id: doc.id,
            ...nominaData,
        });
    });
    return data;
};
