# AngularTourOfHerous

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## Note

```bash
#Install Angular CLI globaly using npm
npm install -g @angular/cli

#create new application with built in structure
ng new my-app-name

#launch the application
ng serve --open 
    #--open tag will open the browser http://localhost:4200/
    #ng serve command builds the app, starts the development server.

#Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input.

#1. double curly braces are Angular's interpolation binding syntax.
<h1>{{title}}</h1>

#import the Component symbol from the Angular core library and annotate the component class with @Component.

@Component #is a decorator function that specifies the Angular metadata for the component.
```
