export const tramitesData = [
    {
        id: 'sucesion-intestada',
        title: 'Sucesión Intestada',
        shortDesc: 'Reconocimiento de herederos ante fallecimiento.',
        duration: '1.5 meses aprox.',
        restriction: 'Solo si el fallecido domicilió en Trujillo o tiene bienes aquí.',
        requirements: [
            { 
                name: 'DNI del solicitante (Copia)', 
                info: 'Copia simple legible. Se presenta el original el día de la firma para control biométrico.' 
            },
            { 
                name: 'Copia Certificada de Partida de Defunción', 
                info: 'Original/Actualizada (máx. 2 meses). Si es de RENIEC, la notaría puede gestionarla por S/13 (No aplica a menores de edad). Partidas municipales pasan por verificación de veracidad.',
                canBeManaged: true 
            },
            { 
                name: 'Copia Certificada de Partidas de Nacimiento de herederos', 
                info: 'Original/Actualizada (máx. 2 meses). La notaría puede gestionar partidas de mayores de edad por S/13. No se gestionan partidas de menores.',
                canBeManaged: true
            },
            { 
                name: 'Certificados Negativos de Sucesión y Testamento', 
                info: 'Vigencia máx. 3 meses. Puedes cotizarlos con nuestro counter al 949 964 400 o tramitarlos en SUNARP (Av. Larco).',
                canBeManaged: true
            },
            { 
                name: 'Relación de bienes (Copia Literal o Tarjetas)', 
                info: 'Documentos de SUNARP que acreditan propiedades. También puede adjuntar búsqueda de índice. Se firmará una Declaración Jurada de bienes en notaría.' 
            },
            { 
                name: 'Partida de Matrimonio (Si aplica)', 
                info: 'Original/Actualizada (máx. 2 meses). Necesaria para incluir al cónyuge como heredero.',
                canBeManaged: true
            }
        ],
        notes: 'Basta que firme un heredero al inicio. Gestión de partidas digitales: S/13 cada una.'
    },
    {
        id: 'rectificacion-partida',
        title: 'Rectificación de Partida',
        shortDesc: 'Corrección de errores en nombres, fechas o datos en partidas.',
        duration: '1 mes aprox.',
        requirements: [
            { 
                name: 'DNI del solicitante (Copia)', 
                info: 'Copia simple legible. El original se validará mediante control biométrico el día de la firma.' 
            },
            { 
                name: 'Partida a rectificar', 
                info: 'Original/Actualizada (máx. 2 meses). Es el documento que contiene el error. Si es digital de RENIEC, podemos gestionarla por S/13 (Solo mayores de edad). Partidas municipales pasan por verificación de veracidad.',
                canBeManaged: true
            },
            { 
                name: 'Partida de sustento', 
                info: 'Original/Actualizada (máx. 2 meses). Documento que acredita el dato correcto. Ejemplo: Tu partida de nacimiento para corregir tu partida de matrimonio.',
                canBeManaged: true
            },
            { 
                name: 'Vigencia de Poder (Si aplica)', 
                info: 'Si actúa en representación, adjuntar vigencia expedida por SUNARP con antigüedad no mayor a 30 días.' 
            }
        ],
        notes: 'Solo errores evidentes. La Notaría verifica la veracidad de partidas municipales antes del ingreso a trámite.'
    },
    {
        id: 'union-hecho',
        title: 'Unión de Hecho',
        shortDesc: 'Declaración de convivencia para fines legales y de seguros.',
        duration: '1 mes aprox.',
        requirements: [
            { 
                name: 'DNI de ambos solicitantes', 
                info: 'Original y copia legible. Deben acreditar libertad de estado (solteros, divorciados o viudos).' 
            },
            { 
                name: 'Certificados Negativos de Unión de Hecho', 
                info: 'Vigencia máx. 3 meses. Se gestionan en el área de counter (949 964 400). Prueban que no tienen otra convivencia inscrita en SUNARP.',
                canBeManaged: true
            },
            { 
                name: 'Mínimo 2 años de convivencia comprobable', 
                info: 'Acreditado con recibos de servicios, contratos de alquiler a nombre de ambos o documentos que demuestren vida en común.' 
            },
            { 
                name: 'Certificado Domiciliario Notarial', 
                info: 'Se gestiona en counter (949 964 400). Un representante de la notaría verificará su convivencia en el domicilio de Trujillo.',
                canBeManaged: true
            },
            { 
                name: '2 Testigos (No familiares)', 
                info: 'Peruanos, > 25 años. Deben ser los mismos durante TODO el proceso. Si varían, se inicia un trámite nuevo sin devolución del pago anterior.' 
            },
            { 
                name: 'Partidas de nacimiento de hijos (Si aplica)', 
                info: 'Original/Actualizada (máx. 2 meses). La notaría puede gestionar partidas digitales de hijos mayores de edad por S/13.',
                canBeManaged: true
            }
        ],
        notes: 'Libertad de estado obligatoria. El cambio de testigos anula el trámite pagado e inicia uno nuevo.'
    }
];