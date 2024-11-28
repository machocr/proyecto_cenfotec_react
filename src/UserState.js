import React,{ useContext } from 'react'
import { UserContext } from './Context/User'

  const UsuarioEstado = () => {

  const { user, setUser, userData, setUserData } = useContext(UserContext);

  const onButtonClick = () => {
    setUser(false);
    setUserData(null);
  }

  return (
    <div className={user? "": "hidden"}>
    <div className="usuarioEstado">
      <table>
        <tbody>
          <tr>
            <td>
              <img className='usuarioImagen' src={userData? userData.image: ""}></img>
            </td>
            <td>
              <div>
              <div>Bienvenido {userData? userData.firstName + " " + userData.lastName : ""}</div>
              </div>
              <div>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={"Log Out"}/>
                <span>{userData? userData.role: ""}</span>
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