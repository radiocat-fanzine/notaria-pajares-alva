export const tramitesData = [
    {
        id: 'sucesion-intestada',
        title: 'Sucesión Intestada',
        shortDesc: 'Reconocimiento de herederos ante fallecimiento.',
        duration: '1.5 meses aprox.',
        restriction: 'Solo si el fallecido domicilió en Trujillo o tiene bienes aquí.',
        requirements: [
            'DNI del solicitante (Copia)',
            'Partida de Defunción (Original/Actualizada < 2 meses)',
            'Partidas de Nacimiento de herederos (Original/Actualizada < 2 meses)',
            'Certificados Negativos de Sucesión y Testamento (Vigencia < 3 meses)',
            'Relación de bienes (Copias literales, tarjetas de propiedad)',
            'Partida de Matrimonio (Si aplica, < 2 meses)'
        ],
        notes: 'Basta que firme un heredero al inicio. Costo gestión partida: S/13.'
    },
    {
        id: 'rectificacion-partida',
        title: 'Rectificación de Partida',
        shortDesc: 'Corrección de datos en partidas de nacimiento, matrimonio o defunción.',
        duration: '1 mes aprox.',
        requirements: [
            'DNI del solicitante',
            'Partida a rectificar (Original/Actualizada < 2 meses)',
            'Partida de sustento (Original/Actualizada < 2 meses)',
            'Vigencia de Poder (Si representa al titular)'
        ],
        notes: 'Requiere dos firmas presenciales: Solicitud y Escritura Pública.'
    },
    {
        id: 'union-hecho',
        title: 'Unión de Hecho',
        shortDesc: 'Declaración de convivencia para fines legales y de seguros.',
        duration: '1 mes aprox.',
        requirements: [
            'DNI de ambos solicitantes',
            'Certificados Negativos de Unión de Hecho (< 3 meses)',
            'Mínimo 2 años de convivencia comprobable',
            'Certificado Domiciliario Notarial',
            '2 Testigos (Peruanos, > 25 años, no familiares)',
            'Partidas de hijos si aplica (< 2 meses)'
        ],
        notes: 'Los testigos deben ser los mismos en todo el proceso. No hay devolución por cambio de testigos.'
    }
];