import { useState } from 'react';
import { slotsConfig } from '../data/horarios';
import '../styles/PreCita.css';

const StepCalendar = ({ onNext, onBack }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    // Determinar si el día seleccionado es sábado
    const isSaturday = selectedDate && new Date(selectedDate).getUTCDay() === 6;
    const isSunday = selectedDate && new Date(selectedDate).getUTCDay() === 0;

    const handleConfirm = () => {
        if (selectedDate && selectedTime) {
            onNext({ date: selectedDate, time: selectedTime });
        }
    };

    return (
        <div className="step-container">
            <h2 className="step-title">Fecha y Hora</h2>
            
            <div className="input-group">
                <label className="input-label">Seleccione el día:</label>
                <input 
                    type="date" 
                    className="date-input"
                    onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedTime(""); // Resetear hora si cambia fecha
                    }}
                    min={new Date().toISOString().split('T')[0]} // No fechas pasadas
                />
            </div>

            {isSunday && <p className="error-text">Los domingos no hay atención.</p>}

            {selectedDate && !isSunday && (
                <div className="time-slots-container">
                    <h3 className="time-section-label">Horarios Disponibles</h3>
                    
                    <div className="time-grid">
                        {/* Renderizar Mañana */}
                        {(isSaturday ? slotsConfig.saturday.morning : slotsConfig.weekdays.morning).map(slot => (
                            <button 
                                key={slot} 
                                className={`time-slot-btn ${selectedTime === slot ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                        
                        {/* Renderizar Tarde solo si no es Sábado */}
                        {!isSaturday && slotsConfig.weekdays.afternoon.map(slot => (
                            <button 
                                key={slot} 
                                className={`time-slot-btn ${selectedTime === slot ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="button-group">
                <button className="btn-secondary" onClick={onBack}>Atrás</button>
                <button 
                    className="btn-primary" 
                    disabled={!selectedTime} 
                    onClick={handleConfirm}
                >
                    Confirmar Horario
                </button>
            </div>
        </div>
    );
};

export default StepCalendar;