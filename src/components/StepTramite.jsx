import { tramitesData } from '../data/tramites';
import '../styles/PreCita.css';

const StepTramite = ({ onNext }) => {
    return (
        <div className="step-container">
        <h2 className="step-title">Seleccione el trámite</h2>
        <div className="options-grid">
            {tramitesData.map((t) => (
            <button 
                key={t.id} 
                className="service-button"
                onClick={() => onNext({ serviceId: t.id })}
            >
                <span className="service-title">{t.title}</span>
                <span className="service-desc">{t.shortDesc}</span>
            </button>
            ))}
        </div>
        </div>
    );
};

export default StepTramite;