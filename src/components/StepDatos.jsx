import { useState } from 'react';
import '../styles/PreCita.css';

const StepDatos = ({ onNext, onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (formData.name.length < 3) newErrors.name = "Ingrese nombre completo";
        if (!/^\d{8}$/.test(formData.dni)) newErrors.dni = "DNI debe tener 8 dígitos";
        if (!/^9\d{8}$/.test(formData.phone)) newErrors.phone = "Celular debe empezar con 9 y tener 9 dígitos";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleConfirm = () => {
        if (validate()) {
            onNext({ clientInfo: formData });
        }
    };

    return (
        <div className="step-container">
            <h2 className="step-title">Datos Personales</h2>
            <p className="step-subtitle">Información necesaria para su registro</p>

            <div className="form-group">
                <label className="input-label">Nombre y Apellido</label>
                <input 
                    type="text" 
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Ej. Juan Perez"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label className="input-label">DNI</label>
                <input 
                    type="tel" 
                    className={`form-input ${errors.dni ? 'input-error' : ''}`}
                    placeholder="8 dígitos"
                    maxLength={8}
                    value={formData.dni}
                    onChange={(e) => setFormData({...formData, dni: e.target.value.replace(/\D/g, '')})}
                />
                {errors.dni && <span className="error-text">{errors.dni}</span>}
            </div>

            <div className="form-group">
                <label className="input-label">Celular</label>
                <input 
                    type="tel" 
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="9XXXXXXXX"
                    maxLength={9}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="button-group">
                <button className="btn-secondary" onClick={onBack}>Atrás</button>
                <button className="btn-primary" onClick={handleConfirm}>Validar Datos</button>
            </div>
        </div>
    );
};

export default StepDatos;