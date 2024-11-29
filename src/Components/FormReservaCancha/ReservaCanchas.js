import React from "react";
import { useForm } from "react-hook-form";
import "./ReservaCanchas.css";

const ReservaCanchas = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const watchEquipamiento = watch("necesitaEquipamiento", false);

    const onSubmit = (data) => {
        console.log(data);
        alert("Reserva de cancha enviada con éxito");
    };

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape square"></div>
                <div className="shape triangle"></div>
            </div>

            <div className="form-container">
                <h1>Reserva de Cancha</h1>
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
                        <label>Apellido:</label>
                        <input
                            type="text"
                            {...register("apellido", {
                                required: "El apellido es obligatorio",
                            })}
                        />
                        {errors.apellido && (
                            <p className="error">{errors.apellido.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Fecha de Reserva:</label>
                        <input
                            type="date"
                            {...register("fechaReserva", {
                                required: "Debe seleccionar una fecha",
                            })}
                        />
                        {errors.fechaReserva && (
                            <p className="error">{errors.fechaReserva.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Hora de Reserva:</label>
                        <input
                            type="time"
                            {...register("horaReserva", {
                                required: "Debe seleccionar una hora",
                            })}
                        />
                        {errors.horaReserva && (
                            <p className="error">{errors.horaReserva.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Duración (en horas):</label>
                        <input
                            type="number"
                            min="1"
                            {...register("duracion", {
                                required: "Debe especificar la duración",
                                min: { value: 1, message: "La duración mínima es de 1 hora" },
                            })}
                        />
                        {errors.duracion && (
                            <p className="error">{errors.duracion.message}</p>
                        )}
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
                            <option value="basketball">Basketball</option>
                            <option value="padel">Pádel</option>
                            <option value="volleyball">Volleyball</option>
                        </select>
                        {errors.tipoCancha && (
                            <p className="error">{errors.tipoCancha.message}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>¿Necesita equipamiento?</label>
                        <input type="checkbox" {...register("necesitaEquipamiento")} />
                    </div>

                    {watchEquipamiento && (
                        <div className="form-group">
                            <label>Detalles del Equipamiento:</label>
                            <textarea
                                {...register("detallesEquipamiento", {
                                    required: "Debe especificar los detalles del equipamiento",
                                })}
                            ></textarea>
                            {errors.detallesEquipamiento && (
                                <p className="error">{errors.detallesEquipamiento.message}</p>
                            )}
                        </div>
                    )}

                    <button type="submit" className="submit-button">
                        Reservar
                    </button>
                </form>
            </div>
        </>
    );
};

export default ReservaCanchas;
