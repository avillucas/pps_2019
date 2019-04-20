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
  { id: 1, email: 'admin@gmail.com',    password: '11111111', perfil: 'admin',    sexo: 'femenino'  },
  { id: 2, email: 'invitado@gmail.com', password: '22222222', perfil: 'invitado', sexo: 'femenino'  },
  { id: 3, email: 'usuario@gmail.com',  password: '33333333', perfil: 'usuario',  sexo: 'masculino' },
  { id: 4, email: 'anonimo@gmail.com',  password: '44444444', perfil: 'usuario',  sexo: 'masculino' },
  { id: 5, email: 'tester@gmail.com',   password: '55555555', perfil: 'tester',   sexo: 'femenino'  }
];
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
