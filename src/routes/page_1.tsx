import smallFrown from '../assets/smallFrown.svg'
import './svgGrid2.css'
// import { SmallFrown } from '../assets/CustomSVGComponents';
import { motion } from 'framer-motion';


export default function Page0() {
    return (
      <div className='flex place-content-center mt-20'>
        <motion.img
          src={smallFrown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          width='45%'
          height='45%'
        />
      </div>
    );
}


