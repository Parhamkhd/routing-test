import React,{useContext,useEffect} from 'react'
import './App.css';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom'
import NotFound from './NotFound'
import {AuthContext} from "./contexts/AuthContext"
import {UiProvider} from "./contexts/UiContext"

const LazyLogin = React.lazy(()=>import("./pages/Login/Login"))
const LazyDashboard = React.lazy(()=>import("./pages/Dashboard/Dashboard"))

function App() {

    const {isAuthed} = useContext(AuthContext)

    useEffect(() => {
     console.log(isAuthed,"is authed")
    }, [])
    
  return (
    <>
    

    <React.Suspense fallback="">
      <BrowserRouter>
        <UiProvider>
        <Switch>
          <Route exact path="/" render={()=>{
            if(!isAuthed){
              return <Redirect to="/login" />
            }else{
              return <Redirect to="/dashboard" />
            }
          }}>
          </Route>

          <Route exact path="/login" render={()=>{
            if(!isAuthed){
              return <LazyLogin/>
            }else{
              return <Redirect to="/dashboard" />
            }
          }}>
          </Route>
          <Route exact path="/dashboard" render={()=>{
              if(isAuthed){
                return  <LazyDashboard />
              }else{
                return <Redirect to="/login" />
              }
          }}>
          </Route>
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
        </UiProvider>
       
      </BrowserRouter>
    </React.Suspense>

    </>
  );
}

export default App;
