/* 
{
    id: "jdhnnewn1223knl123", 
    fecha: "1/12/2021",
    pago: 450.00
}

 */

import { db } from '../firebase/config-firebase';
import { collection, addDoc } from 'firebase/firestore';

export const crearRegistro = (pago) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const datos = {
            fecha: new Date(),
            pago,
        };
        const referencia = await addDoc(
            collection(db, `${uid}/nominas/nomina/`),
            datos
        );
    };
};
