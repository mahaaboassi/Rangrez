import { useNavigate } from 'react-router-dom';
import img from '../../assets/images/404.png';

const Page_404 = () => {
  const navigate = useNavigate();
  return <div className='relative h-[750px] flex justify-center items-center px-4'>
    <div style={{
    background: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
  }}  className=' absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'></div>
    {/* <div className='relative flex flex-col gap-5 z-1 bg-zinc-100 p-20 rounded-xl animate-fadeIn'>
        <h1 className='text-[1.5rem] font-bold'>404 - Page Not Found</h1>
        <button className='!text-sm'>GO TO HOME</button>
    </div> */}
    <div className="relative flex flex-col items-center justify-center gap-6 p-16 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl shadow-lg text-center animate-fadeIn">
      {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60"></div> */}

      <h1 className="text-6xl font-extrabold drop-shadow-sm">404</h1>
      <p className="text-lg text-zinc-600">Oops! The page you’re looking for doesn’t exist.</p>

      <button onClick={()=>navigate("/")} className="!text-sm ">
        GO TO HOME
      </button>
    </div>
    
  </div>;
}      
export default Page_404;