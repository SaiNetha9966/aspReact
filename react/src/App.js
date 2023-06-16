import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Brand from './Componets/Brands';


function App() {

  
  return (
    <Provider store={store}>
       <Brand/>
    </Provider>
   
  );
}

export default App;
