// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Produccion Desarrollo
  baseUrl: 'http://localhost:8989',
  baseUrlReportes: 'http://localhost:8995',
  baseUrlTransacciones: 'http://localhost:8998',
  baseUrlEkudemic: 'http://localhost:52002',
  baseUrlSri: 'http://localhost:52001',
  baseSafei: 'http://localhost:52001',

  baseUrlReporte: 'http://localhost:4000',


  idleTimeInMinutes: 300,
  cuentaRegresiva:30,
  // Produccion LAICA
  // baseUrl: 'https://apifinanciero.ulvr.edu.ec',
  // baseUrlReportes: 'https://apifinanreport.ulvr.edu.ec',
  // baseUrlTransacciones: 'https://apifinantransac.ulvr.edu.ec',
  // baseUrlEkudemic: 'https://apiekubac.ulvr.edu.ec',
  // baseSafei: 'https://apisafei.ulvr.edu.ec',
  // baseUrlSri: 'https://apisafei.ulvr.edu.ec',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
