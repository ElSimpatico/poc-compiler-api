import { DotEngine } from '@compodoc/ngd-transformer';
import { Compiler } from '@compodoc/ngd-compiler'
import { IContext } from './types/i-context';
import * as path from 'path';

let glob = require('glob');

export class PropertyReport {
    private context: IContext;

    constructor(context: IContext) {
        this.context = context;
    }

    run(): void {
        this.test();
    }

    private test(): void {
        const files = glob.sync(path.join(this.context.getWorkSpace(), 'src/**/*.ts'));
      
        const compiler = new Compiler(files, {
            tsconfigDirectory: this.context.getWorkSpace()
        });

        const dependencies = compiler.getDependencies();
        dependencies.map(dep => {
            console.log(dep);
        });

        const optionsEngine = {
            output: './dist/dependencies/graph',
            displayLegend: true,
            outputFormats: 'html'
        };
        const engine = new DotEngine(optionsEngine);

        engine.generateGraph(dependencies).then(() => console.log(`Graph generated in ${optionsEngine.output} with ${optionsEngine.outputFormats} extensions`));
    }
}