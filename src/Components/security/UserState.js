import React from 'react'

const UsuarioEstado = (props) => {
  const { loggedIn, nombre, imagen, role } = props;
  const onButtonClick = () => {
    if (loggedIn) {
      raiseLogout();
    }
    else {
      raiseLogin();
    }
  }

  const raiseLogout = () => {
    props.handleLogout();
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
  }

  const raiseLogin = () => {
    props.handleLogin();
  }

  return (
    <div className={loggedIn ? "" : "hidden"}>
      <div className="usuarioEstado">
        <table>
          <tbody>
            <tr>              
              <td>
                <div>
                  {loggedIn ? <div>Bienvenido {nombre} <span>  [{role}]</span></div> : <div />}
                </div>
                <div style={{verticalAlign: 'end'}}>
                  <input size='lg' style={{width: '150px'}} className={'inputButton'} 
                  type="button" onClick={onButtonClick}
                    value={loggedIn ? 'Salir' : 'Log in'} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsuarioEstado