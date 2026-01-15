import { useState } from 'react';
import '../styles/PreCita.css';

const StepDatos = ({ onNext, onBack }) => {
    // 1. Consolida datos en un solo objeto de estado
    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    // 2. Función de validación unificada
    const validate = () => {
        const newErrors = {};
        
        // Validación Nombre
        if (formData.name.trim().length < 3) {
            newErrors.name = "Ingrese su nombre completo";
        }
        
        // Validación DNI (8 dígitos)
        if (!/^\d{8}$/.test(formData.dni)) {
            newErrors.dni = "El DNI debe tener 8 dígitos";
        }
        
        // Validación Celular (Empieza con 9 y tiene 9 dígitos)
        if (!/^9\d{8}$/.test(formData.phone)) {
            newErrors.phone = "El celular debe empezar con 9 y tener 9 dígitos";
        }

        // Validación Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Ingrese un correo electrónico válido";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 3. Manejador de confirmación único
    const handleConfirm = () => {
        if (validate()) {
            // Enviamos clientInfo con la data consolidada
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

            <div className="form-group">
                <label className="input-label">Correo Electrónico</label>
                <input 
                    type="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="button-group">
                <button className="btn-secondary" onClick={onBack}>Atrás</button>
                <button className="btn-primary" onClick={handleConfirm}>Continuar</button>
            </div>
        </div>
    );
};

export default StepDatos;