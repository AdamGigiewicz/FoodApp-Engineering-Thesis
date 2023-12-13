import React, { useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock, FcGoogle } from '../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background img */}
      <img src={LoginBg} className="w-full h-full object-cover absolute top-0 left-0" alt="" />

      {/* content box */}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">

        {/* Welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Witaj ponownie!</p>
        <p className="text-xl text-textColor -mt-6">{isSignUp ? 'Załóż konto' : 'Zaloguj się'}</p>

        {/* Input section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={'Adres Email'}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={'Hasło'}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeHolder={'Potwierdź hasło'}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirmPassword}
              inputStateFunc={setConfirmPassword}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          {!isSignUp ? (
            <p>
              Nie masz konta?{' '}
              <motion.button {...buttonClick} className="text-red-400 underline cursor-pointer bg-transparent" onClick={() => setIsSignUp(true)}>
                {' '}
                Załóż je{' '}
              </motion.button>
            </p>
          ) : (
            <p>
              Masz już konto?{' '}
              <motion.button {...buttonClick} className="text-red-400 underline cursor-pointer bg-transparent" onClick={() => setIsSignUp(false)}>
                {' '}
                Zaloguj się{' '}
              </motion.button>
            </p>
          )}

          {/* button section */}
          <motion.button
            {...buttonClick}
            className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
          >
            {isSignUp ? 'Załóż konto' : 'Zaloguj się'}
          </motion.button>
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className='w-24 h-[1px] rounded-md bg-white'></div>
          <p className="text-white">lub</p>
          <div className='w-24 h-[1px] rounded-md bg-white'></div>
        </div>

        <motion.div {...buttonClick} className="flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4">
          <FcGoogle className="text-3xl"/>
          <p className="capitalize text-base">Zaloguj się przez Google</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;
