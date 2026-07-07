import { useContext } from "react"
import { UserContext } from "../../components/context/UserContext"
import { Usecounterstore } from "../../../store/Usecounterstore";

export default function Cards() {
const {userName,userAge} =useContext(UserContext);

const x = Usecounterstore((state)=> state.Counter);
const increment = Usecounterstore((state)=>state.increment)



  return (
    <>
    <div>Cards - {userName} - {userAge} - {x}</div>
    <button onClick={increment} >+</button>
    </>
  )
}
