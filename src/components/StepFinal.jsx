import { tramitesData } from '../data/tramites';
import '../styles/PreCita.css';

const StepFinal = ({ data, onConfirm, onBack, isLoading }) => {
    const tramite = tramitesData.find(t => t.id === data.serviceId);

    return (
        <div className="step-container">
            <h2 className="step-title">Resumen de Pre-Cita</h2>
            <p className="step-subtitle">Verifique sus datos antes de confirmar</p>

            <div className="summary-box">
                <p><strong>Trámite:</strong> {tramite?.title}</p>
                <p><strong>Fecha:</strong> {data.date}</p>
                <p><strong>Hora:</strong> {data.time}</p>
                <hr />
                <p><strong>Cliente:</strong> {data.clientInfo.name}</p>
                <p><strong>DNI:</strong> {data.clientInfo.dni}</p>
            </div>

            <div className="button-group">
                {!isLoading && <button className="btn-secondary" onClick={onBack}>Corregir</button>}
                <button 
                    className="btn-primary" 
                    onClick={onConfirm}
                    disabled={isLoading}
                >
                    {isLoading ? "Enviando..." : "Confirmar y Finalizar"}
                </button>
            </div>
        </div>
    );
};

export default StepFinal;