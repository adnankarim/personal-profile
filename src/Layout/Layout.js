import {Link} from 'react-router-dom';
 const Layout = () => {
  return (
    <div>
      <header>
        <div  className='quoteoftheday'  >
          <Link style={{textDecoration: 'none',color:'black'}} to='/'>Profile</Link>
        </div>
        <div className='name'>Ad.</div>
      </header>

      <article>
        <div className='quote'>
          <h1>A Coders Life: Problematic but Charismatic.</h1>
        </div>

        <div className='quoteby'>
          <h4>Adnan Karim</h4>
        </div>
      </article>
    </div>
  );
};

export default Layout;
