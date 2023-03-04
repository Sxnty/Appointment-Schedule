import React,{useContext,useEffect} from 'react';
import { AppointmentsContext } from '../context/AppointmentsContext';
import { AuthContext } from '../context/AuthContext';
import { getAppointments } from '../firestore_api';
function Home() {
  const {appointments,setAppointments} = useContext(AppointmentsContext);
  const {userLoged} = useContext(AuthContext);


  useEffect(() => {
    if(!appointments.length) {
      fetchData();
    }
    async function fetchData() {
      let result = await getAppointments(userLoged.uid);
      if(result && result.code == 200) {
        if(result.msg.length) {
          setAppointments(result.msg);
          localStorage.setItem("appointments",JSON.stringify(result.msg));
        }
        
      }
    }
  }, []);
  

  return (
    <div>Home</div>
  )
}

export default Home