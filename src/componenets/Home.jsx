import React,{useContext,useEffect} from 'react';
import { AppointmentsContext } from '../context/AppointmentsContext';
import { AuthContext } from '../context/AuthContext';
import { getAppointments } from '../firestore_api';
function Home() {
  const {setAppointments} = useContext(AppointmentsContext);
  const {userLoged} = useContext(AuthContext);


  useEffect(() => {
    fetchData();
    async function fetchData() {
      let result = await getAppointments(userLoged.uid);
      if(result && result.code == 200) {
        console.log(result.msg);
        setAppointments(result.msg);
        localStorage.setItem("appointments",JSON.stringify(result.msg));
      }
    }
  }, []);
  

  return (
    <div>Home</div>
  )
}

export default Home