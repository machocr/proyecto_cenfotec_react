import React, { useState } from 'react';
import './forms.css'

const RegistroUsuario = () => {
    // hocks

    const [data, setCustomer] = useState({
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        tipoIdentificacion: "",
        identificacion: "",
        tipoHabitacion: "",
        cantidadPersonas: 0,
        tieneNinos: false,
        cantidadNinos: 0,
        tieneMascotas: false,
        cantidadMascotas: 0
    });

    const handleCustomerInputChange = (e) => {
        const { name, value } = e.target
        
        // alert(value);
        
        setCustomer({
            ...data,
            [name]: value
        })
    }

    const handleChecksOnChange = (e) => {
        const { name, checked } = e.target
        
        // alert(checked);
        
        setCustomer({
            ...data,
            [name]: checked
        })
    }

    const handleForm = (e) => {
        e.preventDefault();

        alert("Guardado con exito!");
        console.log(data);
    }  

    return (
        <>

            <section className="h-100">
                <header className="container h-100">
                    <div className="d-flex align-items-center justify-content-center h-100" style={{marginTop: '100px'}}>
                        <div className="d-flex flex-column">
                            <h1 className="text align-self-center p-2">Registro de Usuario</h1>
                            <form onSubmit={handleForm}>
                                <table className='formTable'>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label htmlFor="inputNombre" >Nombre</label>
                                            </td>
                                            <td colSpan={'3'}>
                                                <div >
                                                    <input type='text' name='nombre' id="inputNombre" className="form-control" value={data.nombre} placeholder='Nombre' 
                                                    onChange={handleCustomerInputChange} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="inputPrimerApellido">Primer Apellido</label>
                                            </td>
                                            <td>
                                                <div >
                                                    <input type='text' name='primerApellido' id='inputPrimerApellido' className="form-control" value={data.primerApellido} placeholder='Primer Apellido' onChange={handleCustomerInputChange} />
                                                </div>
                                            </td>
                                            <td>
                                                <label htmlFor="inputSegundoApellido" >Segundo Apellido</label>
                                            </td>
                                            <td>
                                                <div >
                                                    <input type='text' name='segundoApellido' id='inputSegundoApellido' className="form-control" value={data.segundoApellido} placeholder='Segundo Apellido' onChange={handleCustomerInputChange} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label htmlFor="inputTipoIdentificacion">Tipo de Identificacion</label>
                                            </td>
                                            <td>
                                                <select className="form-select form-select-sm" name='tipoIdentificacion' value={data.tipoIdentificacion} onChange={handleCustomerInputChange}>
                                                    <option className="dropdown-item" defaultValue='Seleccionar tipo' style={{ display: 'none' }}>Seleccione un tipo</option>
                                                    <option className="dropdown-item" >Cedula</option>
                                                    <option className="dropdown-item" >Pasaporte</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label htmlFor="inputIdentificacion" >Identificacion</label>
                                            </td>
                                            <td>
                                                <div >
                                                    <input type='text' name='identificacion' id='inputIdentificacion' className="form-control" value={data.identificacion} onChange={handleCustomerInputChange} />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Tipo de habitacion</label>
                                            </td>
                                            <td>
                                                <select className="form-select form-select-sm" name='tipoHabitacion' value={data.tipoHabitacion} onChange={handleCustomerInputChange}>
                                                    <option className="dropdown-item" defaultValue='Seleccionar tipo' style={{ display: 'none' }}>Seleccione un tipo</option>
                                                    <option className="dropdown-item" >Suite</option>
                                                    <option className="dropdown-item" >Junior Suite</option>
                                                    <option className="dropdown-item" >Grant Suite</option>
                                                    <option className="dropdown-item" >Individual</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label>Cantidad de personas</label>
                                            </td>
                                            <td>
                                                <input type='number' min='0' max='6' name='cantidadPersonas' className="form-control" value={data.cantidadPersonas} onChange={handleCustomerInputChange} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan='4'>
                                                <table className='subtable'>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan='2'>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" name="tieneNinos" value={data.tieneNinos} onChange={handleChecksOnChange} />
                                                                    <label className="form-check-label" >Nos visita con niños?</label>
                                                                </div>
                                                            </td>
                                                            <td colSpan='2'>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" name="tieneMascotas" value={data.tieneMascotas} onChange={handleChecksOnChange} />
                                                                    <label className="form-check-label" >Nos visita con mascotas?</label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label>Cantidad de niños</label>
                                                            </td>
                                                            <td>
                                                                <input style={{ marginRight: '100px' }} type='number' min='0' max='6' name='cantidadNinos' className="form-control" value={data.cantidadNinos} onChange={handleCustomerInputChange} />
                                                            </td>
                                                            <td>
                                                                <label>Cantidad de mascotas</label>
                                                            </td>
                                                            <td>
                                                                <input style={{ marginRight: '100px' }} type='number' min='0' max='6' name='cantidadMascotas' className="form-control" value={data.cantidadMascotas} onChange={handleCustomerInputChange} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='formButton' type="submit" name="button">Guardar</button>
                            </form>
                        </div>
                    </div>
                </header>
            </section>

        </>

    )
}

export default RegistroUsuario;