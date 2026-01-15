import { useState, useEffect } from 'react';
import { tramitesData } from '../data/tramites';
import '../styles/PreCita.css';

const StepRequisitos = ({ serviceId, onNext, onBack }) => {
    const tramite = tramitesData.find(t => t.id === serviceId);
    
    // Estado para controlar qué ítem tiene la información desplegada
    const [expandedItem, setExpandedItem] = useState(null);

    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem(`checks-${serviceId}`);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(`checks-${serviceId}`, JSON.stringify(checkedItems));
    }, [checkedItems, serviceId]);

    const handleCheck = (index) => {
        setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const allChecked = tramite?.requirements.every((_, idx) => checkedItems[idx]);

    return (
        <div className="step-container">
            <h2 className="step-title">{tramite?.title}</h2>
            <p className="step-subtitle">Marque los documentos que ya tiene listos:</p>
            
            <div className="req-list">
                {tramite?.requirements.map((req, idx) => (
                    <div key={idx} className={`req-card ${checkedItems[idx] ? 'is-checked' : ''}`}>
                        <div className="req-main-row">
                            <label className="req-item-check">
                                <input 
                                    type="checkbox" 
                                    checked={!!checkedItems[idx]}
                                    onChange={() => handleCheck(idx)}
                                />
                                <span className="req-name">{req.name}</span>
                            </label>
                            
                            <button 
                                type="button"
                                className={`btn-info-toggle ${expandedItem === idx ? 'active' : ''}`}
                                onClick={() => toggleExpand(idx)}
                                title="Saber más"
                            >
                                {expandedItem === idx ? '✕' : '?'}
                            </button>
                        </div>

                        {expandedItem === idx && (
                            <div className="req-info-content">
                                <p>{req.info}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Cuadro de Políticas Generales */}
            <div className="notary-policy-box">
                <h4>⚠️ Importante:</h4>
                <ul>
                    <li>Partidas originales y actualizadas (máx. 2 meses).</li>
                    <li>Certificados SUNARP (máx. 3 meses).</li>
                    <li>Gestión de partidas digitales: <strong>S/13 soles</strong> (Solo mayores de edad).</li>
                    <li>Verificación obligatoria de partidas municipales.</li>
                </ul>
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