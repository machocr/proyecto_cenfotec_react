import React from "react";
import { useForm } from "react-hook-form";
import "./ReservaCancha.css";

const ReservaCanchaFormulario = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const watchIluminacion = watch("iluminacion", false);

    const onSubmit = (data) => {
        console.log(data);

        // Recuperar las reservas existentes de localStorage (si hay)
        const reservasExistentes = JSON.parse(localStorage.getItem("reservas")) || [];

        // Agregar la nueva reserva
        const nuevasReservas = [...reservasExistentes, data];

        // Guardar las nuevas reservas en localStorage
        localStorage.setItem("reservas", JSON.stringify(nuevasReservas));

        alert("Reserva guardada con éxito.");
    };

    return (
        <div className="form-container">
            <h1>Formulario de Reserva de Cancha</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        {...register("nombre", { required: "El nombre es obligatorio" })}
                    />
                    {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                </div>

                <div className="form-group">
                    <label>Tipo de Cancha:</label>
                    <select
                        {...register("tipoCancha", {
                            required: "Debe seleccionar un tipo de cancha",
                        })}
                    >
                        <option value="">Seleccione</option>
                        <option value="futbol">Fútbol</option>
                        <option value="tenis">Tenis</option>
                        <option value="basket">Básquetbol</option>
                    </select>
                    {errors.tipoCancha && (
                        <p className="error">{errors.tipoCancha.message}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>¿Requiere iluminación?</label>
                    <input type="checkbox" {...register("iluminacion")} />
                </div>

                {watchIluminacion && (
                    <div className="form-group">
                        <label>Horas de Iluminación:</label>
                        <input
                            type="number"
                            min="1"
                            {...register("horasIluminacion", {
                                required: "Debe especificar las horas de iluminación",
                                min: {
                                    value: 1,
                                    message: "Debe ser al menos 1 hora",
                                },
                            })}
                        />
                        {errors.horasIluminacion && (
                            <p className="error">{errors.horasIluminacion.message}</p>
                        )}
                    </div>
                )}

                <div className="form-group">
                    <label>Fecha de Reserva:</label>
                    <input
                        type="date"
                        {...register("fechaReserva", {
                            required: "Debe seleccionar una fecha de reserva",
                        })}
                    />
                    {errors.fechaReserva && (
                        <p className="error">{errors.fechaReserva.message}</p>
                    )}
                </div>

                <button type="submit" className="submit-button">
                    Reservar
                </button>
            </form>
        </div>
    );
};

export default ReservaCanchaFormulario;
