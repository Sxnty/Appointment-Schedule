import { db } from "./firebase"
import { doc,collection, addDoc, getDocs, query, where, orderBy,deleteDoc } from "firebase/firestore";

export const createAppointment = async (appointment) => {
    if(appointment) {
       let result = await addDoc(collection(db, 'appointments'), appointment);
       if(result && result.type == 'document') {
        return {code: 200, id: result.id};
       } else {
        return {code: 500, msg: 'Ha ocurrido un error al crear la cita.'};
       }
    }
}

export const getAppointments = async (uid) => {
    let appointmentsRef = collection(db,"appointments");
    let filteredAppointments = query(appointmentsRef, where("userId","==",uid),orderBy('date','asc'),orderBy('hour','asc'));
    const querySnapshot = await getDocs(filteredAppointments);
    if(querySnapshot && querySnapshot.docs) {
       const result = querySnapshot.docs.map(doc => {
        let document = {
            id: doc.id,
            ...doc.data()
        }
        return document;
      });
      return {code: 200, msg: result};
    } else {
        return {code:500, msg: []};
    }
}

export const deleteAppointment = async (id) => {
    let appointmentsRef = collection(db,"appointments");
    await deleteDoc(doc(appointmentsRef, id));
    return {code: 200, msg: 'Cita eliminada correctamente'};
}

