import { useContext } from "react"
import { UserContext } from "../../components/context/UserContext"

export default function Cards() {
const {userName,userAge} =useContext(UserContext);



  return (
    <div>Cards - {userName} - {userAge}</div>
  )
}
