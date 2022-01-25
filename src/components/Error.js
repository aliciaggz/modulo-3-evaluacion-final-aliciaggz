import { Link } from 'react-router-dom';
function Error(props) {
  return (
    <div>
      <p>Usuario no encontrado</p>
      <p>Siga buscando...</p>
      <Link to="/">Volver</Link>
    </div>
  );
}

Error.propTypes = {};

export default Error;