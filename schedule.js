// Schedule Database and Rendering Engine for SOPQ Course (2026-2027)

const SYLLABUS_DATA = {
  gl: {
    labels: {
      theory: "Teoría",
      lab: "Prácticas",
      project: "Proxecto",
      deliverable: "Entregar",
      due: "Límite",
      tuesday: "Martes",
      thursday: "Xoves",
      searchPlaceholder: "Buscar temas, casos...",
      filterAll: "Ver Todo",
      filterDeliverables: "Só Entregas",
      filterCurrent: "Semana Actual",
      noResults: "Non se atoparon sesións para esa busca.",
      slides: "Presentación",
      notes: "Notas",
      guidelines: "Instrucións",
      template: "Plantilla",
      workspace: "Taller"
    },
    weeks: [
      {
        week: 1,
        dates: "07 Sep - 11 Sep 2026",
        startDate: "2026-09-07",
        endDate: "2026-09-11",
        tuesday: {
          title: "Tema 1: Introdución á Simulación de Procesos Químicos",
          desc: "Conceptos básicos do deseño asistido por ordenador. Diagramas de fluxo (flowsheeting). Graos de liberdade. Estrutura sequencial modular vs. orientada a ecuacións.",
          links: [
            { text: "Presentación", href: "gl/blog/posts/cp1-intro.html" }
          ]
        },
        thursday: {
          title: "CP1: Entorno e Interface de DWSIM / Aspen Plus",
          desc: "Primeiro contacto co simulador de procesos. Selección de compoñentes químicos, modelos termodinámicos e definición de correntes de alimentación.",
          links: [
            { text: "Notas", href: "gl/blog/posts/cp1-intro.html" }
          ]
        },
        deliverable: {
          title: "Ficha de Inscrición e CP1",
          due: "13 Sep 2026"
        }
      },
      {
        week: 2,
        dates: "14 Sep - 18 Sep 2026",
        startDate: "2026-09-14",
        endDate: "2026-09-18",
        tuesday: {
          title: "Tema 2: Modelos Termodinámicos e Propiedades Físicas",
          desc: "Importancia da termodinámica en simulación. Ecuacións de estado (PR, SRK) vs. modelos de actividade (NRTL, UNIQUAC). Criterios de selección.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP2: Validación Termodinámica e Regresión de Datos",
          desc: "Simulación do equilibrio líquido-vapor (ELV). Regresión de datos experimentais para axustar parámetros binarios de interacción.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP2 & Constitución de Grupos do Proxecto (PGI)",
          due: "20 Sep 2026"
        }
      },
      {
        week: 3,
        dates: "21 Sep - 25 Sep 2026",
        startDate: "2026-09-21",
        endDate: "2026-09-25",
        tuesday: {
          title: "Tema 3: Balances de Materia e Enerxía en Sistemas Complexos",
          desc: "Fórmula xeral do balance. Correntes de recirculación. Algoritmos de converxencia (Wegstein, substitución directa). Cómputo de graos de liberdade.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP3: Operacións Unitarias de Transporte e Presión",
          desc: "Simulación de bombas, compresores, turbinas e válvulas. Cálculo de potencia, eficiencia e caídas de presión.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP3 & Proposta do Proxecto Integrador (M1)",
          due: "27 Sep 2026"
        }
      },
      {
        week: 4,
        dates: "28 Sep - 02 Out 2026",
        startDate: "2026-09-28",
        endDate: "2026-10-02",
        tuesday: {
          title: "Tema 4: Modelado e Simulación de Intercambiadores de Calor",
          desc: "Tipos de intercambiadores. Métodos de deseño e verificación (DMTL e NTU). Utilidades de calefacción e refrixeración.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP4: Simulación Detallada de Intercambiadores de Calor",
          desc: "Deseño térmico e hidráulico de intercambiadores de tubo e carcasa. Análise de ensuciamento.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP4",
          due: "04 Out 2026"
        }
      },
      {
        week: 5,
        dates: "05 Out - 09 Out 2026",
        startDate: "2026-10-05",
        endDate: "2026-10-09",
        tuesday: {
          title: "Tema 5: Reactores Químicos: Modelos Conceptuais e Cinéticos",
          desc: "Reactores ideais (conversión, rendemento, equilibrio) vs. reactores rigorosos (CSTR, PFR). Acoplamento de cinéticas químicas complexas.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP5: Reactores Químicos en Estado Estacionario",
          desc: "Comparación de modelos de reactores para a síntese de metanol. Efecto da temperatura e presión no equilibrio.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP5",
          due: "11 Out 2026"
        }
      },
      {
        week: 6,
        dates: "12 Out - 16 Out 2026",
        startDate: "2026-10-12",
        endDate: "2026-10-16",
        tuesday: {
          title: "Tema 6: Sistemas de Separación I: Destilación Atallo (Shortcut)",
          desc: "Columnas de destilación atallo. Método de Fenske-Underwood-Gilliland (FUG). Estimación de refluxo mínimo e número de etapas.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP6: Columnas de Destilación Shortcut e Flash",
          desc: "Deseño preliminar dunha columna de destilación para a separación de hidrocarburos. Curvas de refluxo vs. etapas.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP6",
          due: "18 Out 2026"
        }
      },
      {
        week: 7,
        dates: "19 Out - 23 Out 2026",
        startDate: "2026-10-19",
        endDate: "2026-10-23",
        tuesday: {
          title: "Tema 7: Sistemas de Separación II: Destilación Rigorosa",
          desc: "Modelado MESH (Materia, Equilibrio, Suma, Entalpía). Algoritmos de resolución (método de Thomas, Newton-Raphson). Columnas multifracción.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP7: Simulación Rigorosa de Columnas de Destilación (RadFrac)",
          desc: "Deseño detallado dunha columna RadFrac. Optimización do prato de alimentación e o perfil de temperaturas.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP7 & Esquema de Deseño do Proceso PGI (M2)",
          due: "25 Out 2026"
        }
      },
      {
        week: 8,
        dates: "26 Out - 30 Out 2026",
        startDate: "2026-10-26",
        endDate: "2026-10-30",
        tuesday: {
          title: "Tema 8: Análise de Sensibilidade e Especificacións de Deseño",
          desc: "Uso de ferramentas do simulador para automatizar o control e estudo do comportamento da planta. Deseño inverso (Design Specs).",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP8: Aplicación de Design Specs e Sensibilidade",
          desc: "Automatización dun bucle de recirculación axustando purgas e reactivos para manter a pureza do produto final.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP8",
          due: "01 Nov 2026"
        }
      },
      {
        week: 9,
        dates: "02 Nov - 06 Nov 2026",
        startDate: "2026-11-02",
        endDate: "2026-11-06",
        tuesday: {
          title: "Tema 9: Introdución á Optimización de Procesos",
          desc: "Formulación de problemas de optimización. Funcións obxectivo, variables de decisión, graos de liberdade de optimización. Algoritmos sen restricións.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP9: Optimización Económica de Correntes de Purga",
          desc: "Maximización do beneficio neto dun proceso químico axustando a purga mediante ferramentas de optimización de Aspen/DWSIM.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP9",
          due: "08 Nov 2026"
        }
      },
      {
        week: 10,
        dates: "09 Nov - 13 Nov 2026",
        startDate: "2026-11-09",
        endDate: "2026-11-13",
        tuesday: {
          title: "Tema 10: Optimización con Restricións e SQP",
          desc: "Métodos de programación cuadrática sucesiva (SQP). Restricións de igualdade e desigualdade. Optimización de plantas enteiras.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP10: Optimización do Bucle Reactor-Separador",
          desc: "Optimización simultánea das dimensións do reactor e a temperatura de condensación na separación para minimizar custos totais.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP10",
          due: "15 Nov 2026"
        }
      },
      {
        week: 11,
        dates: "16 Nov - 20 Nov 2026",
        startDate: "2026-11-16",
        endDate: "2026-11-20",
        tuesday: {
          title: "Tema 11: Integración Térmica e Análise Pinch",
          desc: "Recuperación de enerxía. Curvas compostas e gran curva composta. Regras do Pinch. Temperatura óptima de aproximación (DeltaT min).",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP11: Deseño dunha Rede de Intercambio Térmico",
          desc: "Determinación de servizos mínimos e síntese manual da rede térmicamente integrada para o proceso seleccionado.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP11",
          due: "22 Nov 2026"
        }
      },
      {
        week: 12,
        dates: "23 Nov - 27 Nov 2026",
        startDate: "2026-11-23",
        endDate: "2026-11-27",
        tuesday: {
          title: "Tema 12: Avaliación Económica e Análise de Sostibilidade",
          desc: "Custos de capital (CAPEX) e custos operativos (OPEX). Factor deLang. Análise do ciclo de vida e indicadores de sustentabilidade ambiental.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP12: Avaliación de Custos e Pegada de Carbono",
          desc: "Cálculo de rendibilidade (VAN, TIR) e estimación de emisións de CO2 do proceso global.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP12 & Simulación Completa do Proxecto PGI (M3)",
          due: "29 Nov 2026"
        }
      },
      {
        week: 13,
        dates: "30 Nov - 04 Dec 2026",
        startDate: "2026-11-30",
        endDate: "2026-12-04",
        tuesday: null, // Sen clase teórica
        thursday: {
          title: "Taller I de Proxecto Integrador (PGI)",
          desc: "Sesión práctica dedicada a resolver problemas de converxencia das correntes de recirculación e a axustar o deseño integrado.",
          links: [
            { text: "Instrucións PGI", href: "gl/guia-docente.html" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Avaliación de Proxecto - Enviar borrador da simulación",
          due: "06 Dec 2026"
        }
      },
      {
        week: 14,
        dates: "07 Dec - 11 Dec 2026",
        startDate: "2026-12-07",
        endDate: "2026-12-11",
        tuesday: null, // Festivo / Ponte
        thursday: {
          title: "Taller II de Proxecto Integrador (PGI)",
          desc: "Control final da simulación, avaliación económica detallada e preparación dos contidos para a memoria final de deseño.",
          links: [],
          type: "project"
        },
        deliverable: {
          title: "Proxecto: Entrega da Memoria de Deseño e Simulación Completa",
          due: "13 Dec 2026"
        }
      },
      {
        week: 15,
        dates: "14 Dec - 18 Dec 2026",
        startDate: "2026-12-14",
        endDate: "2026-12-18",
        tuesday: null,
        thursday: {
          title: "Exposición Pública do Proxecto Integrador",
          desc: "Presentación oral en grupo e defensa ante o tribunal formado por profesores do departamento. Avaliación individual por preguntas.",
          links: [
            { text: "Plantilla Presentación", href: "#" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Avaliación Oral e Presentación PGI",
          due: "17 Dec 2026"
        }
      },
      {
        week: "Exames",
        dates: "11 Xan - 22 Xan 2027",
        startDate: "2027-01-11",
        endDate: "2027-01-22",
        tuesday: {
          title: "Primeira Convocatoria de Avaliación",
          desc: "Entrega final de casos prácticos recuperados e exame de validación individual nos laboratorios informáticos.",
          links: []
        },
        thursday: null,
        deliverable: {
          title: "Avaliación Final (Exame e Portafolio)",
          due: "20 Xan 2027"
        }
      }
    ]
  },
  es: {
    labels: {
      theory: "Teoría",
      lab: "Prácticas",
      project: "Proyecto",
      deliverable: "Entregar",
      due: "Límite",
      tuesday: "Martes",
      thursday: "Jueves",
      searchPlaceholder: "Buscar temas, casos...",
      filterAll: "Ver Todo",
      filterDeliverables: "Solo Entregas",
      filterCurrent: "Semana Actual",
      noResults: "No se encontraron sesiones para esa búsqueda.",
      slides: "Presentación",
      notes: "Notas",
      guidelines: "Instrucciones",
      template: "Plantilla",
      workspace: "Taller"
    },
    weeks: [
      {
        week: 1,
        dates: "07 Sep - 11 Sep 2026",
        startDate: "2026-09-07",
        endDate: "2026-09-11",
        tuesday: {
          title: "Tema 1: Introducción a la Simulación de Procesos Químicos",
          desc: "Conceptos básicos del diseño asistido por ordenador. Diagramas de flujo (flowsheeting). Grados de libertad. Arquitectura secuencial modular vs. orientada a ecuaciones.",
          links: [
            { text: "Presentación", href: "es/blog/posts/cp1-intro.html" }
          ]
        },
        thursday: {
          title: "CP1: Entorno e Interfaz de DWSIM / Aspen Plus",
          desc: "Primer contacto con el simulador de procesos. Selección de componentes químicos, modelos termodinámicos y definición de corrientes de alimentación.",
          links: [
            { text: "Notas", href: "es/blog/posts/cp1-intro.html" }
          ]
        },
        deliverable: {
          title: "Ficha de Inscripción y CP1",
          due: "13 Sep 2026"
        }
      },
      {
        week: 2,
        dates: "14 Sep - 18 Sep 2026",
        startDate: "2026-09-14",
        endDate: "2026-09-18",
        tuesday: {
          title: "Tema 2: Modelos Termodinámicos y Propiedades Físicas",
          desc: "Importancia de la termodinámica en simulación. Ecuaciones de estado (PR, SRK) vs. modelos de actividad (NRTL, UNIQUAC). Criterios de selección.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP2: Validación Termodinámica y Regresión de Datos",
          desc: "Simulación del equilibrio líquido-vapor (ELV). Regresión de datos experimentales para ajustar parámetros binarios de interacción.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP2 y Constitución de Grupos del Proyecto (PGI)",
          due: "20 Sep 2026"
        }
      },
      {
        week: 3,
        dates: "21 Sep - 25 Sep 2026",
        startDate: "2026-09-21",
        endDate: "2026-09-25",
        tuesday: {
          title: "Tema 3: Balances de Materia y Energía en Sistemas Complejos",
          desc: "Fórmula general del balance. Corrientes de recirculación. Algoritmos de convergencia (Wegstein, sustitución directa). Cómputo de grados de libertad.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP3: Operaciones Unitarias de Transporte y Presión",
          desc: "Simulación de bombas, compresores, turbinas y válvulas. Cálculo de potencia, eficiencia y caídas de presión.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP3 y Propuesta del Proyecto Integrador (M1)",
          due: "27 Sep 2026"
        }
      },
      {
        week: 4,
        dates: "28 Sep - 02 Oct 2026",
        startDate: "2026-09-28",
        endDate: "2026-10-02",
        tuesday: {
          title: "Tema 4: Modelado y Simulación de Intercambiadores de Calor",
          desc: "Tipos de intercambiadores. Métodos de diseño y verificación (DMTL y NTU). Utilidades de calefacción y refrigeración.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP4: Simulación Detallada de Intercambiadores de Calor",
          desc: "Diseño térmico e hidráulico de intercambiadores de tubo y carcasa. Análisis de ensuciamiento.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP4",
          due: "04 Oct 2026"
        }
      },
      {
        week: 5,
        dates: "05 Oct - 09 Oct 2026",
        startDate: "2026-10-05",
        endDate: "2026-10-09",
        tuesday: {
          title: "Tema 5: Reactores Químicos: Modelos Conceptuales y Cinéticos",
          desc: "Reactores ideales (conversión, rendimiento, equilibrio) vs. reactores rigurosos (CSTR, PFR). Acoplamiento de cinéticas químicas complejas.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP5: Reactores Químicos en Estado Estacionario",
          desc: "Comparación de modelos de reactores para la síntesis de metanol. Efecto de la temperatura y presión en el equilibrio.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP5",
          due: "11 Oct 2026"
        }
      },
      {
        week: 6,
        dates: "12 Oct - 16 Oct 2026",
        startDate: "2026-10-12",
        endDate: "2026-10-16",
        tuesday: {
          title: "Tema 6: Sistemas de Separación I: Destilación Atajo (Shortcut)",
          desc: "Columnas de destilación atajo. Método de Fenske-Underwood-Gilliland (FUG). Estimación de reflujo mínimo y número de etapas.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP6: Columnas de Destilación Shortcut y Flash",
          desc: "Diseño preliminar de una columna de destilación para la separación de hidrocarburos. Curvas de reflujo vs. etapas.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP6",
          due: "18 Oct 2026"
        }
      },
      {
        week: 7,
        dates: "19 Oct - 23 Oct 2026",
        startDate: "2026-10-19",
        endDate: "2026-10-23",
        tuesday: {
          title: "Tema 7: Sistemas de Separación II: Destilación Rigurosa",
          desc: "Modelado MESH (Materia, Equilibrio, Suma, Entalpía). Algoritmos de resolución (método de Thomas, Newton-Raphson). Columnas multifracción.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP7: Simulación Rigurosa de Columnas de Destilación (RadFrac)",
          desc: "Diseño detallado de una columna RadFrac. Optimización del plato de alimentación y el perfil de temperaturas.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP7 y Esquema de Diseño del Proceso PGI (M2)",
          due: "25 Oct 2026"
        }
      },
      {
        week: 8,
        dates: "26 Oct - 30 Oct 2026",
        startDate: "2026-10-26",
        endDate: "2026-10-30",
        tuesday: {
          title: "Tema 8: Análisis de Sensibilidad y Especificaciones de Diseño",
          desc: "Uso de herramientas del simulador para automatizar el control y estudio del comportamiento de la planta. Diseño inverso (Design Specs).",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP8: Aplicación de Design Specs y Sensibilidad",
          desc: "Automatización de un bucle de recirculación ajustando purgas y reactivos para mantener la pureza del producto final.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP8",
          due: "01 Nov 2026"
        }
      },
      {
        week: 9,
        dates: "02 Nov - 06 Nov 2026",
        startDate: "2026-11-02",
        endDate: "2026-11-06",
        tuesday: {
          title: "Tema 9: Introducción a la Optimización de Procesos",
          desc: "Formulación de problemas de optimización. Funciones objetivo, variables de decisión, grados de libertad de optimización. Algoritmos sin restricciones.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP9: Optimización Económica de Corrientes de Purga",
          desc: "Maximización del beneficio neto de un proceso químico ajustando la purga mediante herramientas de optimización de Aspen/DWSIM.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP9",
          due: "08 Nov 2026"
        }
      },
      {
        week: 10,
        dates: "09 Nov - 13 Nov 2026",
        startDate: "2026-11-09",
        endDate: "2026-11-13",
        tuesday: {
          title: "Tema 10: Optimización con Restricciones y SQP",
          desc: "Métodos de programación cuadrática sucesiva (SQP). Restricciones de igualdad y desigualdad. Optimización de plantas completas.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP10: Optimización del Bucle Reactor-Separador",
          desc: "Optimización simultánea de las dimensiones del reactor y la temperatura de condensación en la separación para minimizar costes totales.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP10",
          due: "15 Nov 2026"
        }
      },
      {
        week: 11,
        dates: "16 Nov - 20 Nov 2026",
        startDate: "2026-11-16",
        endDate: "2026-11-20",
        tuesday: {
          title: "Tema 11: Integración Térmica y Análisis Pinch",
          desc: "Recuperación de energía. Curvas compuestas y gran curva compuesta. Reglas del Pinch. Temperatura óptima de aproximación (DeltaT min).",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP11: Diseño de una Red de Intercambio Térmico",
          desc: "Determinación de servicios mínimos y síntesis manual de la red térmicamente integrada para el proceso seleccionado.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP11",
          due: "22 Nov 2026"
        }
      },
      {
        week: 12,
        dates: "23 Nov - 27 Nov 2026",
        startDate: "2026-11-23",
        endDate: "2026-11-27",
        tuesday: {
          title: "Tema 12: Evaluación Económica y Análisis de Sostenibilidad",
          desc: "Costes de capital (CAPEX) y costes operativos (OPEX). Factor de Lang. Análisis del ciclo de vida e indicadores de sostenibilidad ambiental.",
          links: [
            { text: "Presentación", href: "#" }
          ]
        },
        thursday: {
          title: "CP12: Evaluación de Costes y Huella de Carbono",
          desc: "Cálculo de rentabilidad (VAN, TIR) y estimación de emisiones de CO2 del proceso global.",
          links: [
            { text: "Notas", href: "#" }
          ]
        },
        deliverable: {
          title: "CP12 y Simulación Completa del Proyecto PGI (M3)",
          due: "29 Nov 2026"
        }
      },
      {
        week: 13,
        dates: "30 Nov - 04 Dic 2026",
        startDate: "2026-11-30",
        endDate: "2026-12-04",
        tuesday: null,
        thursday: {
          title: "Taller I de Proyecto Integrador (PGI)",
          desc: "Sesión práctica dedicada a resolver problemas de convergencia de las corrientes de recirculación y a ajustar el diseño integrado.",
          links: [
            { text: "Instrucciones PGI", href: "es/guia-docente.html" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Evaluación de Proyecto - Enviar borrador de simulación",
          due: "06 Dec 2026"
        }
      },
      {
        week: 14,
        dates: "07 Dic - 11 Dic 2026",
        startDate: "2026-12-07",
        endDate: "2026-12-11",
        tuesday: null,
        thursday: {
          title: "Taller II de Proyecto Integrador (PGI)",
          desc: "Control final de la simulación, evaluación económica detallada y preparación de los contenidos para la memoria final de diseño.",
          links: [],
          type: "project"
        },
        deliverable: {
          title: "Proyecto: Entrega de Memoria de Diseño y Simulación Completa",
          due: "13 Dec 2026"
        }
      },
      {
        week: 15,
        dates: "14 Dec - 18 Dec 2026",
        startDate: "2026-12-14",
        endDate: "2026-12-18",
        tuesday: null,
        thursday: {
          title: "Exposición Pública del Proyecto Integrador",
          desc: "Presentación oral en grupo y defensa ante el tribunal formado por profesores del departamento. Evaluación individual por preguntas.",
          links: [
            { text: "Plantilla Presentación", href: "#" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Evaluación Oral y Presentación PGI",
          due: "17 Dec 2026"
        }
      },
      {
        week: "Exámenes",
        dates: "11 Ene - 22 Ene 2027",
        startDate: "2027-01-11",
        endDate: "2027-01-22",
        tuesday: {
          title: "Primera Convocatoria de Evaluación",
          desc: "Entrega final de casos prácticos recuperados y examen de validación individual en laboratorios informáticos.",
          links: []
        },
        thursday: null,
        deliverable: {
          title: "Evaluación Final (Examen y Portafolio)",
          due: "20 Ene 2027"
        }
      }
    ]
  },
  en: {
    labels: {
      theory: "Theory",
      lab: "Lab Session",
      project: "Project",
      deliverable: "Deliver",
      due: "Due Date",
      tuesday: "Tuesday",
      thursday: "Thursday",
      searchPlaceholder: "Search topics, cases...",
      filterAll: "Show All",
      filterDeliverables: "Deliverables Only",
      filterCurrent: "Current Week",
      noResults: "No sessions matched your search query.",
      slides: "Slides",
      notes: "Notes",
      guidelines: "Guidelines",
      template: "Template",
      workspace: "Workshop"
    },
    weeks: [
      {
        week: 1,
        dates: "Sep 7 - Sep 11, 2026",
        startDate: "2026-09-07",
        endDate: "2026-09-11",
        tuesday: {
          title: "Lecture 1: Introduction to Chemical Process Simulation",
          desc: "Basic concepts of computer-aided process design. Flowsheeting. Degrees of freedom. Sequential modular vs. equation-oriented architectures.",
          links: [
            { text: "Slides", href: "en/blog/posts/cp1-intro.html" }
          ]
        },
        thursday: {
          title: "CP1: DWSIM / Aspen Plus Interface & Environment",
          desc: "First contact with the process simulator. Chemical components selection, thermodynamic model definition, and feed stream configurations.",
          links: [
            { text: "Notes", href: "en/blog/posts/cp1-intro.html" }
          ]
        },
        deliverable: {
          title: "Syllabus Form & CP1 Case File",
          due: "Sep 13, 2026"
        }
      },
      {
        week: 2,
        dates: "Sep 14 - Sep 18, 2026",
        startDate: "2026-09-14",
        endDate: "2026-09-18",
        tuesday: {
          title: "Lecture 2: Thermodynamic Models & Physical Properties",
          desc: "Significance of thermodynamics in simulation. Equations of state (PR, SRK) vs. activity coefficient models (NRTL, UNIQUAC). Selection heuristics.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP2: Thermodynamic Validation & Data Regression",
          desc: "Vapor-Liquid Equilibrium (VLE) simulation. Regressing experimental binary datasets to fit interaction parameters.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP2 & Group Formation for Integrated Project (PGI)",
          due: "Sep 20, 2026"
        }
      },
      {
        week: 3,
        dates: "Sep 21 - Sep 25, 2026",
        startDate: "2026-09-21",
        endDate: "2026-09-25",
        tuesday: {
          title: "Lecture 3: Mass and Energy Balances in Complex Systems",
          desc: "General balance equations. Recycle streams. Convergence algorithms (Wegstein, direct substitution). Degrees of freedom analysis.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP3: Pressure-Changing & Transport Unit Operations",
          desc: "Simulating pumps, compressors, turbines, and valves. Power calculations, mechanical efficiencies, and line pressure drops.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP3 & Integrated Group Project Proposal (M1)",
          due: "Sep 27, 2026"
        }
      },
      {
        week: 4,
        dates: "Sep 28 - Oct 2, 2026",
        startDate: "2026-09-28",
        endDate: "2026-10-02",
        tuesday: {
          title: "Lecture 4: Heat Exchanger Modeling & Simulation",
          desc: "Heat exchanger types. Design and rating calculation methods (LMTD & NTU). Heating and cooling utility management.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP4: Detailed Simulation of Heat Exchangers",
          desc: "Thermal and hydraulic design of shell and tube exchangers. Assessing fouling factors.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP4 Case Submission",
          due: "Oct 4, 2026"
        }
      },
      {
        week: 5,
        dates: "Oct 5 - Oct 9, 2026",
        startDate: "2026-10-05",
        endDate: "2026-10-09",
        tuesday: {
          title: "Lecture 5: Chemical Reactors: Conceptual and Kinetic Models",
          desc: "Ideal models (fractional conversion, yield, equilibrium) vs. rigorous reactor models (CSTR, PFR). Incorporating kinetics.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP5: Chemical Reactors in Steady State",
          desc: "Comparing reactor models for Methanol synthesis. Influence of temperature and pressure on thermodynamic equilibrium.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP5 Case Submission",
          due: "Oct 11, 2026"
        }
      },
      {
        week: 6,
        dates: "Oct 12 - Oct 16, 2026",
        startDate: "2026-10-12",
        endDate: "2026-10-16",
        tuesday: {
          title: "Lecture 6: Separation Systems I: Shortcut Distillation",
          desc: "Shortcut column designs. Fenske-Underwood-Gilliland (FUG) method. Estimating minimum reflux ratios and theoretical stages.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP6: Shortcut Distillation Columns and Flash Drums",
          desc: "Preliminary design of a distillation column separating hydrocarbons. Plotting reflux ratio vs. stages.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP6 Case Submission",
          due: "Oct 18, 2026"
        }
      },
      {
        week: 7,
        dates: "Oct 19 - Oct 23, 2026",
        startDate: "2026-10-19",
        endDate: "2026-10-23",
        tuesday: {
          title: "Lecture 7: Separation Systems II: Rigorous Distillation",
          desc: "MESH model formulation. Mathematical solvers (Thomas algorithm, Newton-Raphson). Multi-feed and multi-draw columns.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP7: Rigorous Distillation Column Simulation (RadFrac)",
          desc: "Detailed RadFrac column design. Optimizing feed stage locations and internal temperature profiles.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP7 & Process Flow Design Scheme for PGI (M2)",
          due: "Oct 25, 2026"
        }
      },
      {
        week: 8,
        dates: "Oct 26 - Oct 30, 2026",
        startDate: "2026-10-26",
        endDate: "2026-10-30",
        tuesday: {
          title: "Lecture 8: Sensitivity Analysis and Design Specifications",
          desc: "Utilizing simulation blocks to automate plant control and parametric studies. Inverse calculations (Design Specs).",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP8: Implementing Design Specs and Parametric Studies",
          desc: "Automating recycle loops by manipulating purge ratios and reactants to maintain target product purities.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP8 Case Submission",
          due: "Nov 1, 2026"
        }
      },
      {
        week: 9,
        dates: "Nov 2 - Nov 6, 2026",
        startDate: "2026-11-02",
        endDate: "2026-11-06",
        tuesday: {
          title: "Lecture 9: Introduction to Process Optimization",
          desc: "Formulating mathematical optimization models. Objective functions, decision variables, optimization degrees of freedom. Unconstrained methods.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP9: Economic Optimization of Plant Purges",
          desc: "Maximizing the net profit of a chemical process by optimizing purge stream ratios with DWSIM/Aspen solvers.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP9 Case Submission",
          due: "Nov 8, 2026"
        }
      },
      {
        week: 10,
        dates: "Nov 9 - Nov 13, 2026",
        startDate: "2026-11-09",
        endDate: "2026-11-13",
        tuesday: {
          title: "Lecture 10: Constrained Optimization & SQP",
          desc: "Successive Quadratic Programming (SQP) methods. Equality and inequality constraints. Global plant-wide optimization.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP10: Optimization of a Reactor-Separator Loop",
          desc: "Simultaneous optimization of reactor volume and separator condenser temperature to minimize total capitalized costs.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP10 Case Submission",
          due: "Nov 15, 2026"
        }
      },
      {
        week: 11,
        dates: "Nov 16 - Nov 20, 2026",
        startDate: "2026-11-16",
        endDate: "2026-11-20",
        tuesday: {
          title: "Lecture 11: Heat Integration & Pinch Analysis",
          desc: "Energy recovery. Composite and Grand Composite curves. Pinch rules. Optimal minimum approach temperatures (Delta T min).",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP11: Synthesis of a Heat Exchanger Network",
          desc: "Determining minimum heating/cooling utility targets and building the network manually using Pinch criteria.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP11 Case Submission",
          due: "Nov 22, 2026"
        }
      },
      {
        week: 12,
        dates: "Nov 23 - Nov 27, 2026",
        startDate: "2026-11-23",
        endDate: "2026-11-27",
        tuesday: {
          title: "Lecture 12: Economic Evaluation and Life Cycle Analysis",
          desc: "Capital expenditure (CAPEX) vs. operational expenditure (OPEX). Lang factor method. Life Cycle Assessment (LCA) indicators.",
          links: [
            { text: "Slides", href: "#" }
          ]
        },
        thursday: {
          title: "CP12: Plant Capital Costs & Carbon Footprint Calculation",
          desc: "Project profitability metrics (NPV, IRR) and total process CO2 emission estimates.",
          links: [
            { text: "Notes", href: "#" }
          ]
        },
        deliverable: {
          title: "CP12 & Completed PGI Process Simulation (M3)",
          due: "Nov 29, 2026"
        }
      },
      {
        week: 13,
        dates: "Nov 30 - Dec 4, 2026",
        startDate: "2026-11-30",
        endDate: "2026-12-04",
        tuesday: null,
        thursday: {
          title: "Integrated Group Project Workshop I (PGI)",
          desc: "Hands-on work solving recycle stream convergence errors and balancing the heat integrated networks.",
          links: [
            { text: "Syllabus Guidelines", href: "en/guia-docente.html" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Project Milestone: Simulation Draft Submission",
          due: "Dec 6, 2026"
        }
      },
      {
        week: 14,
        dates: "Dec 7 - Dec 11, 2026",
        startDate: "2026-12-07",
        endDate: "2026-12-11",
        tuesday: null,
        thursday: {
          title: "Integrated Group Project Workshop II (PGI)",
          desc: "Final checks on convergence, sizing of major equipment, economic calculations, and draft report auditing.",
          links: [],
          type: "project"
        },
        deliverable: {
          title: "Project Final: Simulation Files & Design Report Due",
          due: "Dec 13, 2026"
        }
      },
      {
        week: 15,
        dates: "Dec 14 - Dec 18, 2026",
        startDate: "2026-12-14",
        endDate: "2026-12-18",
        tuesday: null,
        thursday: {
          title: "Integrated Group Project Oral Presentation",
          desc: "Oral group presentations and defenses before the faculty committee. Followed by individual Q&A sessions.",
          links: [
            { text: "Presentation Template", href: "#" }
          ],
          type: "project"
        },
        deliverable: {
          title: "Oral Defense & Presentation Slides Due",
          due: "Dec 17, 2026"
        }
      },
      {
        week: "Exams",
        dates: "Jan 11 - Jan 22, 2027",
        startDate: "2027-01-11",
        endDate: "2027-01-22",
        tuesday: {
          title: "Final Term Assessment Slot",
          desc: "Individual computer-based lab verification test and final portfolio catch-ups.",
          links: []
        },
        thursday: null,
        deliverable: {
          title: "Final Portfolio & Validation Exam",
          due: "Jan 20, 2027"
        }
      }
    ]
  }
};

// Rendering Engine Function
function initSOPQSchedule() {
  const container = document.getElementById("schedule-timeline");
  if (!container) return;
  
  // 1. Detect language
  let lang = 'gl';
  const path = window.location.pathname;
  if (path.indexOf('/es/') !== -1) {
    lang = 'es';
  } else if (path.indexOf('/en/') !== -1) {
    lang = 'en';
  }
  
  const syllabus = SYLLABUS_DATA[lang];
  const labels = syllabus.labels;
  
  // 2. Render Search & Controls
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "schedule-controls";
  controlsDiv.innerHTML = `
    <div class="filter-btn-group">
      <button class="filter-btn active" id="btn-all">${labels.filterAll}</button>
      <button class="filter-btn" id="btn-deliverables">${labels.filterDeliverables}</button>
      <button class="filter-btn" id="btn-current">${labels.filterCurrent}</button>
    </div>
    <div class="search-box">
      <input type="text" id="schedule-search" placeholder="${labels.searchPlaceholder}" class="form-control" style="max-width: 300px; border-radius: 6px;">
    </div>
  `;
  container.parentNode.insertBefore(controlsDiv, container);
  
  // Find relative path prefix for slides/notes
  const prefix = window.SOPQ_PATH_PREFIX || '';
  
  // 3. Render Cards
  function renderCards(filterType = 'all', searchQuery = '') {
    container.innerHTML = '';
    
    // Get current date to highlight active week
    const now = new Date();
    // For demo purposes, if we are in 2026, use real date. 
    // If not, we can simulate a date inside the semester (e.g. Sept 20, 2026) to demonstrate active highlighting!
    let currentDate = now;
    if (now.getFullYear() !== 2026 && now.getFullYear() !== 2027) {
      currentDate = new Date("2026-09-20"); // Simulation date (Week 2)
    }
    
    let renderedCount = 0;
    
    syllabus.weeks.forEach(item => {
      // Apply filters
      if (filterType === 'deliverables' && !item.deliverable) return;
      
      const start = new Date(item.startDate);
      const end = new Date(item.endDate);
      const isCurrent = currentDate >= start && currentDate <= end;
      
      if (filterType === 'current' && !isCurrent) return;
      
      // Apply search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const tMatch = item.tuesday && (item.tuesday.title.toLowerCase().includes(query) || item.tuesday.desc.toLowerCase().includes(query));
        const thMatch = item.thursday && (item.thursday.title.toLowerCase().includes(query) || item.thursday.desc.toLowerCase().includes(query));
        const delMatch = item.deliverable && item.deliverable.title.toLowerCase().includes(query);
        const dateMatch = item.dates.toLowerCase().includes(query);
        
        if (!tMatch && !thMatch && !delMatch && !dateMatch) return;
      }
      
      renderedCount++;
      
      // Create card element
      const card = document.createElement("div");
      card.className = `timeline-week-card${isCurrent ? ' current-week' : ''}`;
      
      // Left side: Week Info
      const weekLabel = typeof item.week === 'number' ? `W${item.week}` : item.week;
      
      // Right side: Sessions & Deliverables
      let detailsHtml = '';
      
      // Tuesday Session
      if (item.tuesday) {
        let linksHtml = '';
        if (item.tuesday.links && item.tuesday.links.length > 0) {
          linksHtml = `<div class="session-links">` + 
            item.tuesday.links.map(l => {
              // Adjust link href relative to current page location using the computed prefix
              const resolvedHref = l.href.startsWith('http') || l.href === '#' ? l.href : prefix + l.href;
              return `<a href="${resolvedHref}" class="session-link"><i class="bi bi-file-earmark-text"></i> ${l.text}</a>`;
            }).join('') + `</div>`;
        }
        
        detailsHtml += `
          <div class="session-row">
            <span class="session-badge theory">${labels.theory}</span>
            <div class="session-content">
              <div class="session-title">${item.tuesday.title}</div>
              <div class="session-desc">${item.tuesday.desc}</div>
              ${linksHtml}
            </div>
          </div>
        `;
      }
      
      // Thursday Session
      if (item.thursday) {
        let linksHtml = '';
        if (item.thursday.links && item.thursday.links.length > 0) {
          linksHtml = `<div class="session-links">` + 
            item.thursday.links.map(l => {
              const resolvedHref = l.href.startsWith('http') || l.href === '#' ? l.href : prefix + l.href;
              return `<a href="${resolvedHref}" class="session-link"><i class="bi bi-file-earmark-code"></i> ${l.text}</a>`;
            }).join('') + `</div>`;
        }
        
        const badgeClass = item.thursday.type === 'project' ? 'project' : 'lab';
        const badgeLabel = item.thursday.type === 'project' ? labels.project : labels.lab;
        
        detailsHtml += `
          <div class="session-row">
            <span class="session-badge ${badgeClass}">${badgeLabel}</span>
            <div class="session-content">
              <div class="session-title">${item.thursday.title}</div>
              <div class="session-desc">${item.thursday.desc}</div>
              ${linksHtml}
            </div>
          </div>
        `;
      }
      
      // Deliverables
      if (item.deliverable) {
        detailsHtml += `
          <div class="week-deliverables">
            <div class="deliverable-item">
              <div>
                <strong class="deliverable-title"><i class="bi bi-exclamation-triangle-fill me-1"></i> ${labels.deliverable}:</strong>
                <span class="ms-1">${item.deliverable.title}</span>
              </div>
              <span class="deliverable-due">${labels.due}: ${item.deliverable.due}</span>
            </div>
          </div>
        `;
      }
      
      card.innerHTML = `
        <div class="week-info">
          <div class="week-number">${weekLabel}</div>
          <div class="week-dates">${item.dates}</div>
        </div>
        <div class="week-details">
          ${detailsHtml}
        </div>
      `;
      
      container.appendChild(card);
    });
    
    if (renderedCount === 0) {
      container.innerHTML = `
        <div class="alert alert-info text-center py-4 my-3" style="border-radius: 8px;">
          <i class="bi bi-info-circle fs-3 d-block mb-2"></i>
          ${labels.noResults}
        </div>
      `;
    }
  }
  
  // 4. Hook Event Listeners
  let activeFilter = 'all';
  let activeSearch = '';
  
  function updateFilters() {
    renderCards(activeFilter, activeSearch);
  }
  
  document.getElementById("btn-all").addEventListener("click", function(e) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    activeFilter = 'all';
    updateFilters();
  });
  
  document.getElementById("btn-deliverables").addEventListener("click", function(e) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    activeFilter = 'deliverables';
    updateFilters();
  });
  
  document.getElementById("btn-current").addEventListener("click", function(e) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    activeFilter = 'current';
    updateFilters();
  });
  
  document.getElementById("schedule-search").addEventListener("input", function(e) {
    activeSearch = e.target.value;
    updateFilters();
  });
  
  // 5. Initial Render
  renderCards();
}

// Automatically boot up when window loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSOPQSchedule);
} else {
  initSOPQSchedule();
}
