'use client';

import { useState } from "react";

import { CustomButton, Input } from "@/components"

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const forgotPassword = () => {
    
  }

  const login = () => {
    
  }

  const loginWithGoogle = () => {
    console.log('teste');
  }
  
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-between min-w-[500px] min-h-[250px] p-5 rounded-md bg-slate-100">
        <div className="flex flex-col flex-1 gap-2">
          <Input
            onChange={setEmail}
            placeholder="E-mail"
            value={email}
          />
          <Input
            autocomplete="off"
            onChange={setPassword}
            placeholder="Senha"
            value={password}
          />
          <div className="flex flex-row justify-between items-center">
          <CustomButton
            containerStyles="text-black"
            handleClick={forgotPassword}
            title="Esqueci a senha"
          />
          <CustomButton
            containerStyles="text-black"
            handleClick={login}
            title="Entrar"
          />
          </div>
        </div>
        <CustomButton
          containerStyles="custom-btn custom-btn text-white rounded-full bg-primary-blue"
          handleClick={loginWithGoogle}
          title="Logar com Google"
        />
      </div>
    </div>
  )
}

export default Login