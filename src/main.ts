import * as process from 'process';
import { Context } from './context';
import { PropertyReport } from './property-report';

const workspace = process.argv[2] ? process.argv[2] : process.cwd();

const context = new Context(workspace);

if (context.isAngular()) {
    new PropertyReport(context).run();
} else  {
    console.error(`Angular Project Not Found in : ${workspace}`);
}