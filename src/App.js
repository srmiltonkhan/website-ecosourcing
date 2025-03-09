import { useState,useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import RootContext from './context/RootContext';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {



  //Use Context State
  const [loading, setLoading] = useState(true);
  const [year , setYear] = useState();

  const getFullYear = ()=> {
      setYear(new Date().getFullYear())
  }
  useEffect(() => {
    getFullYear();
}, []);

  return (
      <BrowserRouter>
        <RootContext.Provider
              value={{
                  loading,
                  setLoading,
                  year,
              }}
              >
            <AppRoutes />
        </RootContext.Provider>  
      </BrowserRouter>
  );
}
export default App;