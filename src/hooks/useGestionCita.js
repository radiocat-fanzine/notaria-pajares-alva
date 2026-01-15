import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const usePreCita = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [appointmentData, setAppointmentData] = useState({
        serviceId: '',
        clientInfo: { name: '', dni: '', phone: '' },
        date: '',
        time: '',
        requirementsConfirmed: false
    });

    // Función para avanzar y guardar datos parciales
    const nextStep = (newData = {}) => {
        setAppointmentData(prev => ({ ...prev, ...newData }));
        setStep(s => s + 1);
    };

    // Función para retroceder
    const prevStep = () => {
        setStep(s => (s > 1 ? s - 1 : s));
    };

    // Envío final a Firebase Firestore
    const submitToFirebase = async () => {
        setLoading(true);
        try {
            // Guardar en la colección "precitas"
            await addDoc(collection(db, "precitas"), {
                ...appointmentData,
                createdAt: serverTimestamp(),
                status: 'pending',
                // Metadata para notaría
                source: 'web-app-trujillo'
            });
            
            // Avanzar al Paso 6, mensaje final
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