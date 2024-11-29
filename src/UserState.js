import React, { useContext } from 'react'
import { UserContext } from './Context/User'
import SportCenterLogo from './sportcenterlogo.png';

const UsuarioEstado = () => {

  const { user, setUser, userData, setUserData } = useContext(UserContext);

  const onButtonClick = () => {
    setUser(false);
    setUserData(null);
  }

  return (
    <div className={user ? "" : "hidden"}>
      <div className="usuarioEstado">
        <table>
          <tbody>
            <tr>
              <td>
              <img src={SportCenterLogo} className="usuarioImagen img-fluid rounded-circle" />
              </td>
              <td>
                <div>
                  <div>Bienvenido {userData ? userData.firstName + " " + userData.lastName : ""}  <span> [{userData ? userData.role : ""}]</span></div>
                </div>
                <div>
                  <input className={'inputButton loginButton'} type="button" onClick={onButtonClick} value={"Log Out"} 
                  style={{width: '70%', height: '30px'}} />
                 
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