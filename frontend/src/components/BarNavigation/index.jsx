import { FiAward, FiUser, FiHome, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const BarNavigation = () => {
  return (
    <section className='bar-navigation'>
      <Link to='/'>
        <FiHome size={22} color='#FFF' />
      </Link>
      <FiSearch size={22} color='#FFF' />
      <FiAward size={22} color='#fff' />
      <FiUser size={22} color='#FFF' />
    </section>
  );
};

export default BarNavigation;
