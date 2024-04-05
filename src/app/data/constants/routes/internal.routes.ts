import { NonNullableFormBuilder } from "@angular/forms";

export const ROUTES_PATHS = {
  AUTH: {
      LOGIN: 'login'
  },

  HOME:{
      DEFAULT: '',
      CONFIGURATION: 'configuracion',
      CONTABILIDAD: 'contabilidad',
      SRI: 'sri',
      CTAS_X_PAGAR: 'ctas-pagar',
      CTAS_X_COBRAR: 'ctas-cobrar',
      CATALOGO: 'catalogo',
      FACTURACION: 'facturacion',
      ESTUDIANTES: 'estudiantes',
      POSGRADO: 'posgrado'
  },

  CONFIGURATION_MAESTROS: {
      HOME :'menu',
      LLAVES: 'llaves',
      SEGURIDAD: 'seguridad',
      PERFIL: 'perfil',
      PERFIL_CAMBIO: 'perfil-cambio',
      EMPRESA: 'empresa',
      ROLES: 'roles',
      LISTAR_PERFILES: 'listar-perfiles',
      PERSONA_PERFIL: 'persona-perfil/'
  },

  CONTABILIDAD_MAESTROS: {
      CONTABILIDAD_DEFAULT:'',
      INDEX:'index',
      CUENTAS_CONTABLES:'cuentas-contables',
      PERIODO_CONTABLE:'periodo-contable',
      PERIODO_CONTABLE_ACT:'periodo-contable-act',
      PERIODO_CONTABLE_NUEVO:'periodo-contable-nuevo',
      PARAMETROS_CONTABLES:'parametros-contables',
      DEPARTAMENTOS_CONTABLES:'departamentos-contables',
      PROYECTOS:'proyectos-contables',
      PROYECTOS_ACT:'proyectos-contables-act',
      ESTADOS_FINANCIEROS_CONTABLES:'estados-financieros-contables',
      TIPOS_DE_ASIENTOS: 'tipos-asientos',
      TIPOS_DE_ASIENTOS_ACT: 'tipos-asientos-act',
      PRESUPUESTO_CONTABLE: 'presupuesto-contable',
      // Como es la pagina que hizo rubros bancarios
      TARJETAS_CREDITO: 'tarjetas-credito',

  },

  CONTABILIDAD_TRANSACCIONALES: {
      ASIENTOS: 'asientos',
      REASIGNACION_PRESUPUESTO: 'reasignacion-presupuesto',
      DISMINUCION_PRESUPUESTO: 'disminucion-presupuesto',
      NUEVO_PRESUPUESTO: 'nuevo-presupuesto-contable',
      NUEVO_ASIENTO: 'nuevo-asiento',
      PROCESO_CIERRE: 'proceso-cierre'
  },

  CONTABILIDAD_REPORTES:{
      REPORTE_PLAN_CUENTA: 'reporte-plan-cuenta'
  },

  SRI: {
    HOME :'',
    INDEX_SRI :'menu',
    DOCUMENTOS_NO_FIRMADOS: 'generar-retenciones',
    DOCUMENTOS_FIRMADOS: 'documentos-firmados',
    FIRMA_ELECTRONICA: 'firma-electronica',
    FIRMA_DOC_SAFEI: 'firma-documento-safei'
  },

  FACTURACION: {
    DEFAULT :'',
    INDEX_FACTURACION :'menu',
    FACTURAS_SAFEI: 'facturas-safei',
    // MAESTROS
    CLIENTES: 'clientes',
    // CATALOGO_PRODUCTOS: 'catalogo-productos',
    DESCUENTOS: 'descuentos',
    PARAMETROS: 'parametros',
    PUNTO_EMISION_FACTURA: 'punto-emision-factura',
    PUNTO_EMISION_NOTA_CREDITO: 'punto-emision-nota-credito',
    PUNTO_EMISION_NOTA_DEBITO: 'punto-emision-nota-debito',
    // TRANSACCIONES
    FACTURA: 'factura',
    FACTURA_LISTA: 'factura-lista',
    DEV_NOTA_CREDITO: 'devolucion-nota-de-credito',
    CUOTAS: 'cuotas',
    DEPOSITOS_ESPECIALES: 'dépósitos-especiales',

    // REPORTES
    CUADRE_CAJA: 'cuadre-de-cajas',
    VENTAS_PRODUCTO: 'ventas-productos',
    DIARIO_VENTAS: 'diario-ventas',
    ESTADO_CUOTAS: 'estado-cuotas',
    ESTADO_CUOTAS_PAGADAS: 'estado-cuotas-pagadas',
  },

  PODGRADO: {
    DEFAULT :'',
    INDEX_PODGRADO :'menu',
    POSGRADO_CARRERAS :'progamas-posgrado',
    POSGRADO_MAESTRANTES :'estudiantes-posgrado',
    POSGRADO_CUOTAS :'cuotas-posgrado',
    POSGRADO_CUOTAS_ASIGNAR :'asignar-cuotas-posgrado',
  },

  CTAS_X_PAGAR: {
    DEFAULT:'',
    INDEX:'index',
    //PARAMETROS
    PARAMETROS: 'parametros',
    //RUBROS BANCARIOS
    RUBROS_BANCARIOS: 'rubros-bancarios',
    //RUBROS CAJA
    RUBROS_CAJA: 'rubros-caja',
    //CAJA CHICA
    CAJA_CHICA: 'caja-chica',
    //BANCOS
    BANCOS: 'bancos',
    BANCO_NUEVO: 'banco-nuevo',
    BANCO_EDITAR: 'banco-editar',
    BANCO_ELIMINAR: 'banco-eliminar',
    //TIPOS DOCUMENTOS
    TIPOS_DOCUMENTOS: 'tipos-documentos',
    TIPOS_DOCUMENTOS_NUEVO: 'tipos-documentos-nuevo',
    TIPOS_DOCUMENTOS_EDITAR: 'tipos-documentos-editar',
    TIPOS_DOCUMENTOS_ELIMINAR: 'tipos-documentos-eliminar',
    //DETALLES TIPOS DOCUMENTOS
    NUEVO_DOCUMENTO: 'nuevo-documento',
    //PUNTOS DE EMISION DE RETENCIONES
    PTOS_EMISION_RETENCIONES: 'puntos-de-emision-de-retenciones',
    //DOCUMENTOS DE PROVEEDOR
    DOCUMENTO_PROVEEDOR:'documento-proveedor',
    //MOVIMIENTOS BANCARIOS
    MOVIMIENTOS_BANCARIOS: 'movimientos-bancarios',
    MOVIMIENTOS_BANCARIOS_NUEVO: 'nuevo-movimiento-bancario',
    MOVIMIENTOS_BANCARIOS_EDITAR: 'editar-movimientos-de-caja',
    //MOVIMIENTOS DE CAJA
    MOVIMIENTOS_DE_CAJA: 'movimientos-de-caja',
    MOVIMIENTOS_DE_CAJA_NUEVO: 'nuevo-movimientos-de-caja',
    MOVIMIENTOS_DE_CAJA_EDITAR: 'editar-movimientos-de-caja',

    CRUCE_DE_ANTICIPOS: 'cruce-de-anticipos',
    CONCILIACION_BANCARIA: 'conciliacion-bancaria',

    FIRMAR_MOVIMIENTOS_BANCARIOS: 'firmar-movimientos-bancarios',


    VER_IMAGEN:'ver-imagen',
    EMISION_DE_RETENCIONES: 'emision-de-retenciones',
    NUEVO_EMISION_DE_RETENCIONES: 'nuevo-emision-de-retenciones'
  },

  CTAS_X_COBRAR: {
    DEFAULT:'',
    INDEX_CTAS_X_COBRAR:'index',
    //  CAJAS
    PARAMETRO: 'parametros',
    ANTICIPOS: 'anticipos',
    ANTICIPO_BANCARIOS: 'anticipos-bancarios',
    ANTICIPO_EFECTIVO: 'anticipos-efectivo',
    COBRO_EFECTIVO: 'cobro-efectivo',
    COBRO_CHEQUE: 'cobro-cheque',
    COBRO_TARJETA: 'cobro-tarjeta',
    COBRO_RETENCIONES: 'retenciones',
    CRUCE_ANTICIPO_EFECTIVO: 'cruce-anticipo-efectivo',

    REPORTE_CUENTAS_COBRAR: 'reporte-cuentas-cobrar',
    REPORTE_ANTICIPOS: 'reporte-anticipos',
  },

  CATALOGO: {
    DEFAULT:'',
    INDEX:'index',
    //CATALOGO CLIENTES
    CLIENTES: 'clientes',
    NUEVO_CLIENTE: 'nuevo-cliente',
    EDITAR_CLIENTE: 'editar-cliente',
    //VENDEDORES
    VENDEDORES: 'vendedores',
    NUEVO_VENDEDOR: 'nuevo-vendedor',
    EDITAR_VENDEDOR: 'editar-vendedor',
    //CATALOGO PRODUCTOS
    PRODUCTOS: 'productos',
    NUEVO_PRODUCTOS: 'nuevo-productos',
    EDITAR_PRODUCTOS: 'editar-productos',
    //CATALOGO CAT_UNIDAD ACADEMICA
    UNIDAD_ACADEMICA: 'unidad-academica',
    NUEVO_UNIDAD_ACADEMICA: 'nuevo-unidad-academica',
    EDITAR_UNIDAD_ACADEMICA: 'editar-unidad-academica',
    //CATALOGO CAT_PERIODO_ACADEMICO
    PERIODO_ACADEMICO: 'periodo-academico',
    NUEVO_PERIODO_ACADEMICO: 'nuevo-periodo-academico',
    EDITAR_PERIODO_ACADEMICO: 'editar-periodo-academico',
    //CATALOGO RETENCION
    //CONCEPTOS_RETENCION: 'cmb-conceptos-retencion',
    NUEVO_CONCEPTO_RETENCION: 'nuevo-conceptos-retencion',
    CONCEPTOS_RETENCION: 'conceptos-retencion',
    EDITAR_CONCEPTO_RETENCION: 'editar-conceptos-retencion',

    //CATALOGO IMPUESTOS
    NUEVO_IMPUESTO: 'inventario-lineas',
    LISTA_IMPUESTOS: 'inventario-lineas',
    EDITAR_IMPUESTO: 'editar-impuesto',


    //CATALOGO PROVEEDORES
    LISTA_PROVEEDORES: 'proveedores',
    NUEVO_PROVEEDORES: 'nuevo-proveedores',
    EDITAR_PROVEEDORES: 'editar-proveedores',



    //MARCA
    MARCA: 'marca',
    //LINEA
    LINEA: 'linea',
    //GRUPO
    GRUPO: 'grupo',
    //UNIDADES
    UNIDADES: 'unidades',
    //TIPOS DE PRECIOS
    TIPOS_PRECIOS: 'tipos-de-precios',
    //DESCUENTOS
    DESCUENTOS: 'descuentos',
    //DESCUENTOS
    TARJETA_CREDITO: 'tarjeta-credito',
  },

  ESTUDIANTES: {
    DEFAULT :'',
    INDEX_MAESTRANTES :'index',
    INGRESO_MAESTRANTES: 'maestrantes-ingreso',
    INGRESO_ESTUDIANTES_LIGA_PRO: 'ingreso-estudiantes-liga-pro',
    INGRESO_ESTUDIANTES_ONLINE: 'ingreso-estudiantes-online',
    REPORTES_PAGOS_SAFEI_CARRERA_ONLINE: 'reportes-pagos-safei-carrera-online',
    CALCULAR_VALORES_PAGAR: 'calcular-valores-pagar',
    UNIDAD_ACADEMICA: 'unidad-academica',
    CARRERAS: 'carreras'
  },

  SERVER:{
      E_404: 'page-404'
  },


};

// Esta constante debera ser creada en la base de datos con el NonNullableFormBuilder
// que se coloque aqui
export const INTERNAL_PATHS = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,

    /**
     * HOME
     */
    HOME_DEFAULT: `${ROUTES_PATHS.HOME.DEFAULT}`,
    HOME_CONFIGURATION: `${ROUTES_PATHS.HOME.CONFIGURATION}`,
    HOME_CONTABILIDAD: `${ROUTES_PATHS.HOME.CONTABILIDAD}`,
    HOME_SRI: `${ROUTES_PATHS.HOME.SRI}`,
    HOME_CTAS_X_PAGAR: `${ROUTES_PATHS.HOME.CTAS_X_PAGAR}`,
    HOME_CTAS_X_COBRAR: `${ROUTES_PATHS.HOME.CTAS_X_COBRAR}`,
    HOME_CATALOGO: `${ROUTES_PATHS.HOME.CATALOGO}`,
    HOME_FACTURACION: `${ROUTES_PATHS.HOME.FACTURACION}`,
    HOME_ESTUDIANTES: `${ROUTES_PATHS.HOME.ESTUDIANTES}`,
    HOME_POSGRADO: `${ROUTES_PATHS.HOME.POSGRADO}`,

    /**
     * CONFIGURACION
     */
    //MAESTROS CONFIGURACION
    CONFIGURACION_LLAVES: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.LLAVES}`,
    CONFIGURACION_HOME: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.HOME}`,
    CONFIGURACION_SEGURIDAD: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.SEGURIDAD}`,
    CONFIGURACION_PERFIL: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.PERFIL}`,
    CONFIGURACION_PERFIL_CAMBIO: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.PERFIL_CAMBIO}`,
    CONFIGURACION_EMPRESA: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.EMPRESA}`,
    CONFIGURACION_ROLES: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.ROLES}`,
    CONFIGURACION_LISTAR_PERFILES: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.LISTAR_PERFILES}`,
    CONFIGURACION_PERSONA_PERFIL: `${ROUTES_PATHS.CONFIGURATION_MAESTROS.PERSONA_PERFIL}`,

    /**
     * CONTABILIDAD
     */
    //MAESTROS CONTABILIDAD
    C_INDEX_DEFAULT: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.CONTABILIDAD_DEFAULT}`,
    C_INDEX: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.INDEX}`,
    C_CUENTAS_CONTABLES: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.CUENTAS_CONTABLES}`,
    C_PERIODO_CONTABLE: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PERIODO_CONTABLE}`,
    C_PERIODO_CONTABLE_ACT: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PERIODO_CONTABLE_ACT}`,
    C_PARAMETROS_CONTABLES: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PARAMETROS_CONTABLES}`,
    C_PROYECTOS_CONTABLES: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PROYECTOS}`,
    C_PROYECTOS_CONTABLES_ACT: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PROYECTOS_ACT}`,
    C_DEPARTAMENTOS_CONTABLES: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.DEPARTAMENTOS_CONTABLES}`,
    C_ESTADOS_FINANCIEROS_CONTABLES: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.ESTADOS_FINANCIEROS_CONTABLES}`,
    C_TIPOS_ASIENTOS : `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.TIPOS_DE_ASIENTOS}`,
    C_TIPOS_ASIENTOS_ACT : `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.TIPOS_DE_ASIENTOS_ACT}`,
    //TARJETAS_CREDITO
    C_TARJETAS_CREDITO:`${ROUTES_PATHS.CONTABILIDAD_MAESTROS.TARJETAS_CREDITO}`,



    //TRANSACCIONES CONTABILIDAD
    C_ASIENTOS: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.ASIENTOS}`,
    T_NUEVO_ASIENTO: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.NUEVO_ASIENTO}`,

    C_PRESUPUESTO_CONTABLE: `${ROUTES_PATHS.CONTABILIDAD_MAESTROS.PRESUPUESTO_CONTABLE}`,
    T_NUEVO_PRESUPUESTO: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.NUEVO_PRESUPUESTO}`,
    T_REASIGNACION_PRESUPUESTO: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.REASIGNACION_PRESUPUESTO}`,
    T_DISMINUCION_PRESUPUESTO: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.DISMINUCION_PRESUPUESTO}`,

    T_PROCESO_CIERRE: `${ROUTES_PATHS.CONTABILIDAD_TRANSACCIONALES.PROCESO_CIERRE}`,

    //REPORTES CONTABILIDAD
    R_PLAN_CUENTAS: `${ROUTES_PATHS.CONTABILIDAD_REPORTES.REPORTE_PLAN_CUENTA}`,


    /**
     * SRI
     */
    SRI_HOME: `${ROUTES_PATHS.SRI.HOME}`,
    SRI_HOME_INDEX: `${ROUTES_PATHS.SRI.INDEX_SRI}`,
    SRI_DOC_FIRMADO: `${ROUTES_PATHS.SRI.DOCUMENTOS_FIRMADOS}`,
    SRI_DOC_NO_FIRMADO: `${ROUTES_PATHS.SRI.DOCUMENTOS_NO_FIRMADOS}`,
    SRI_FIRMA_ELECTRONICA: `${ROUTES_PATHS.SRI.FIRMA_ELECTRONICA}`,
    SRI_FIRMA_DOC_SAFEI: `${ROUTES_PATHS.SRI.FIRMA_DOC_SAFEI}`,


  /**
   * FACTURACION
   */
    FACTURACION_DEFAULT: `${ROUTES_PATHS.FACTURACION.DEFAULT}`,
    FACTURACION_INDEX: `${ROUTES_PATHS.FACTURACION.INDEX_FACTURACION}`,
    FACTURACION_FACTURAS_SAFEI: `${ROUTES_PATHS.FACTURACION.FACTURAS_SAFEI}`,

    // MAESTROS
    FACTURACION_CLIENTES: `${ROUTES_PATHS.FACTURACION.CLIENTES}`,
    // FACTURACION_CAT_PRODUCTOS: `${ROUTES_PATHS.FACTURACION.CATALOGO_PRODUCTOS}`,
    FACTURACION_DESCUENTOS: `${ROUTES_PATHS.FACTURACION.DESCUENTOS}`,
    FACTURACION_PARAMETROS: `${ROUTES_PATHS.FACTURACION.PARAMETROS}`,
    FACTURACION_PUNTO_EMISION_FACTURA: `${ROUTES_PATHS.FACTURACION.PUNTO_EMISION_FACTURA}`,
    FACTURACION_PUNTO_EMISION_NOTA_CREDITO: `${ROUTES_PATHS.FACTURACION.PUNTO_EMISION_NOTA_CREDITO}`,
    FACTURACION_PUNTO_EMISION_NOTA_DEBITO: `${ROUTES_PATHS.FACTURACION.PUNTO_EMISION_NOTA_DEBITO}`,
    FACTURACION_CUOTAS: `${ROUTES_PATHS.FACTURACION.CUOTAS}`,
    FACTURACION_DEPOSITOS_ESPECIALES: `${ROUTES_PATHS.FACTURACION.DEPOSITOS_ESPECIALES}`,

    // TRANSACCIONES
    FACTURACION_FACTURA: `${ROUTES_PATHS.FACTURACION.FACTURA}`,
    FACTURACION_FACTURA_LISTA: `${ROUTES_PATHS.FACTURACION.FACTURA_LISTA}`,
    FACTURACION_DEV_NOTA_CREDITO: `${ROUTES_PATHS.FACTURACION.DEV_NOTA_CREDITO}`,

    // REPORTES
    FACTURACION_CUADRE_CAJA: `${ROUTES_PATHS.FACTURACION.CUADRE_CAJA}`,
    FACTURACION_VENTAS_PRODUCTO: `${ROUTES_PATHS.FACTURACION.VENTAS_PRODUCTO}`,
    FACTURACION_DIARIO_VENTAS: `${ROUTES_PATHS.FACTURACION.DIARIO_VENTAS}`,
    FACTURACION_ESTADO_CUOTAS: `${ROUTES_PATHS.FACTURACION.ESTADO_CUOTAS}`,
    FACTURACION_ESTADO_CUOTAS_PAGADAS: `${ROUTES_PATHS.FACTURACION.ESTADO_CUOTAS_PAGADAS}`,


    /**
    * POSGRADO
    */
    POSGRADO_DEFAULT: `${ROUTES_PATHS.PODGRADO.DEFAULT}`,
    PODGRADO_INDEX: `${ROUTES_PATHS.PODGRADO.INDEX_PODGRADO}`,

    // MAESTROS
    POSGRADO_CARRERAS: `${ROUTES_PATHS.PODGRADO.POSGRADO_CARRERAS}`,
    POSGRADO_MAESTRANTES: `${ROUTES_PATHS.PODGRADO.POSGRADO_MAESTRANTES}`,
    POSGRADO_CUOTAS: `${ROUTES_PATHS.PODGRADO.POSGRADO_CUOTAS}`,
    POSGRADO_CUOTAS_ASIGNAR: `${ROUTES_PATHS.PODGRADO.POSGRADO_CUOTAS_ASIGNAR}`,





    /**
     * CTAS X PAGAR
     */
    CTAS_PAGAR_DEFAULT: `${ROUTES_PATHS.CTAS_X_PAGAR.DEFAULT}`,
    CTAS_PAGAR_INDEX: `${ROUTES_PATHS.CTAS_X_PAGAR.INDEX}`,
    //PARAMETROS
    CTAS_PAGAR_PARAMETRO: `${ROUTES_PATHS.CTAS_X_PAGAR.PARAMETROS}`,
    //RUBROS BANCARIOS
    CTAS_PAGAR_RUBROS_BANCARIOS: `${ROUTES_PATHS.CTAS_X_PAGAR.RUBROS_BANCARIOS}`,
    //RUBROS CAJA
    CTAS_PAGAR_RUBROS_CAJA: `${ROUTES_PATHS.CTAS_X_PAGAR.RUBROS_CAJA}`,
    //CAJA CHICA
    CTAS_PAGAR_CAJA_CHICA: `${ROUTES_PATHS.CTAS_X_PAGAR.CAJA_CHICA}`,
    //BANCOS
    CTAS_PAGAR_BANCOS: `${ROUTES_PATHS.CTAS_X_PAGAR.BANCOS}`,
    CTAS_PAGAR_BANCO_NUEVO: `${ROUTES_PATHS.CTAS_X_PAGAR.BANCO_NUEVO}`,
    CTAS_PAGAR_BANCO_EDITAR: `${ROUTES_PATHS.CTAS_X_PAGAR.BANCO_EDITAR}`,
    CTAS_PAGAR_BANCO_ELIMINAR: `${ROUTES_PATHS.CTAS_X_PAGAR.BANCO_ELIMINAR}`,
    //TIPOS DE DOCUMENTOS
    CTAS_PAGAR_TIPOS_DOCUMENTOS: `${ROUTES_PATHS.CTAS_X_PAGAR.TIPOS_DOCUMENTOS}`,
    CTAS_PAGAR_TIPOS_DOCUMENTOS_NUEVO: `${ROUTES_PATHS.CTAS_X_PAGAR.TIPOS_DOCUMENTOS_NUEVO}`,
    CTAS_PAGAR_TIPOS_DOCUMENTOS_EDITAR: `${ROUTES_PATHS.CTAS_X_PAGAR.TIPOS_DOCUMENTOS_EDITAR}`,
    CTAS_PAGAR_TIPOS_DOCUMENTOS_ELIMINAR: `${ROUTES_PATHS.CTAS_X_PAGAR.TIPOS_DOCUMENTOS_ELIMINAR}`,


    //DETALLES DE TIPOS DE DOCUMENTOS
    CTAS_PAGAR_NUEVO_DOCUMENTO: `${ROUTES_PATHS.CTAS_X_PAGAR.NUEVO_DOCUMENTO}`,
    //PUNTOS DE EMISION DE RETENCIONES
    CTAS_PAGAR_PUNTOS_EMISION_RETENCIONES: `${ROUTES_PATHS.CTAS_X_PAGAR.PTOS_EMISION_RETENCIONES}`,
    CTAS_PAGAR_DOCUMENTOS_PROVEEDOR: `${ROUTES_PATHS.CTAS_X_PAGAR.DOCUMENTO_PROVEEDOR}`,

    CTAS_PAGAR_VER_IMAGEN: `${ROUTES_PATHS.CTAS_X_PAGAR.VER_IMAGEN}`,
    CTAS_PAGAR_EMISION_RETENCIONES: `${ROUTES_PATHS.CTAS_X_PAGAR.EMISION_DE_RETENCIONES}`,
    CTAS_PAGAR_NUEVO_EMISION_RETENCIONES: `${ROUTES_PATHS.CTAS_X_PAGAR.NUEVO_EMISION_DE_RETENCIONES}`,
    //MOVIMIENTOS BANCARIOS
    CTAS_PAGAR_MOVIMIENTOS_BANCARIOS: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_BANCARIOS}`,
    CTAS_PAGAR_MOVIMIENTOS_BANCARIOS_NUEVO: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_BANCARIOS_NUEVO}`,
    CTAS_PAGAR_MOVIMIENTOS_BANCARIOS_EDITAR: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_BANCARIOS_EDITAR}`,
    //MOVIMIENTOS DE CAJA
    CTAS_PAGAR_MOVIMIENTOS_DE_CAJA: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_DE_CAJA}`,
    CTAS_PAGAR_MOVIMIENTOS_DE_CAJA_NUEVO: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_DE_CAJA_NUEVO}`,
    CTAS_PAGAR_MOVIMIENTOS_DE_CAJA_EDITAR: `${ROUTES_PATHS.CTAS_X_PAGAR.MOVIMIENTOS_DE_CAJA_EDITAR}`,
    //CRUCE DE ANTICIPOS
    CTAS_PAGAR_CRUCE_ANTICIPO: `${ROUTES_PATHS.CTAS_X_PAGAR.CRUCE_DE_ANTICIPOS}`,
    //CONCILIACION BANCARIA
    CTAS_PAGAR_CONCILIACION_BANCARIA: `${ROUTES_PATHS.CTAS_X_PAGAR.CONCILIACION_BANCARIA}`,
    // FIRMAR MOVIMIENTOS BANCARIOS
    CTAS_PAGAR_FIRMAR_MOV_BANCARIOS: `${ROUTES_PATHS.CTAS_X_PAGAR.FIRMAR_MOVIMIENTOS_BANCARIOS}`,



    /**
     * CTAS X COBRAR
     */
    CTAS_COBRAR_DEFAULT: `${ROUTES_PATHS.CTAS_X_COBRAR.DEFAULT}`,
    CTAS_COBRAR_INDEX: `${ROUTES_PATHS.CTAS_X_COBRAR.INDEX_CTAS_X_COBRAR}`,
    //  PARAMETROS
    CTAS_COBRAR_PARAMETROS: `${ROUTES_PATHS.CTAS_X_COBRAR.PARAMETRO}`,
    CTAS_COBRAR_ANTICIPOS: `${ROUTES_PATHS.CTAS_X_COBRAR.ANTICIPOS}`,
    CTAS_COBRAR_ANTICIPO_BANCARIOS: `${ROUTES_PATHS.CTAS_X_COBRAR.ANTICIPO_BANCARIOS}`,
    CTAS_COBRAR_ANTICIPO_EFECTIVO: `${ROUTES_PATHS.CTAS_X_COBRAR.ANTICIPO_EFECTIVO}`,
    CTAS_COBRAR_COBRO_EFECTIVO: `${ROUTES_PATHS.CTAS_X_COBRAR.COBRO_EFECTIVO}`,
    CTAS_COBRAR_COBRO_CHEQUE: `${ROUTES_PATHS.CTAS_X_COBRAR.COBRO_CHEQUE}`,
    CTAS_COBRAR_COBRO_TARJETA: `${ROUTES_PATHS.CTAS_X_COBRAR.COBRO_TARJETA}`,
    CTAS_COBRAR_RETENCIONES: `${ROUTES_PATHS.CTAS_X_COBRAR.COBRO_RETENCIONES}`,
    CTAS_COBRAR_CRUCE_ANTICIPO_EFECTIVO: `${ROUTES_PATHS.CTAS_X_COBRAR.CRUCE_ANTICIPO_EFECTIVO}`,

    CUENTAS_X_COBRAR_REP_CXC: `${ROUTES_PATHS.CTAS_X_COBRAR.REPORTE_CUENTAS_COBRAR}`,
    CUENTAS_X_COBRAR_REP_ANTICIPOS: `${ROUTES_PATHS.CTAS_X_COBRAR.REPORTE_ANTICIPOS}`,

    /**
     * CATALOGO
     */

    CAT_DEFAULT: `${ROUTES_PATHS.CATALOGO.DEFAULT}`,
    CAT_INDEX: `${ROUTES_PATHS.CATALOGO.INDEX}`,
    //CATALOGO CLIENTES
    CAT_CLIENTES: `${ROUTES_PATHS.CATALOGO.CLIENTES}`,
    CAT_NUEVO_CLIENTES: `${ROUTES_PATHS.CATALOGO.NUEVO_CLIENTE}`,
    CAT_EDIT_CLIENTES: `${ROUTES_PATHS.CATALOGO.EDITAR_CLIENTE}`,
    //CATALOGO PRODUCTOS
    CAT_PRODUCTOS: `${ROUTES_PATHS.CATALOGO.PRODUCTOS}`,
    CAT_NUEVO_PRODUCTOS: `${ROUTES_PATHS.CATALOGO.NUEVO_PRODUCTOS}`,
    CAT_EDIT_PRODUCTOS: `${ROUTES_PATHS.CATALOGO.EDITAR_PRODUCTOS}`,
    //CATALOGO UNIDAD ACADÉMICA
    CAT_UNIDAD_ACADEMICA: `${ROUTES_PATHS.CATALOGO.UNIDAD_ACADEMICA}`,
    CAT_NUEVO_UNIDAD_ACADEMICA: `${ROUTES_PATHS.CATALOGO.NUEVO_UNIDAD_ACADEMICA}`,
    CAT_EDIT_UNIDAD_ACADEMICA: `${ROUTES_PATHS.CATALOGO.EDITAR_UNIDAD_ACADEMICA}`,
    //CATALOGO PERIODO ACADÉMICO
    CAT_PERIODO_ACADEMICO: `${ROUTES_PATHS.CATALOGO.PERIODO_ACADEMICO}`,
    CAT_NUEVO_PERIODO_ACADEMICO: `${ROUTES_PATHS.CATALOGO.NUEVO_PERIODO_ACADEMICO}`,
    CAT_EDIT_PERIODO_ACADEMICO: `${ROUTES_PATHS.CATALOGO.EDITAR_PERIODO_ACADEMICO}`,



    //CATALOGO RETENCION
    CAT_CONCEPTOS_RETENCION: `${ROUTES_PATHS.CATALOGO.CONCEPTOS_RETENCION}`,

    CAT_NUEVO_CONCEPTOS_RETENCION: `${ROUTES_PATHS.CATALOGO.NUEVO_CONCEPTO_RETENCION}`,
    CAT_LIST_CONCEPTOS_RETENCION: `${ROUTES_PATHS.CATALOGO.CONCEPTOS_RETENCION}`,
    CAT_EDIT_CONCEPTOS_RETENCION: `${ROUTES_PATHS.CATALOGO.EDITAR_CONCEPTO_RETENCION}`,
    //CATALOGO IMPUESTOS
    CAT_NUEVO_IMPUESTO: `${ROUTES_PATHS.CATALOGO.NUEVO_IMPUESTO}`,
    CAT_LIST_IMPUESTOS: `${ROUTES_PATHS.CATALOGO.LISTA_IMPUESTOS}`,
    CAT_EDIT_IMPUESTOS: `${ROUTES_PATHS.CATALOGO.EDITAR_IMPUESTO}`,
    //CATALOGO PROVEEDORES
    CAT_NUEVO_PROVEEDORES: `${ROUTES_PATHS.CATALOGO.NUEVO_PROVEEDORES}`,
    CAT_LIST_PROVEEDORES: `${ROUTES_PATHS.CATALOGO.LISTA_PROVEEDORES}`,
    CAT_EDIT_PROVEEDORES: `${ROUTES_PATHS.CATALOGO.EDITAR_PROVEEDORES}`,

    //VENDEDORES
    CAT_VENDEDORES: `${ROUTES_PATHS.CATALOGO.VENDEDORES}`,
    CAT_NUEVO_VENDEDORES: `${ROUTES_PATHS.CATALOGO.NUEVO_VENDEDOR}`,
    CAT_EDIT_VENDEDORES: `${ROUTES_PATHS.CATALOGO.EDITAR_VENDEDOR}`,

    //MARCA
    CAT_MARCA: `${ROUTES_PATHS.CATALOGO.MARCA}`,

    //LINEA
    CAT_LINEA: `${ROUTES_PATHS.CATALOGO.LINEA}`,

    //GRUPO
    CAT_GRUPO: `${ROUTES_PATHS.CATALOGO.GRUPO}`,

    //UNIDADES
    CAT_UNIDADES: `${ROUTES_PATHS.CATALOGO.UNIDADES}`,

    //UNIDADES
    CAT_TIPOS_PRECIOS: `${ROUTES_PATHS.CATALOGO.TIPOS_PRECIOS}`,

    //DESCUENTOS
    CAT_DESCUENTOS: `${ROUTES_PATHS.CATALOGO.DESCUENTOS}`,

    //TARJETAS DE CREDITO
    CAT_TARJETA_CREDITO: `${ROUTES_PATHS.CATALOGO.TARJETA_CREDITO}`,

    /**
     * MAESTRANTES
     */
    ESTUDIANTES: `${ROUTES_PATHS.ESTUDIANTES.DEFAULT}`,
    ESTUDIANTES_INDEX: `${ROUTES_PATHS.ESTUDIANTES.INDEX_MAESTRANTES}`,
    ESTUDIANTES_INGRESO_MAESTRANTE: `${ROUTES_PATHS.ESTUDIANTES.INGRESO_MAESTRANTES}`,
    ESTUDIANTES_INGRESO_ESTUDIANTES_LIGA_PRO: `${ROUTES_PATHS.ESTUDIANTES.INGRESO_ESTUDIANTES_LIGA_PRO}`,
    ESTUDIANTES_INGRESO_ESTUDIANTES_ONLINE: `${ROUTES_PATHS.ESTUDIANTES.INGRESO_ESTUDIANTES_ONLINE}`,
    ESTUDIANTES_REPORTES_SAFEI_CARRERA_ONLINE: `${ROUTES_PATHS.ESTUDIANTES.REPORTES_PAGOS_SAFEI_CARRERA_ONLINE}`,
    ESTUDIANTES_CALCULAR_VALORES_PAGAR: `${ROUTES_PATHS.ESTUDIANTES.CALCULAR_VALORES_PAGAR}`,
    ESTUDIANTES_UNIDAD_ACADEMICA: `${ROUTES_PATHS.ESTUDIANTES.UNIDAD_ACADEMICA}`,
    ESTUDIANTES_CARRERA: `${ROUTES_PATHS.ESTUDIANTES.CARRERAS}`,

    /**
     * ERROR SERVER
     */
    SERVER_E_404: `${ROUTES_PATHS.SERVER.E_404}`

};
/***
 * esta constante servira como valor para los router.navigate o router links
 */
export const INTERNAL_ROUTES = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_LOGIN}`,

    /**
     * HOME
     */
    HOME_PAGE: `/${INTERNAL_PATHS.HOME_DEFAULT}`,
    HOME_CONTABILIDAD:`/${INTERNAL_PATHS.HOME_CONTABILIDAD}`,

    /**
     * CONFIGURATION
     */

    EDITAR_PERFIL_CAMBIO: `/${INTERNAL_PATHS.HOME_CONFIGURATION}/${INTERNAL_PATHS.CONFIGURACION_PERFIL_CAMBIO}`,
    EDITAR_PERFIL: `/${INTERNAL_PATHS.HOME_CONFIGURATION}/${INTERNAL_PATHS.CONFIGURACION_PERFIL}`,
    VER_PERFIL: `/${INTERNAL_PATHS.HOME_CONFIGURATION}/${INTERNAL_PATHS.CONFIGURACION_LISTAR_PERFILES}`,


    /**
     * SRI
     */

    SRI: `/${INTERNAL_PATHS.HOME_SRI}`,
    /*
     * CONTABILIDAD
     */

    REASIGNACION_PRESUPUESTO: `/${INTERNAL_PATHS.HOME_CONTABILIDAD}/${INTERNAL_PATHS.C_PRESUPUESTO_CONTABLE}/${INTERNAL_PATHS.T_REASIGNACION_PRESUPUESTO}`,
    DISMINUCION_PRESUPUESTO: `/${INTERNAL_PATHS.HOME_CONTABILIDAD}/${INTERNAL_PATHS.C_PRESUPUESTO_CONTABLE}/${INTERNAL_PATHS.T_DISMINUCION_PRESUPUESTO}`,
    NUEVO_PRESUPUESTO: `/${INTERNAL_PATHS.HOME_CONTABILIDAD}/${INTERNAL_PATHS.C_PRESUPUESTO_CONTABLE}/${INTERNAL_PATHS.T_NUEVO_PRESUPUESTO}`,

    NUEVO_ASIENTO: `/${INTERNAL_PATHS.HOME_CONTABILIDAD}/${INTERNAL_PATHS.C_ASIENTOS}/${INTERNAL_PATHS.T_NUEVO_ASIENTO}/`,

    /*
     * CATALOGO
    */
    NUEVO_IMPUESTO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_IMPUESTOS}/${INTERNAL_PATHS.CAT_NUEVO_IMPUESTO}`,
    NUEVO_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_IMPUESTOS}/${INTERNAL_PATHS.CAT_EDIT_IMPUESTOS}`,

    CONCEPTO_RETENCION_LISTA: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_CONCEPTOS_RETENCION}`,
    CONCEPTO_RETENCION_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_CONCEPTOS_RETENCION}/${INTERNAL_PATHS.CAT_NUEVO_CONCEPTOS_RETENCION}`,
    CONCEPTO_RETENCION_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_CONCEPTOS_RETENCION}/${INTERNAL_PATHS.CAT_EDIT_CONCEPTOS_RETENCION}`,


    // CLIENTES
    CLIENTES: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_CLIENTES}`,
    CLIENTES_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_CLIENTES}/${INTERNAL_PATHS.CAT_NUEVO_CLIENTES}`,
    CLIENTES_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_CLIENTES}/${INTERNAL_PATHS.CAT_EDIT_CLIENTES}`,
    // PRODUCTOS
    PRODUCTOS: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PRODUCTOS}`,
    PRODUCTOS_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PRODUCTOS}/${INTERNAL_PATHS.CAT_NUEVO_PRODUCTOS}`,
    PRODUCTOS_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PRODUCTOS}/${INTERNAL_PATHS.CAT_EDIT_PRODUCTOS}`,
    // CAT_UNIDAD_ACADEMICA
    UNIDAD_ACADEMICA: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_UNIDAD_ACADEMICA}`,
    UNIDAD_ACADEMICA_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_UNIDAD_ACADEMICA}/${INTERNAL_PATHS.CAT_NUEVO_UNIDAD_ACADEMICA}`,
    UNIDAD_ACADEMICA_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_UNIDAD_ACADEMICA}/${INTERNAL_PATHS.CAT_EDIT_UNIDAD_ACADEMICA}`,
    // CAT_UNIDAD_ACADEMICA
    PERIODO_ACADEMICO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PERIODO_ACADEMICO}`,
    PERIODO_ACADEMICO_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PERIODO_ACADEMICO}/${INTERNAL_PATHS.CAT_NUEVO_PERIODO_ACADEMICO}`,
    PERIODO_ACADEMICO_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_PERIODO_ACADEMICO}/${INTERNAL_PATHS.CAT_EDIT_PERIODO_ACADEMICO}`,
    // VENDEDORES
    VENDEDORES: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_VENDEDORES}`,
    VENDEDORES_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_VENDEDORES}/${INTERNAL_PATHS.CAT_NUEVO_VENDEDORES}`,
    VENDEDORES_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_VENDEDORES}/${INTERNAL_PATHS.CAT_EDIT_VENDEDORES}`,

    /*
     * CTAS X PAGAR
    */
    BANCO_LISTA: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_BANCOS}`,
    BANCO_NUEVO: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_BANCOS}/${INTERNAL_PATHS.CTAS_PAGAR_BANCO_NUEVO}`,
    BANCO_EDITAR: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_BANCOS}/${INTERNAL_PATHS.CTAS_PAGAR_BANCO_EDITAR}`,
    TIPOS_DOC_NUEVO : `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_TIPOS_DOCUMENTOS}/${INTERNAL_PATHS.CTAS_PAGAR_TIPOS_DOCUMENTOS_NUEVO}`,
    TIPOS_DOC_EDITAR : `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_TIPOS_DOCUMENTOS}/${INTERNAL_PATHS.CTAS_PAGAR_TIPOS_DOCUMENTOS_EDITAR}/`,
    PROVEEDOR_LISTA: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_PROVEEDORES}`,
    PROVEEDOR_NUEVO: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_PROVEEDORES}/${INTERNAL_PATHS.CAT_NUEVO_PROVEEDORES}`,
    PROVEEDOR_EDITAR: `/${INTERNAL_PATHS.HOME_CATALOGO}/${INTERNAL_PATHS.CAT_LIST_PROVEEDORES}/${INTERNAL_PATHS.CAT_EDIT_PROVEEDORES}/`,
    DOCUMENTOS_PROVEEDOR: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_DOCUMENTOS_PROVEEDOR}/`,


    VER_IMAGEN: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_VER_IMAGEN}/`,
    EMISION_DE_RETENCIONES: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_EMISION_RETENCIONES}/`,
    EMISION_DE_RETENCIONES_NUEVO: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_EMISION_RETENCIONES}/${INTERNAL_PATHS.CTAS_PAGAR_NUEVO_EMISION_RETENCIONES}/`,

    MOVIMIENTOS_BANCARIOS: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_BANCARIOS}/`,
    MOVIMIENTOS_BANCARIOS_NUEVO: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_BANCARIOS}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_BANCARIOS_NUEVO}/`,
    MOVIMIENTOS_BANCARIOS_EDITAR: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_BANCARIOS}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_BANCARIOS_EDITAR}/`,

    MOVIMIENTOS_DE_CAJA: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_DE_CAJA}/`,
    MOVIMIENTOS_DE_CAJA_NUEVO: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_DE_CAJA}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_DE_CAJA_NUEVO}/`,
    MOVIMIENTOS_DE_CAJA_EDITAR: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_DE_CAJA}/${INTERNAL_PATHS.CTAS_PAGAR_MOVIMIENTOS_DE_CAJA_EDITAR}/`,

    CRUCE_DE_ANTICIPOS: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_CRUCE_ANTICIPO}/`,
    CONCILIACION_BANCARIA: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_CONCILIACION_BANCARIA}/`,

    FACTURA: `/${INTERNAL_PATHS.HOME_FACTURACION}/${INTERNAL_PATHS.FACTURACION_FACTURA}/`,
    ANTICIPOS: `/${INTERNAL_PATHS.HOME_CTAS_X_COBRAR}/${INTERNAL_PATHS.CTAS_COBRAR_ANTICIPOS}/`,


    FIRMAR_MOV_BANCARIOS: `/${INTERNAL_PATHS.HOME_CTAS_X_PAGAR}/${INTERNAL_PATHS.CTAS_PAGAR_FIRMAR_MOV_BANCARIOS}/`,

  /**
     * SERVER
     */
    SERVER_E_404: `/${INTERNAL_PATHS.SERVER_E_404}`

};