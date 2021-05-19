// checks if user is authorized to go to dashboard

/**
 * at first if local storage is full, it sends the local storage data to server
 * 
 * if it was ok we show the dashboard if not we redirect to login
 * 
 * if local storage is empty it redirects to /login
 *  
 * this function is here to send local storage data to backend and get data back from it  
 * 
 */

 import {createContext, useState, useEffect} from 'react';

 export const AuthContext = createContext({});
 
 
 export const AuthProvider = (props)=>{
   
   const [isAuthed, setIsAuthed] = useState(false);


     return(
         <AuthContext.Provider value={{isAuthed}}>
             {props.children}
         </AuthContext.Provider>
     )
 }