# AngularAdminLte

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------
First Commit

1. Crear proyecto sin rutas
2. Descargar plantilla - https://adminlte.io/ v3.0.1
3. De AdminLTE-3.0.1 copiar dist y plugins a src/assets/
4. Copiar el codigo js y css de AdminLTE-3.0.1/starter.html a src/index.html, recordar que estan en assets/
5. Generar componentes: Header, Menu, Content, Footer y Setting
6. Al tratar de lanzar el server con la version actual muestra errores, se corrige de la siguiente manera:
	https://stackoverflow.com/questions/59547657/i-integrate-an-adminlte-template-in-angular-8-the-first-time-when-i-launch-the/59595682#59595682
	I got the same error when i tried to launch the server.
	Replace these imports in these classes: 

	"Filterizr.d.ts" in plugins/filterizr
	Replace these imports:
	import { Filter } from './ActiveFilter';
	import { RawOptions } from './FilterizrOptions/defaultOptions';
	For these:
	import { Filter } from './types/index';
	import { RawOptions } from './types/interfaces/';

	"FilterContainer.d.ts" in plugins/filterizr:
	Replace this import:
	import { RawOptionsCallbacks } from './FilterizrOptions/defaultOptions';
	for:
	import { RawOptionsCallbacks } from './types/interfaces';

	"FilterItems.d.ts" in plugins/filterizr:
	Replace this import:
	import { Filter } from './ActiveFilter';
	for
	import { Filter } from './types';
7. Copiar el codigo que corresponde desde starter.html a cada componente
