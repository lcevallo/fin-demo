import  {environment as ENV} from '@environments/environment';

export const TRANSACCIONES_API_ROUTES = {

  CONTABILIDAD: {
    ASIENTOS_CONTABLES: {
      LEER : `${ENV.baseUrlTransacciones}/asientos`,
      LISTAR_ASIENTOS: `${ENV.baseUrlTransacciones}/asientos/`,
      LISTAR_ASIENTOS_PAGE: `${ENV.baseUrlTransacciones}/asientos/?page={page}&size={size}`,
      GUARDAR: `${ENV.baseUrlTransacciones}/asientos/`,
      REVERSAR: `${ENV.baseUrlTransacciones}/asientos/`,
      LEER_ASIENTOS_RELACION: `${ENV.baseUrlTransacciones}/asientos/relacion/`
    }
  },

  CTAS_X_PAGAR: {
    DOC_PROVEEDOR: {
      VER_IMAGEN : `${ENV.baseUrlTransacciones}/cxpdocsproveedores/image/`,
      SUBIR_IMAGEN : `${ENV.baseUrlTransacciones}/cxpdocsproveedores/image/`,
      BUSCAR_DOCS_PROVEEDOR_PENDIENTES : `${ENV.baseUrlTransacciones}/cxpdocsproveedores/pendientes`,
      GUARDAR_DOCS_PROVEEDOR:`${ENV.baseUrlTransacciones}/cxpdocsproveedores/`,
      // GUARDAR_DOCS_PROVEEDOR:`${ENV.baseUrlTransacciones}/cxpdocsproveedores/pend_selby_detid/{detid}`
    },
    EMISION_RETENCIONES: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpretenciones`,
      OBTENER : `${ENV.baseUrlTransacciones}/cxpretenciones/{id}`,
      BUSCAR_DOCS_SIN_RETENCION : `${ENV.baseUrlTransacciones}/cxpdocsproveedores/sin_retencion`,
      BUSCAR_DOCS_SIN_RETENCION_DETALLE : `${ENV.baseUrlTransacciones}/cxpdocsproveedores/selby_detid/{id}`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpretenciones/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpretenciones/`,
    },
    MOVIMIENTOS_BANCARIOS: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpmovsbancarios`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpmovsbancarios/`,
      EDITAR_ID: `${ENV.baseUrlTransacciones}/cxpmovsbancarios/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpmovsbancarios/`,
      ANTICIPOS: `${ENV.baseUrlTransacciones}/cxpmovsbancarios/anticipos`,
    },
    MOVIMIENTOS_CAJA_CHICA: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpmovsdecaja`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpmovsdecaja/`,
      EDITAR_ID: `${ENV.baseUrlTransacciones}/cxpmovsdecaja/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpmovsdecaja/`,
    },
    DOCUMENTOS_PROVEEDOR: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpdocsproveedores`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpdocsproveedores/`,
      EDITAR_ID: `${ENV.baseUrlTransacciones}/cxpdocsproveedores/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpdocsproveedores/`,
    },
    CRUCE_ANTICIPOS: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpcruceanticipos`,
      OBTENER : `${ENV.baseUrlTransacciones}/cxpcruceanticipos/{id}`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpcruceanticipos/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpcruceanticipos/`,
    },
    CONCILIACION_BANCARIA: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxpconciliacionbancaria`,
      OBTENER : `${ENV.baseUrlTransacciones}/cxpconciliacionbancaria/{id}`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxpconciliacionbancaria/`,
      ELIMINAR: `${ENV.baseUrlTransacciones}/cxpconciliacionbancaria/`,
      BUSCAR: `${ENV.baseUrlTransacciones}/cxpconciliacionbancaria/movsbancarios/`,
    },
  },

  CTAS_POR_COBRAR: {
    ANTICIPOS: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxcanticipo`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxcanticipo/`,
      POR_ID : `${ENV.baseUrlTransacciones}/cxcanticipo/`,
      DAR_BAJA: `${ENV.baseUrlTransacciones}/cxcanticipo/`,
      PENDIENTES: `${ENV.baseUrlTransacciones}/cxcanticipo/pendientes/`,
    },
    DOC_PENDIENTES_X_COBRAR: {
      LISTA_X_ID: `${ENV.baseUrlTransacciones}/cxcdocumento/pendientes/`
    },
    ANTICIPOS_EFECTIVO: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxcanticipoefectivo`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxcanticipoefectivo/`,
      POR_ID : `${ENV.baseUrlTransacciones}/cxcanticipoefectivo/`,
      DAR_BAJA: `${ENV.baseUrlTransacciones}/cxcanticipoefectivo/`,
    },
    ANTICIPOS_BANCARIO: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxcanticipobancario`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxcanticipobancario/`,
      POR_ID : `${ENV.baseUrlTransacciones}/cxcanticipobancario/`,
      DAR_BAJA: `${ENV.baseUrlTransacciones}/cxcanticipobancario/`,
    },
    CRUCE_ANTICIPOS_CXC: {
      LISTAR : `${ENV.baseUrlTransacciones}/cxccruceanticipo`,
      LISTAR_ANT_EFECT_PENDIENTE : `${ENV.baseUrlTransacciones}/cxccruceanticipo/pendientes/`,
      GUARDAR: `${ENV.baseUrlTransacciones}/cxccruceanticipo/`,
      POR_ID : `${ENV.baseUrlTransacciones}/cxccruceanticipo/`,
      DAR_BAJA: `${ENV.baseUrlTransacciones}/cxccruceanticipo/`,
    },
  },

  FACTURACION: {
    CUOTAS: {
      LISTAR : `${ENV.baseUrlTransacciones}/acacuotas`,
      POR_ID : `${ENV.baseUrlTransacciones}/acacuotas/`,
      GUARDAR : `${ENV.baseUrlTransacciones}/acacuotas/`,
      GUARDAR_MASIVO : `${ENV.baseUrlTransacciones}/acacuotas/descuentos_masivos/`,
      ELIMINAR:`${ENV.baseUrlTransacciones}/acacuotas/`,
      DAR_BAJA:`${ENV.baseUrlTransacciones}/acacuotas/dar_baja/`,
      CMB_CUOTAS_POR_PERIODO:`${ENV.baseUrlTransacciones}/acacuotas/productos_periodo/`,
      BUSQUEDA_MASIVA_ESTUDIANTE_POR_PERIODO:`${ENV.baseUrlTransacciones}/acacuotas/clientes_periodo/`,
      IMAGEN:`${ENV.baseUrlEkudemic}/estudiantes/get_foto/`,
      //IMAGEN:`https://apidemic.ulvr.edu.ec/estudiantes/imagen_estudiante_cedula?cedula=`,
      // GUARDAR_DOCS_PROVEEDOR:`${ENV.baseUrlTransacciones}/cxpdocsproveedores/pend_selby_detid/{detid}`
      //PENDIENTES:`${ENV.baseUrlTransacciones}/acacuotas/pendientes/{clienteid}`,
      PENDIENTES:`${ENV.baseUrlTransacciones}/acacuotas/pendientes_by_cliente/`,
      GENERAR_CUOTAS:`${ENV.baseUrlTransacciones}/acacuotas/estudiante_genera_cuotas/`,
    },
    FACTURAS: {
      LISTAR : `${ENV.baseUrlTransacciones}/facfacturas`,
      POR_ID : `${ENV.baseUrlTransacciones}/facfacturas/{id}`,
      GUARDAR : `${ENV.baseUrlTransacciones}/facfacturas/`,
      DAR_BAJA : `${ENV.baseUrlTransacciones}/facfacturas/`,
    }
  },

  EKUDEMIC: {
    ESTUDIANTES: {
      OBTENER : `${ENV.baseUrlTransacciones}/ekudemic/busqueda/{cedula}`,
      CUOTAS : `${ENV.baseUrlTransacciones}/ekudemic/estudiante_cuotas`,
    }
  },

}
