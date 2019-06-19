# poc-compiler-api

>Proof of concept to get information about angular file

## Contributing

This is a NodeJS project developed using TypeScript

### Starting the project

```shell
npm install
npm start [-- <angular_workspace>]
```

### Project structure

The project has the following structure

* *property-reports.ts* the report runner. It runs test funtion to show information of all .ts file.
* *context.ts* The audit context. Currently it only has the workspace.