import '../styles/PreCita.css';

const StepSuccess = ({ data }) => {
    // Mensaje personalizado para WhatsApp
    const message = `Hola, soy ${data.clientInfo.name}. He registrado una pre-cita para ${data.serviceId} el día ${data.date} a las ${data.time}. Quisiera confirmar los documentos necesarios.`;
    const whatsappLink = `https://wa.me/51949964400?text=${encodeURIComponent(message)}`;

    return (
        <div className="step-container success-container" style={{ textAlign: 'center' }}>
            <div className="success-icon">✓</div>
            <h2 className="step-title">¡Pre-Cita Registrada!</h2>
            <p className="step-subtitle">Su solicitud ha sido enviada con éxito a la notaría.</p>

            <div className="summary-box success-box">
                <p><strong>Ticket:</strong> #NP{Math.floor(Math.random() * 9000) + 1000}</p>
                <p><strong>Fecha:</strong> {data.date}</p>
                <p><strong>Hora:</strong> {data.time} hrs</p>
            </div>

            <div className="next-steps">
                <h3>Siguientes Pasos:</h3>
                <ul>
                    <li>Llegue 10 minutos antes de su cita.</li>
                    <li>Lleve sus documentos originales y actualizados.</li>
                    <li>Recuerde que el trámite se realiza en Trujillo.</li>
                </ul>
            </div>

            <div className="button-group-vertical">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
                    Contactar por WhatsApp
                </a>
                <button className="btn-secondary" onClick={() => window.location.reload()}>
                    Finalizar y Salir
                </button>
            </div>
        </div>
    );
};

export default StepSuccess;