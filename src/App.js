import Main from "./Components/Main";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthDispatch, useAuthState } from "./Components/Context";
import { actionType } from "./Components/Context/reducer";

function App() {
  const [loading, setLoading] = useState(false)
  const context = useAuthState();

  const dispatch = useAuthDispatch();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/products',
    };

    axios.request(options).then(function (response) {
      dispatch({ type: actionType.READING_DATA, payload: { data: response.data } })
    }).catch(function (error) {
      console.error(error);
    });
  }, []);



  return (
    <>
      <Main />
    </>
  );
}

export default App;
