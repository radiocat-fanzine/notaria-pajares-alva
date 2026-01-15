import { usePreCita } from '../hooks/useGestionCita'; 

import StepTramite from '../components/StepTramite';
import StepRequisitos from '../components/StepRequisitos';
import StepCalendar from '../components/StepCalendar';
import StepDatos from '../components/StepDatos';
import StepFinal from '../components/StepFinal';
import StepSuccess from '../components/StepSuccess';

import '../styles/PreCita.css';

const PreCita = () => {
    const { step, appointmentData, nextStep, prevStep, submitToFirebase, loading } = usePreCita();

    return (
        <div className="pre-cita-layout">
            <div className="bg-overlay bg-geometric-overlay" />
            
            <div className="pre-cita-content">
                <header className="header-main">
                    <h1>Notaría Pajares Alva</h1>
                </header>

                <main className="main-card">
                    {/* Solo se muestra hasta el paso 4, el 5 es éxito/resumen */}
                    {step <= 4 && (
                        <header className="step-header">
                            <span className="step-indicator">PASO {step} DE 4</span>
                        </header>
                    )}

                    {/* Paso 1: Selección de Trámite */}
                    {step === 1 && (
                        <StepTramite onNext={nextStep} />
                    )}

                    {/* Paso 2: Check de Requisitos */}
                    {step === 2 && (
                        <StepRequisitos 
                            serviceId={appointmentData.serviceId} 
                            onNext={nextStep} 
                            onBack={prevStep}
                        />
                    )}

                    {/* Paso 3: Calendario y Horarios (Gestión de afluencia) */}
                    {step === 3 && (
                        <StepCalendar 
                            onNext={nextStep} 
                            onBack={prevStep} 
                        />
                    )}

                    {/* Paso 4: Datos Personales (DNI/Celular) */}
                    {step === 4 && (
                        <StepDatos 
                            onNext={nextStep} 
                            onBack={prevStep} 
                        />
                    )}

                    {/* Paso 5: Resumen Final y Envío a Firebase */}
                    {step === 5 && (
                        <StepFinal 
                            data={appointmentData} 
                            onConfirm={submitToFirebase} 
                            onBack={prevStep}
                            isLoading={loading}
                        />
                    )}

                    {/* Paso 6: Éxito */}
                    {step === 6 && (
                        <StepSuccess data={appointmentData} />
                    )}
                </main>
            </div>
        </div>
    );
};

export default PreCita;