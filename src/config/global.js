export default {
  global: {
    componenteFormativo: 'Mercados y clasificación de clientes',
    descripcionCurso:
      'En la economía actual, las empresas son evaluadas por el mercado, qué tan bien entienden su segmento y sus clientes, es el punto de partida para permanecer y crecer dentro del sector en que se encuentran, así bien, en este componente formativo se presentarán esas bases claves para el éxito y desarrollo de estas compañías.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/images/header/6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/images/header/7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Variables de mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Criterios de segmentación de mercados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistema de monitoreo de mercados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: ' Prospección de los clientes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Servicio al cliente',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procesamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de procesamiento de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Reportes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Fichero',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Bases de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Zonificación y rutas de ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Metodología y aplicabilidad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Control de tiempos y movimientos',
            hash: 't_5_2',
          },
        ],
      },
    ],

    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ArcGis resources. (s. f.). Georreferenciación y sistemas de coordenadas.',
      link:
        'https://resources.arcgis.com/es/help/getting-started/articles/026n0000000s000000.htm',
    },
    {
      referencia:
        'Barrera, T., M. (2014). Prospección comercial en mercados altamente competidos.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/12730/MARTHA%20RUTH%20BARRERA%20TORRES.pdf?sequence=1&isAllowed=y ',
    },
    {
      referencia:
        'Guadarrama, E., y Risales, E. (2015). Marketing relacional: valor, satisfacción, lealtad y retención del cliente. Análisis y reflexión teórica. Ciencia y Sociedad, 40(2), 307-340.',
      link: 'https://www.redalyc.org/pdf/870/87041161004.pdf ',
    },
    {
      referencia:
        'Ferrell, O., y Hartline, M. (2018). Estrategia de marketing. Cengage Learning',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_elibroELB39976',
    },
    {
      referencia: 'Maslow, A. (2000). El hombre autorrealizado. Kairós SA. ',
      link:
        'https://escuelafeliz.org/wp-content/uploads/2020/10/El-Hombre-Autorrealizado.-Hacia-una-psicologia-del-Ser-Abraham-H.-Maslow.pdf',
    },
    {
      referencia:
        'Microsoft. (s. f.). Más información sobre la validación de datos',
      link:
        'https://support.microsoft.com/es-es/office/m%C3%A1s-informaci%C3%B3n-sobre-la-validaci%C3%B3n-de-datos-f38dee73-9900-4ca6-9301-8a5f6e1f0c4c ',
    },
    {
      referencia: 'Mine, M. (2022). La informatización de la sociedad',
      link: 'http://biblioteca.clacso.edu.ar/ar/libros/critica/nro7/minc.pdf',
    },
    {
      referencia:
        'Pastrán, A. (2021). El comercio electrónico en Colombia crecerá 74% en los próximos cinco años.',
      link:
        'https://www.larepublica.co/internet-economy/el-comercio-electronico-en-colombia-crecera-74-en-los-proximos-cinco-anos-3234428',
    },
    {
      referencia:
        'Rodríguez, A., I. (2007). Estrategias y técnicas de comunicación. Una visión integrada en el marketing. Editorial UOC.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_digitalia_hispanicaDIGEDIUOC046&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L ',
    },
    {
      referencia:
        'Silva, D. (2021). ¿Cómo satisfacer las necesidades de los clientes?',
      link:
        'https://www.zendesk.com.mx/blog/necesidades-del-cliente/#:~:text=Las%20necesidades%20de%20los%20clientes%20se%20definen%20como%20los%20factores,tomar%20su%20decisi%C3%B3n%20de%20compra',
    },
    {
      referencia: 'UCLA. (s.f.). Qué es procesamiento de datos. ',
      link:
        'http://www.ucla.edu.ve/dac/Departamentos/coordinaciones/informaticai/documentos/PROCESAMIENTO%20DE%20DATOS.htm',
    },
    {
      referencia: 'Universidad de Oviedo. (s. f.). Tema 6-ficheros.',
      link:
        'http://www.atc.uniovi.es/telematica/2ac/Apuntes-y-Ejercicios/T06-Ficheros.pdf',
    },
    {
      referencia:
        'Universidad del Cauca. (s. f.). Procesamiento de la información.',
      link: 'http://fccea.unicauca.edu.co/old/procesamiento.htm',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'razón de ser de la empresa. Es la persona, o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'aquel que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Fichero',
      significado:
        'conjuntos de información relacionada que están almacenados en un sistema electrónico y que son referenciados por un nombre.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable',
    },
    {
      termino: 'Plan de trabajo',
      significado:
        'planificador que posee cualidades y características dinámicas, se puede transformar a la medida de la evolución del tiempo, teniendo en cuenta el contexto social del momento, espacial y temporal. ',
    },
    {
      termino: 'Precio',
      significado:
        'valor de intercambio entre oferentes y demandantes. Es la única variable de la mezcla de mercadeo que genera ingresos para la compañía.',
    },
    {
      termino: 'Producto',
      significado:
        'objeto de la transacción. En el mercadeo moderno un producto puede ser: un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Reportes',
      significado:
        'documentos que den cuenta del proceso realizado y de los resultados obtenidos, con la finalidad de informar.',
    },
    {
      termino: 'Zonificación',
      significado:
        'acción que busca explorar y dividir en segmentos y características especiales.',
    },
  ],
  complementario: [
    {
      tema: '1.2. Criterios de Segmentación de Mercados',
      referencia:
        'Kotler, P., y Armstrong, G. (2007). Marketing, versión para Latinoamérica. Pearson Educación.',
      tipo: 'Libro digital',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000063680 ',
    },
    {
      tema: '2.1. Prospección de los clientes',
      referencia:
        'Ferrell, O., y Hartline, M. (2018). Estrategia de marketing. Cengage Learning.',
      tipo: 'Libro digital',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_elibroELB39976',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Otero Cano',
        cargo: 'Experto Temático',
        centro: 'Centro de Comercio y Servicios - Regional Cauca',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edinson Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
