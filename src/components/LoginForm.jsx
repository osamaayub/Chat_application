import { useState } from "react"
import axios from 'axios';



const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState('');


  const handleSubmit = async(event) => {
       event.preventDefault();

       const authObject={'Project-ID':'c445f0ae-c047-4fa8-87c0-a26924383c3a','User-Name':userName,'User-Secret':password};
       try{
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});
           localStorage.setItem('username',userName);
           localStorage.setItem('password',password);
           window.location.reload();
       }
       catch(error){
        setError('Oops,Please Try again with new credentials');

       }
  }

  return (
    <div className='wrapper'>
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form className="" onSubmit={handleSubmit}>
          <input type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="UserName"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="input"


          />
          <div align="center">
               <button type="submit" className="button">
                <span>Start Chatting</span>
               </button>
          </div>
          <h2 className="error">{error}</h2>

        </form>

      </div>
    </div>
  )
}

export default LoginForm        