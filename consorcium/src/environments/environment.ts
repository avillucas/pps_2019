import { Usuario } from 'src/app/clases/usuario';

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

export const defaultUsers = [
  new Usuario(1, 'admin@gmail.com', '11111111', 'admin', 'femenino'),
  new Usuario(2, 'invitado@gmail.com', '22222222', 'invitado', 'femenino'),
  new Usuario(3, 'usuario@gmail.com', '33333333', 'usuario', 'masculino'),
  new Usuario(4, 'anonimo@gmail.com', '44444444', 'usuario', 'masculino'),
  new Usuario(5, 'tester@gmail.com', '55555555', 'tester', 'femenino')
];
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
