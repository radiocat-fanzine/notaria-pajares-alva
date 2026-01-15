import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const usePreCita = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [appointmentData, setAppointmentData] = useState({
        serviceId: '',
        clientInfo: { name: '', dni: '', phone: '', email: '' }, // Añadido email aquí
        date: '',
        time: '',
        requirementsConfirmed: false,
        detailedRequirements: [] // Para guardar qué documentos se gestionan
    });

    const nextStep = (newData = {}) => {
        setAppointmentData(prev => ({ ...prev, ...newData }));
        setStep(s => s + 1);
    };

    const prevStep = () => {
        setStep(s => (s > 1 ? s - 1 : s));
    };

    const submitToFirebase = async () => {
        setLoading(true);
        try {
            // 1. Guardar en Firestore
            await addDoc(collection(db, "precitas"), {
                ...appointmentData,
                createdAt: serverTimestamp(),
                status: 'pending',
                source: 'web-app-trujillo'
            });
            
            // 2. LIMPIEZA DE LOCALSTORAGE
            // Borra los checks de requisitos para que el navegador quede limpio
            const sId = appointmentData.serviceId;
            localStorage.removeItem(`checks-${sId}`);
            localStorage.removeItem(`managed-${sId}`);
            
            // 3. Avanzar al paso de éxito
            setStep(6); 
        } catch (e) {
            console.error("Error al guardar la pre-cita: ", e);
            alert("Hubo un error al conectar con el servidor. Intente nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return { 
        step, 
        appointmentData, 
        nextStep, 
        prevStep,
        submitToFirebase, 
        loading 
    };
};