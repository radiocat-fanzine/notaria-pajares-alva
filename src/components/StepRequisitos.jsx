import { useState, useEffect } from 'react';
import { tramitesData } from '../data/tramites';
import '../styles/PreCita.css';

const StepRequisitos = ({ serviceId, onNext, onBack }) => {
    const tramite = tramitesData.find(t => t.id === serviceId);
    const [expandedItem, setExpandedItem] = useState(null);

    // Estado para documentos que el cliente YA TIENE
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem(`checks-${serviceId}`);
        return saved ? JSON.parse(saved) : {};
    });

    // Estado para documentos que el cliente SOLICITA GESTIÓN
    const [managedItems, setManagedItems] = useState(() => {
        const saved = localStorage.getItem(`managed-${serviceId}`);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(`checks-${serviceId}`, JSON.stringify(checkedItems));
        localStorage.setItem(`managed-${serviceId}`, JSON.stringify(managedItems));
    }, [checkedItems, managedItems, serviceId]);

    const handleCheck = (index) => {
        setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
        // Si marca que lo tiene, quitamos la solicitud de gestión
        if (!checkedItems[index]) {
            setManagedItems(prev => ({ ...prev, [index]: false }));
        }
    };

    const handleManagedRequest = (index) => {
        setManagedItems(prev => ({ ...prev, [index]: !prev[index] }));
        // Si pide gestión, quitamos el check de que ya lo tiene
        if (!managedItems[index]) {
            setCheckedItems(prev => ({ ...prev, [index]: false }));
        }
    };

    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    // Preparamos la data para el siguiente paso y Firebase
    const handleContinue = () => {
        const requirementsStatus = tramite?.requirements.map((req, idx) => ({
            name: req.name,
            status: managedItems[idx] ? 'Solicita Gestión (S/13)' : (checkedItems[idx] ? 'Ya lo tiene' : 'Pendiente')
        }));

        onNext({ 
            requirementsConfirmed: true, 
            detailedRequirements: requirementsStatus 
        });
    };

    return (
        <div className="step-container">
            <h2 className="step-title">{tramite?.title}</h2>
            <p className="step-subtitle">Revise los requisitos y marque su estado actual:</p>
            
            <div className="req-list">
                {tramite?.requirements.map((req, idx) => (
                    <div key={idx} className={`req-card ${checkedItems[idx] ? 'is-checked' : ''} ${managedItems[idx] ? 'is-managed' : ''}`}>
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
                            >
                                {expandedItem === idx ? '✕' : '?'}
                            </button>
                        </div>

                        {/* Opción de gestión si el trámite lo permite */}
                        {req.canBeManaged && (
                            <div className="management-option">
                                <label className="managed-label">
                                    <input 
                                        type="checkbox" 
                                        checked={!!managedItems[idx]}
                                        onChange={() => handleManagedRequest(idx)}
                                    />
                                    <span>No lo tengo, deseo que la Notaría lo gestione (S/13)</span>
                                </label>
                            </div>
                        )}

                        {expandedItem === idx && (
                            <div className="req-info-content">
                                <p>{req.info}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="notary-policy-box">
                <h4>⚠️ Importante:</h4>
                <ul>
                    <li>Partidas originales y actualizadas (máx. 2 meses).</li>
                    <li>Certificados SUNARP (máx. 3 meses).</li>
                    <li>Gestión de partidas digitales: <strong>S/13 soles</strong> (Solo mayores de edad).</li>
                    <li>Verificación obligatoria de partidas municipales.</li>
                </ul>
            </div>

            <div className="button-group">
                <button className="btn-secondary" onClick={onBack}>Atrás</button>
                <button 
                    className="btn-primary" 
                    onClick={handleContinue}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};

export default StepRequisitos;