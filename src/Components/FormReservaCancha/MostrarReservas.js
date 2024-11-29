import React from "react";

const MostrarReservas = () => {
    const reservas = JSON.parse(localStorage.getItem("reservasCanchas")) || [];

    return (
        <div>
            <h2>Reservas Registradas</h2>
            {reservas.length === 0 ? (
                <p>No hay reservas registradas.</p>
            ) : (
                <ul>
                    {reservas.map((reserva, index) => (
                        <li key={index}>{JSON.stringify(reserva)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MostrarReservas;