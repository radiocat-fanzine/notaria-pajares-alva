import { useState } from 'react';
import { tramitesData } from '../data/tramites';
import '../styles/PreCita.css';

const StepRequisitos = ({ serviceId, onNext, onBack }) => {
    // Buscar la data del trámite seleccionado
    const tramite = tramitesData.find(t => t.id === serviceId);
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheck = (index) => {
        setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    // Validar que todos los requisitos estén marcados
    const allChecked = tramite?.requirements.every((_, idx) => checkedItems[idx]);

    return (
        <div className="step-container">
            <h2 className="step-title">{tramite?.title}</h2>
            <p className="step-subtitle">Confirme que tiene los documentos originales (Vigencia máx. 2 meses):</p>
            
            <div className="req-list">
                {tramite?.requirements.map((req, idx) => (
                    <label key={idx} className="req-item-check">
                        <input 
                            type="checkbox" 
                            checked={!!checkedItems[idx]}
                            onChange={() => handleCheck(idx)}
                        />
                        <span>{req}</span>
                    </label>
                ))}
            </div>

            {tramite?.restriction && (
                <div className="restriction-box">
                    <strong>Jurisdicción:</strong> {tramite.restriction}
                </div>
            )}

            <div className="button-group">
                <button className="btn-secondary" onClick={onBack}>Atrás</button>
                <button 
                    className="btn-primary" 
                    disabled={!allChecked}
                    onClick={() => onNext({ requirementsConfirmed: true })}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};

export default StepRequisitos;