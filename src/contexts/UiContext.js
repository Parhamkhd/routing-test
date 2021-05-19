import {createContext, useState, useEffect,useLayoutEffect} from 'react';
import {useLocation} from 'react-router-dom'


export const UiContext = createContext({});


export const UiProvider = (props)=>{
  
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 992);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

useEffect(() => {
    if(width < 1200){
        setisMobile(true)
    }else{
        setisMobile(false)
    }
}, [width]);
const location = useLocation()

    return(
        <UiContext.Provider value={{isMobile}}>
            {props.children}
        </UiContext.Provider>
    )
}