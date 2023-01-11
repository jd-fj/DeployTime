import {motion} from 'framer-motion';
import smallerMustache from '../assets/smallerMustache.svg';

export default function Page1() {
  return (
    <div className='flex place-content-center mt-20'>
      <motion.img 
        className=''
        src={smallerMustache} alt="" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        width='45%'
        height='45%'
      />
    </div>
  );
}