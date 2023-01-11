import {motion} from 'framer-motion';
import tammy from '../assets/tammy.svg';

export default function Home() {
  return (
    <div className='flex place-content-center mt-20'>
      <motion.img 
        src={tammy} alt="" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        width='20%'
        height='20%'
      />
    </div>
  );
}