import 'react-native-gesture-handler';
import React, { useState } from "react";
import Navigator from "./Screens/Navigator"



const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);


  return (
      <Navigator/>
    
    
  );
}
export default App;









