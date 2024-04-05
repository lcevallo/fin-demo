import  {environment as ENV} from '@environments/environment';

export const API_ROUTES = {
  CONFIGURATION:{
    SEG_LLAVES : {
      LISTA : `${ENV.baseUrl}/llave`,
      ARBOL : `${ENV.baseUrl}/seg-llaves-proceso/specials/arbol`,
      BUSCAR : `${ENV.baseUrl}/seg-llaves-proceso/specials/busqueda`,
      CREAR : `${ENV.baseUrl}/llave-proceso`,
      ACTUALIZAR : `${ENV.baseUrl}/llave-proceso`,
      ELIMINAR : `${ENV.baseUrl}/llave-proceso`
    },
    CONT_CANTONES: {
      LISTA: `${ENV.baseUrl}/cantones`
    },

    SEG_PERFIL: {
      LISTA : `${ENV.baseUrl}/segperfil`,
      CREAR : `${ENV.baseUrl}/segperfil`,
      ACTUALIZAR : `${ENV.baseUrl}/segperfil`,
      LISTA_LLAVES_PERFIL : `${ENV.baseUrl}/seg-llaves-proceso/specials/seg_perfil`,
      PERSONA : `${ENV.baseUrl}/persona`,
      SUBIR_IMAGEN : `${ENV.baseUrl}/segperfil/upload-file`
    },
    SEG_EMPRESA: {
      CREAR_EMPRESA: `${ENV.baseUrl}/empresa/util`,
      LISTA_SUCURSALES : `${ENV.baseUrl}/empresa/util/sucursales`
    }
  },

  CATALOGO:
  {
    LINEA: {
      LISTAR: `${ENV.baseUrl}/inventario_lineas`,
      GUARDAR: `${ENV.baseUrl}/inventario_lineas/`,
      POR_ID: `${ENV.baseUrl}/inventario_lineas/{lineasid}`,
      ELIMINAR: `${ENV.baseUrl}/inventario_lineas/{lineasid}`,
      CMB: `${ENV.baseUrl}/inventario_lineas/cmb/`
    },
    GRUPOS: {
      LISTAR: `${ENV.baseUrl}/inventario_grupos`,
      GUARDAR: `${ENV.baseUrl}/inventario_grupos/`,
      POR_ID: `${ENV.baseUrl}/inventario_grupos/{gruposid}`,
      ELIMINAR: `${ENV.baseUrl}/inventario_grupos/{gruposid}`,
      CMB: `${ENV.baseUrl}/inventario_grupos/cmb/`
    },
    MARCAS: {
      LISTAR: `${ENV.baseUrl}/inventario_marcas`,
      GUARDAR: `${ENV.baseUrl}/inventario_marcas/`,
      POR_ID: `${ENV.baseUrl}/inventario_marcas/{marcasid}`,
      ELIMINAR: `${ENV.baseUrl}/inventario_marcas/{marcasid}`,
      CMB: `${ENV.baseUrl}/inventario_marcas/cmb/`
    },
    UNIDADSE: {
      LISTAR: `${ENV.baseUrl}/inventario_unidades`,
      GUARDAR: `${ENV.baseUrl}/inventario_unidades/`,
      POR_ID: `${ENV.baseUrl}/inventario_unidades/{unidadesid}`,
      ELIMINAR: `${ENV.baseUrl}/inventario_unidades/{unidadesid}`,
      CMB: `${ENV.baseUrl}/inventario_unidades/cmb/`
    },
    TIPOS_PRECIO: {
      LISTAR: `${ENV.baseUrl}/inventario_tipos_precios`,
      GUARDAR: `${ENV.baseUrl}/inventario_tipos_precios/`,
      POR_ID: `${ENV.baseUrl}/inventario_tipos_precios/{id}`,
      ELIMINAR: `${ENV.baseUrl}/inventario_tipos_precios/{id}`,
      CMB: `${ENV.baseUrl}/inventario_tipos_precios/cmb/`
    },
    CLIENTES: {
      LISTAR: `${ENV.baseUrl}/Clientes`,
      GUARDAR: `${ENV.baseUrl}/Clientes/`,
      GUARDAR_ZIP: `${ENV.baseUrl}/Clientes/save_zip/`,
      EDITAR: `${ENV.baseUrl}/Clientes/`,
      ELIMINAR: `${ENV.baseUrl}/Clientes/`,
      CMB: `${ENV.baseUrl}/inventario_unidades/cmb/`,
      LISTAR_EKUDEMIC: `${ENV.baseUrl}/Clientes/ekudemic_list`,
      GUARDAR_EKUDEMIC: `${ENV.baseUrl}/Clientes/ekudemic_save`,
      BY_ID_FACTURACION: `${ENV.baseUrl}/Clientes/facturacion/`,
    },
    VENDEDORES: {
      LISTAR: `${ENV.baseUrl}/Vendedores`,
      GUARDAR: `${ENV.baseUrl}/Vendedores/`,
      EDITAR: `${ENV.baseUrl}/Vendedores/`,
      ELIMINAR: `${ENV.baseUrl}/Vendedores/`,
      CMB: `${ENV.baseUrl}/Vendedores/cmb/`
    },
    UNIDAD_ACADEMICA: {
      LISTAR: `${ENV.baseUrl}/academico_unidadacademica`,
      GUARDAR: `${ENV.baseUrl}/academico_unidadacademica/`,
      EDITAR: `${ENV.baseUrl}/academico_unidadacademica/`,
      ELIMINAR: `${ENV.baseUrl}/academico_unidadacademica/`,
      CMB: `${ENV.baseUrl}/academico_unidadacademica/cmb/`,
      CMB_CARRERAS: `${ENV.baseUrl}/academico_unidadacademica/cmbcarreras/`,
      EKUDEMIC: `${ENV.baseUrl}/academico_unidadacademica/ekudemic`
    },
    PERIODO_LECTIVO: {
      LISTAR: `${ENV.baseUrl}/periodo_lectivo`,
      GUARDAR: `${ENV.baseUrl}/periodo_lectivo/`,
      EDITAR: `${ENV.baseUrl}/periodo_lectivo/`,
      ELIMINAR: `${ENV.baseUrl}/periodo_lectivo/`,
      CMB: `${ENV.baseUrl}/periodo_lectivo/cmb/`
    },
    PRODUCTOS: {
      LISTAR: `${ENV.baseUrl}/Productos`,
      GUARDAR: `${ENV.baseUrl}/Productos/`,
      POR_ID: `${ENV.baseUrl}/Productos/{id}`,
      ELIMINAR: `${ENV.baseUrl}/Productos/{id}`,
      CMB: `${ENV.baseUrl}/Productos/cmb/`,
      LISTAR_FACT: `${ENV.baseUrl}/Productos/facturacionlist/`,
      POR_ID_FACT: `${ENV.baseUrl}/Productos/facturacion/`,
      SELECCIONADOS_FACT: `${ENV.baseUrl}/Productos/facturacion_seleccionados/`,
    }
  },
  ACADEMICO: {
    DESCUENTOS: {
      LISTAR: `${ENV.baseUrl}/academico_descuentos`,
      GUARDAR: `${ENV.baseUrl}/academico_descuentos/`,
      POR_ID: `${ENV.baseUrl}/academico_descuentos/{descuentosid}`,
      ELIMINAR: `${ENV.baseUrl}/academico_descuentos/{descuentosid}`,
      CMB: `${ENV.baseUrl}/academico_descuentos/cmb/`
    },
    NIVELES_ACADEMICOS: {
      LISTAR: `${ENV.baseUrl}/academico_niveles`,
      GUARDAR: `${ENV.baseUrl}/academico_niveles/`,
      POR_ID: `${ENV.baseUrl}/academico_niveles/`,
      ELIMINAR: `${ENV.baseUrl}/academico_niveles/`,
      CMB: `${ENV.baseUrl}/academico_niveles/cmb/`
    },
  },


  USO_GENERAL: {
    LISTAR_CANTONES: `${ENV.baseUrl}/generales/cantones`,
    LISTAR_TIPO_ID: `${ENV.baseUrl}/generales/tipoident`,
    IMPUESTOS :{
      LISTAR_IMPUESTOS: `${ENV.baseUrl}/impuestos`,
      OBTENER_IMPUESTO: `${ENV.baseUrl}/impuestos`,
      GUARDAR_IMPUESTO: `${ENV.baseUrl}/impuestos/`,
      COMBO: `${ENV.baseUrl}/impuestos/cmb/`,
    },
    PAISES :{
      COMBO: `${ENV.baseUrl}/generales/paises`
    },
    CONCEPTOS_RETENCION:{
      LISTAR_CR: `${ENV.baseUrl}/conceptos_de_retencion`,
      GUARDAR_CR: `${ENV.baseUrl}/conceptos_de_retencion/`,
      ELIMINAR_CR: `${ENV.baseUrl}/conceptos_de_retencion/`,
      OBTENER_CR: `${ENV.baseUrl}/conceptos_de_retencion/`,
      OBTENER_CR_FECHA: `${ENV.baseUrl}/conceptos_de_retencion/cmb/{fecha}`
    },
    PROVEEDORES: {
      LISTAR:  `${ENV.baseUrl}/Proveedores`,
      GUARDAR:  `${ENV.baseUrl}/Proveedores/`,
      EDITAR:  `${ENV.baseUrl}/Proveedores/{proveedorid}`,
      ELIMINAR:  `${ENV.baseUrl}/Proveedores/{proveedorid}`,
      RETENCIONES_ASIGNADAS : `${ENV.baseUrl}/Proveedores/conceptosretencion/{id}`,
    },
    IMAGENES: {
      OBTENER_IMG_ID:  `${ENV.baseUrl}/imagenes/`,
      GUARDAR:  `${ENV.baseUrl}/imagenes`,
    }

  },
  AUTH: {
    LOGIN: `${ENV.baseUrl}/auth/sign-in`
  },
  CONTABILIDAD:{
    PLAN_CUENTAS : {
      LISTA : `${ENV.baseUrl}/plan_cuentas`,
      LISTA_DETALLE : `${ENV.baseUrl}/plan_cuentas/tipodetalle`,
      EN_PARAMETROS : `${ENV.baseUrl}/plan_cuentas/specials/en_parametros`,
      BUSCAR : `${ENV.baseUrl}/plan_cuentas/specials/busqueda/{term}`,
      // ARBOL : `${ENV.baseUrl}/plan_cuentas/specials/arbol`,
      ARBOL : `${ENV.baseUrl}/plandecuentas/arbol/`,
      LEER : `${ENV.baseUrl}/plandecuentas/{plandecuenta_id}`,
      // LEER : `${ENV.baseUrl}/plan_cuentas/{plandecuenta_id}`,
      LEER_PADRE : `${ENV.baseUrl}/plan_cuentas/specials/{plandecuenta_id}`,
      // NUEVO : `${ENV.baseUrl}/plan_cuentas-proceso/`,
      NUEVO : `${ENV.baseUrl}/plandecuentas/`,
      GET_LIST : `${ENV.baseUrl}/plandecuentas/get_list/`,
      ACTUALIZAR : `${ENV.baseUrl}/plan_cuentas-proceso/{plandecuenta_id}`,
      // ELIMINAR : `${ENV.baseUrl}/plan_cuentas-proceso/{plandecuenta_id}`,
      ELIMINAR : `${ENV.baseUrl}/plandecuentas/`,
      // CMB_PLAN_CUENTAS : `${ENV.baseUrl}/plan_cuentas/cmb/`,
      CMB_PLAN_CUENTAS : `${ENV.baseUrl}/plandecuentas/cmb/`,
    },
    PARAMETROS : {
      ACTUALIZAR : `${ENV.baseUrl}/parametros_basicos/`,
      LISTAR : `${ENV.baseUrl}/parametros_basicos`
    },
    TARJETA_CREDITO: {
      GUARDAR: `${ENV.baseUrl}/tarjetas_de_credito/`,
      LISTAR: `${ENV.baseUrl}/tarjetas_de_credito`,
      POR_ID: `${ENV.baseUrl}/tarjetas_de_credito/`,
      ELIMINAR: `${ENV.baseUrl}/tarjetas_de_credito/`,
      CMB_CAJA_CHICA: `${ENV.baseUrl}/tarjetas_de_credito/cmb/`,
    },
    PERIODO_CONTABLE : {
      LISTA : `${ENV.baseUrl}/periodo_contable`,
      // BUSQUEDA : `${ENV.baseUrl}/periodo_contable/specials/filtro`,
      BUSQUEDA : `${ENV.baseUrl}/periodo_contable/specials/get_list/`,
      GUARDAR : `${ENV.baseUrl}/periodo_contable/`,
      ACTUALIZAR : `${ENV.baseUrl}/periodo_contable/{periodocontable_id}`,
      ELIMINAR : `${ENV.baseUrl}/periodo_contable/{periodocontable_id}`,
      AUTOCOMPLETE : `${ENV.baseUrl}/periodo_contable/specials/autocomplete_descripcion/`,
    },
    DEPARTAMENTOS_CONTABLE : {
      ARBOL : `${ENV.baseUrl}/departamentos/specials/arbol`,
      LISTA : `${ENV.baseUrl}/departamentos/`,
      LEER : `${ENV.baseUrl}/departamentos/{departamento_id}`,
      ELIMINAR : `${ENV.baseUrl}/departamento-proceso/{departamento_id}`,
      BUSQUEDA : `${ENV.baseUrl}/departamentos/specials/busqueda/{term}`,
      NUEVO : `${ENV.baseUrl}/departamento-proceso/`,
      ACTUALIZAR : `${ENV.baseUrl}/departamento-proceso/{departamento_id}`,
    },
    PROYECTOS_CONTABLE : {
      LISTA_PAGE : `${ENV.baseUrl}/proyectos`,
      LISTA : `${ENV.baseUrl}/proyectos/`,
      BUSQUEDA : `${ENV.baseUrl}/proyectos/specials/filtro`,
      GUARDAR : `${ENV.baseUrl}/proyectos/`,
      ACTUALIZAR : `${ENV.baseUrl}/proyectos/{proyecto_id}`,
      ELIMINAR : `${ENV.baseUrl}/proyectos/{proyecto_id}`
    },
    ESTADO_FINANCIERO_CONTABLE : {
      LISTA : `${ENV.baseUrl}/estados-financieros`,
      BUSQUEDA : `${ENV.baseUrl}/disenio_estados_financieros/filtro`,
      GUARDAR : `${ENV.baseUrl}/disenio_estados_financieros/`,
      LEER : `${ENV.baseUrl}/disenio_estados_financieros/{disenhoid}`,
      ACTUALIZAR : `${ENV.baseUrl}/disenio_estados_financieros/edit`,
      ELIMINAR : `${ENV.baseUrl}/disenio_estados_financieros/delete/{disenhoid}`
    },
    TIPOSDIARIO : {
      // PAGINACION : `${ENV.baseUrl}/tipodiario`,
      PAGINACION : `${ENV.baseUrl}/tipodiario/get_list/`,
      // LISTA : `${ENV.baseUrl}/tipodiario/lista`,
      LISTA : `${ENV.baseUrl}/tipodiario/get_list`,
      ACTUALIZAR : `${ENV.baseUrl}/tipodiario/{tipodiario_id}`,
      GUARDAR : `${ENV.baseUrl}/tipodiario/`,
      ELIMINAR : `${ENV.baseUrl}/tipodiario/{tipodiario_id}`
    },

    TIPOS_DIARIO_ASIENTOS : {
      LISTAR : `${ENV.baseUrl}/tipodediario/get_list/`,
      GUARDAR : `${ENV.baseUrl}/tipodediario/`,
      ELIMINAR : `${ENV.baseUrl}/tipodediario/`,
      CMB : `${ENV.baseUrl}/tipodediario/cmb/`
    },
    PRESUPUESTO_CONTABLE: {
      GUARDAR : `${ENV.baseUrl}/presupuestocontable/`,
      LISTA: `${ENV.baseUrl}/presupuestocontable/list/`,
      PRESUPUESTO_POR_ID: `${ENV.baseUrl}/presupuestocontable`
    }

  },
  PERSONA: {
    LEER_PERSONA : `${ENV.baseUrl}/persona`,
    // LISTAR_PERSONA : `${ENV.baseUrl}/persona/busqueda/`,
    LISTAR_PERSONA : `${ENV.baseUrl}/persona/get_list/`,
    // LISTAR_PERSONA : `http://10.100.1.127:8989/persona/get_list/`,
    LISTAR_PERSONA_ID : `${ENV.baseUrl}/persona`,
    ESTADO_PERSONA_ID: `${ENV.baseUrl}/persona/estado`,
    PERSONA_POR_IDENTIFICACION: `${ENV.baseUrl}/persona/por_identificacion`,
    PERSONA_JURIDICA_POR_IDENTIFICACION: `${ENV.baseUrl}/persona/por_identificacion_juridica`,
    LISTA_USUARIOS_CAJEROS : `${ENV.baseUrl}/persona/usuarios/cajeros/`
  },

  CTAS_POR_PAGAR: {
    BANCOS: {
      GUARDAR: `${ENV.baseUrl}/bancos-cuentas/`,
      LISTAR: `${ENV.baseUrl}/bancos-cuentas`,
      POR_ID: `${ENV.baseUrl}/bancos-cuentas`,
      ELIMINAR: `${ENV.baseUrl}/bancos-cuentas`,
      CMB_CTAS_BANCOS: `${ENV.baseUrl}/bancos-cuentas/cmb/`
    },
    TIPO_DOCUMENTO: {
      GUARDAR: `${ENV.baseUrl}/tipos_doc_cxp/`,
      LISTAR_TIPODOC: `${ENV.baseUrl}/tipos_doc_cxp`,
      EDITAR_TIPODOC: `${ENV.baseUrl}/tipos_doc_cxp`,
      COMBO_BUSQUEDA: `${ENV.baseUrl}/tipos_doc_cxp/cmb_tipos_doc/`,
      ELIMINAR_TIPODOC: `${ENV.baseUrl}/tipos_doc_cxp/`,
      POR_ID: `${ENV.baseUrl}/tipos_doc_cxp/`,
    },
    CAJA_CHICA: {
      GUARDAR: `${ENV.baseUrl}/cajas_chica/`,
      LISTAR: `${ENV.baseUrl}/cajas_chica`,
      POR_ID: `${ENV.baseUrl}/cajas_chica/`,
      ELIMINAR: `${ENV.baseUrl}/cajas_chica/`,
      CMB_CAJA_CHICA: `${ENV.baseUrl}/cajas_chica/cmb/`,
    },

    RUBROS_BANCARIOS: {
      GUARDAR: `${ENV.baseUrl}/rubros_bancarios/`,
      LISTAR: `${ENV.baseUrl}/rubros_bancarios`,
      POR_ID: `${ENV.baseUrl}/rubros_bancarios/`,
      ELIMINAR: `${ENV.baseUrl}/rubros_bancarios/`,
      CMB: `${ENV.baseUrl}/rubros_bancarios/all/`
    },
    RUBROS_CAJA: {
      LISTAR: `${ENV.baseUrl}/rubros_de_caja`,
      GUARDAR: `${ENV.baseUrl}/rubros_de_caja/`,
      POR_ID: `${ENV.baseUrl}/rubros_de_caja/`,
      ELIMINAR: `${ENV.baseUrl}/rubros_de_caja/`
    },
    PUNTOS_EMISION_RETENCIONES: {
      LISTAR: `${ENV.baseUrl}/punto_de_emision_retenciones`,
      GUARDAR: `${ENV.baseUrl}/punto_de_emision_retenciones/`,
      POR_ID: `${ENV.baseUrl}/punto_de_emision_retenciones/`,
      ELIMINAR: `${ENV.baseUrl}/punto_de_emision_retenciones/`,
      POR_DEFAULT: `${ENV.baseUrl}/punto_de_emision_retenciones/pordefault/`,
    }
  },

  FACTURACION: {
    PTOS_EMISION_NOTA_CREDITO: {
      GUARDAR: `${ENV.baseUrl}/punto_de_emision_nota_credito/`,
      LISTAR: `${ENV.baseUrl}/punto_de_emision_nota_credito`,
      POR_ID: `${ENV.baseUrl}/punto_de_emision_nota_credito`,
      ELIMINAR: `${ENV.baseUrl}/punto_de_emision_nota_credito/`
    },
    PTOS_EMISION_NOTA_DEBITO: {
      GUARDAR: `${ENV.baseUrl}/punto_de_emision_nota_dedito/`,
      LISTAR: `${ENV.baseUrl}/punto_de_emision_nota_dedito`,
      POR_ID: `${ENV.baseUrl}/punto_de_emision_nota_dedito/`,
      ELIMINAR: `${ENV.baseUrl}/punto_de_emision_nota_dedito/`,
    },
    PTOS_EMISION_FACTURA: {
      GUARDAR: `${ENV.baseUrl}/punto_de_emision_facturacion/`,
      LISTAR: `${ENV.baseUrl}/punto_de_emision_facturacion`,
      POR_ID: `${ENV.baseUrl}/punto_de_emision_facturacion/`,
      POR_DEFAULT: `${ENV.baseUrl}/punto_de_emision_facturacion/pordefault/`,
      ELIMINAR: `${ENV.baseUrl}/punto_de_emision_facturacion/`
    },
    DESCUENTOS: {
      GUARDAR: `${ENV.baseUrl}/rubros_bancarios/`,
      LISTAR: `${ENV.baseUrl}/rubros_bancarios`,
      POR_ID: `${ENV.baseUrl}/rubros_bancarios/`,
      ELIMINAR: `${ENV.baseUrl}/rubros_bancarios/`
    },
    PARAMETROS: {
      LISTAR: `${ENV.baseUrl}/rubros_de_caja`,
      GUARDAR: `${ENV.baseUrl}/rubros_de_caja/`,
      POR_ID: `${ENV.baseUrl}/rubros_de_caja/`,
      ELIMINAR: `${ENV.baseUrl}/rubros_de_caja/`
    },
  }


}


