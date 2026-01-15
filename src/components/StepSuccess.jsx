import '../styles/PreCita.css';

const StepSuccess = ({ data }) => {
    // 1. Verificación segura de los documentos gestionados
    const requirements = data.detailedRequirements || [];
    const managedDocs = requirements.filter(req => 
        req.status && req.status.includes('Gestión')
    );
    
    const totalManagement = managedDocs.length * 13;

    // 2. Datos del cliente (con fallback por si vienen vacíos)
    const clientName = (data.clientInfo && data.clientInfo.name) || 'Cliente';
    const clientEmail = (data.clientInfo && data.clientInfo.email) || '';

    const message = `Hola, soy ${clientName}. Registro pre-cita para ${data.serviceId || 'trámite'} el ${data.date} a las ${data.time}.`;
    const whatsappLink = `https://wa.me/51949964400?text=${encodeURIComponent(message)}`;

    return (
        <div className="step-container success-container" style={{ textAlign: 'center' }}>
            <div className="success-icon">✓</div>
            <h2 className="step-title">¡Pre-Cita Registrada!</h2>
            <p className="step-subtitle">
                Resumen enviado a: <strong>{clientEmail}</strong>
            </p>

            <div className="summary-box success-box">
                <p><strong>Ticket:</strong> #NP{Math.floor(Math.random() * 9000) + 1000}</p>
                <p><strong>Fecha:</strong> {data.date}</p>
                <p><strong>Hora:</strong> {data.time} hrs</p>
                
                {managedDocs.length > 0 && (
                    <div className="management-summary">
                        <hr style={{ borderTop: '1px solid var(--color-border-light)', margin: '12px 0' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-info)', fontWeight: 'bold' }}>
                            DOCUMENTOS PARA GESTIÓN:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem' }}>
                            {managedDocs.map((doc, idx) => (
                                <li key={idx}>• {doc.name}</li>
                            ))}
                        </ul>
                        <p><strong>Total Gestión:</strong> S/ {totalManagement.toFixed(2)}</p>
                    </div>
                )}
            </div>

            <div className="next-steps">
                <h3>Siguientes Pasos:</h3>
                <ul style={{ textAlign: 'left' }}>
                    <li>Revise su correo para el sustento legal.</li>
                    <li>Llegue 10 min antes a la sede (Trujillo).</li>
                    <li>Lleve sus documentos originales.</li>
                </ul>
            </div>

            <div className="button-group-vertical">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
                    Confirmar por WhatsApp
                </a>
                <button className="btn-secondary" onClick={() => window.location.reload()}>
                    Finalizar y Salir
                </button>
            </div>
        </div>
    );
};

export default StepSuccess;