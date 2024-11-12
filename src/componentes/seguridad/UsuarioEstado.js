import React from 'react'

const UsuarioEstado = (props) => {
  const { loggedIn, nombre, imagen, role } = props;
  const onButtonClick = () => {
    if(loggedIn){
      raiseLogout();
    }
    else{
      raiseLogin();
    }
  }

  const raiseLogout = () => {
    props.handleLogout();
  }

  const raiseLogin = () => {
    props.handleLogin();
  }

  return (
    <div className={loggedIn? "": "hidden"}>
    <div className="usuarioEstado">
      <table>
          <tr>
            <td>
              <img className='usuarioImagen' src={imagen}></img>
            </td>
            <td>
              <div>
              {loggedIn ? <div>Bienvenido {nombre}</div> : <div />}
              </div>
              <div>
              <input
                  className={'inputButton'}
                  type="button"
                  onClick={onButtonClick}
                  value={loggedIn ? 'Log out' : 'Log in'}
                />
                <span>  [{role}]</span>
              </div>
            </td>
            </tr>
      </table>
    </div>
    </div>
  )
}

export default UsuarioEstado