"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import handleSubmit from './utils/action';

interface CardProps {
  data: {
    title: string;
    description: string;
    targetLink: string;
  };
}


const Card: React.FC<CardProps> = ({ data }) => {
  const { title, description, targetLink } = data;
  const [isLoginExpanded, setLoginExpanded] = useState(false);
  const [isRegisterExpanded, setRegisterExpanded] = useState(false);
  const router = useRouter();

  const toggleExpanded = () => {
    console.log(title)
    if(title =='Register'){
        setRegisterExpanded(!isRegisterExpanded)
    }
    else{
        setLoginExpanded(!isLoginExpanded)
    }
    
  };

  async function onCreate(e: any) {
    e.preventDefault();
    console.log("onCreate method called");
    const isLoginSuccess = await handleSubmit(username, password);

    if (title === 'Login' && isLoginSuccess === true) {
      router.push('/dashboard');
    } else if (title == 'Register' && isLoginSuccess === true) {
      // If registration is successful, update state and expand the "Login" card
      console.log("redirect")
      registerRedirect()
    } else {
      throw new Error("Creds failed");
    }

    console.log("Sent data");
  }

  useEffect(() => {
  },[isLoginExpanded,isRegisterExpanded]);
  const registerRedirect = () =>{
    
    console.log('called')
    setLoginExpanded(true)
    setRegisterExpanded(false)
    console.log(isLoginExpanded,isRegisterExpanded)
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormClick = (e: React.MouseEvent) => {
    // Prevent the click event from propagating to the parent div
    e.stopPropagation();
  };

  return (
    <div
      className={`flex flex-col bg-black p-4 rounded-md shadow-md ${(isLoginExpanded || isRegisterExpanded) ?
        'h-48 outline outline-offset-2 outline-1 outline-cyan-500 transition-all ease-in-out...'
        : 'h-16 outline outline-offset-2 outline-1 outline-cyan-500 transition-all ease-in-out...'}`}
      onClick={toggleExpanded}
    >
      <div className="flex justify-center items-center">
        <h2 className='justify-center items-center flex'>{title}</h2>
      </div>

      {((title == 'Login' && isLoginExpanded) || (title == 'Register' && isRegisterExpanded)) && (
        <div className="flex flex-col justify-center items-center mt-4" onClick={handleFormClick}>
          <div className="flex flex-row ">
            <form onSubmit={onCreate}>
              <div className="flex flex-col items-center">
                <div>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-30"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-30"
                  />
                </div>
              </div>
              <button className="flex justify-center items-center bg-blue-500 text-white px-4 py-2 rounded text-sm w-24" type='submit'>
                {title}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;