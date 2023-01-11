import { Link } from 'react-router-dom';
import smallFrown from '../assets/smallFrown.svg';
import smallerMustache from '../assets/smallerMustache.svg';
import smallSquiggle from '../assets/smallSquiggle.svg';
import tammy from '../assets/tammy.svg';
import { motion } from "framer-motion";

const Navy = () => {
  return (
    <>
      <nav className={'flex flex-row place-content-around bg-white sticky top-0 overflow-hidden pt-3 shadow-beige-20 shadow-md'}>
        <Link to="/" className='place-self-end'>
          <motion.img 
            className="start p-3 h-20"
            src={tammy}
            alt="a frowny face"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}/>
        </Link>
        <Link to="/page_1">
          <motion.img 
            className="p-3 h-20"
            src={smallFrown}
            alt="a frowny face"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}/>
        </Link>
        <Link to="/page_2">
          <motion.img
            className="p-3 h-20" 
            src={smallerMustache} 
            alt="a face with smallMustache" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}/>
        </Link>
        <Link to="/svgGrid2">
          <motion.img
            className="p-3 h-20" 
            src={smallSquiggle} 
            alt="a face with smallMustache" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}/>
        </Link>
      </nav>
    </>
  );
}

export default Navy;