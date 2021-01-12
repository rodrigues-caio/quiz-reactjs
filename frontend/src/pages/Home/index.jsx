import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import BarNavigation from '../../components/BarNavigation';

import playerImg from '../../assets/image-player.svg';

import './styles.css';

const Home = () => {
  return (
    <div className='home-page-container'>
      <Header />

      <main className='home-page-content'>
        <h1 className='home-page-title'>
          Veja quantos pontos <br /> você consegue!
        </h1>

        <img src={playerImg} alt='Imagem de controle' />

        <Link to='/quiz' className='button-to-quiz'>
          Jogar
        </Link>
      </main>

      <BarNavigation />
    </div>
  );
};

export default Home;
