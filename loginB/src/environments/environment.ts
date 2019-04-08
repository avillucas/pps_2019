// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyCBVwdxakEEg7FvUdJVMEWaVM0IJTefiM8',
  authDomain: 'pps-2019.firebaseapp.com',
  databaseURL: 'https://pps-2019.firebaseio.com',
  projectId: 'pps-2019',
  storageBucket: 'pps-2019.appspot.com',
  messagingSenderId: '165501539229'
};

export const defaultUser = {
  email: 'admin@gmail.com',
  password: '11111111'
};

export const  preusuarios = {
  {"id":1, "correo":"admin@gmail.com", "clave":11111111, "perfil":"admin", "sexo":"femenino"}
  {"id":2, "correo":"invitado@gmail.com", "clave":22222222, "perfil":"invitado", "sexo":"femenino"}
  {"id":3, "correo":"usuario@gmail.com", "clave":33333333, "perfil":"usuario", "sexo":"masculino"}
  {"id":4, "correo":"anonimo@gmail.com", "clave":44444444, "perfil":"usuario", "sexo":"masculino"}
  {"id":5, "correo":"tester@gmail.com", "clave":55555555, "perfil":"tester","sexo": "femenino"}
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
