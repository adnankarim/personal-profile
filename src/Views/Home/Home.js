import {Routing} from '../../Routes/Routes';
import Layout from '../../Layout/Layout';
const Home = () => {
  return (
    <div id='container'>
      <Layout/>
      <footer>
      <Routing/>
        <div className='content'>
          <p>
            Adnan Karim is a senior year Electrical Engineering student with
            utmost interest in Deep Learning, IOT &amp; Web Development.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
