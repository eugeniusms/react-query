import type { NextPage } from 'next';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';

const Login: NextPage = () => {
  const signIn = async () => {
    console.log('SIGN IN');
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white relative">
      <Image
        src="https://i.pinimg.com/564x/3c/dd/a3/3cdda3f8bda0edcd193f3612b0f6f683.jpg"
        width={100}
        height={100}
        alt=""
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />
      <div className="top-0 left-0 right-0 bottom-0 absolute bg-black opacity-50"></div>
      <div
        className="flex justify-center items-center border border-gray-300 p-2 bg-white bg-opacity-60 
                rounded-full cursor-pointer hover:shadow-md hover:bg-opacity-100 duration-150 ease-in-out z-10"
        onClick={signIn}
      >
        <FcGoogle fontSize={30} />
        <p className="text-lg font-semibold ml-4">Sign in with Google</p>
      </div>
    </div>
  );
};

export default Login;
