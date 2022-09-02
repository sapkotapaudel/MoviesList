import React, {useState, useEffect} from "react"
// import classes from './like.module.css'

import {db} from './../../firebase-config'
import {collection, getDocs} from "firebase/firestore"

const Like = (props) => {
    const [users, setUsers] = useState([])
    const userCollectionRef = collection(db, "users")

    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
            console.log("++++")
        }
        getUsers()
    }, [userCollectionRef], [])
    
    

    return(
        <React.Fragment>
           {users.map((user)=>{
               return <div>
                   {user.Title}
                   {user.Type}
                   {user.Year}
               </div>
           })}
        
      </React.Fragment>
    
    )

}

export default Like