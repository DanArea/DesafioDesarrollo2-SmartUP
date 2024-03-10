import React from 'react';
import './LandingPage.css';
import logo from '../logo.webp';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <div className="card-enabled">
          <a href="./ChatIA" className="link">
            <h2 className='h2-enabled'>Cuentanos sobre ti</h2>
          
            <strong className='strong-enabled'>Tiempo estimado: </strong>
            <p className='p-enabled'>0:30</p>
            <strong className='strong-enabled'>Descripción: </strong>
            <p className='p-enabled'>Habla con nuestro asistente IA y habla sobre tí, tus estudios y lo que esperas de nosotros.</p> 
            <strong className='strong-enabled'>Estado: </strong>
            <p className='p-enabled'>Incompleto</p>
            </a>
        </div>
        <div className="card-enabled">
        <a href="./admin-form1" className="link">
          <h2 className='h2-disabled'>Revisión</h2>
          <strong className='p-disabled'>Tiempo estimado: </strong>
          <p className='p-disabled'> 0:10</p>
          <strong  className='p-disabled'>Descripción: </strong>
           <p className='p-disabled'>Comprueba que tenemos todo sobre ti.</p>
          <strong  className='p-disabled'>Estado: </strong>
          <p className='p-disabled'>Incompleto</p>
           </a>
        </div>
        <div className="card-disabled">
          <h2 className='h2-disabled'>Calcemos nuestro Fit cultural</h2>
          <strong className='p-disabled'>Tiempo estimado: </strong>
          <p className='p-disabled'>0:45</p>
          <strong className='p-disabled'>Tiempo estimado: </strong>
          <p className='p-disabled'>Cuéntanos tus experiencias de vida al momento de enfrentar problemas.</p>
          <strong className='p-disabled'>Estado: </strong>
          <p className='p-disabled'>Completado</p>

        </div>
      </div>
    );
}

export default LandingPage;
