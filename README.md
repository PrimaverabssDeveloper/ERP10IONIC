# PRIMAVERA ERP10 IONIC APP
The PRIMAVERA ERP 10 is a mobile application that was builded using the Ionic framework. It includes several features that allows learn how to use the web api module.

In this application, you can see and learn how to work with serval entities using the webapi, such as:
- Customer
- Itens
- Invoices
- Login
- Companies

### System Requirements
1. A local installation of PRIMAVERA ERP 10.
2. A local installation of IIS.
3. Node.JS

## Getting Started
1. Clone the repo:
  `git clone https://github.com/PrimaverabssDeveloper/ERP10IONIC.git`
2. In your terminal, navigate to the project's root folder
3. Run this command: `npm install @ionic/app-scripts@latest --save-dev`
4. Run `npm rebuild node-sass` to build the binding for your current environment.

### Config you app
In order to configure your web api endpoint change the application setting at `src/providers/api`

```C#
  constructor(public http: Http) {
    this.apiUrl = "http://localhost:2018/WebApi/"
  }
  ```

### Build and Run
1. To compile the application Run `npm run build`
2. To strat the application Run `npm start`

## Contributing and Feedback
Everyone is free to contribute to the repository.

Any bugs detected in the code samples can be reported in the *Issues* section of this repository.

## License
Unless otherwise specified, the code samples are released under the [MIT license](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT).
