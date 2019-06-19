import { IContext } from './types/i-context';
import * as path from 'path';

export class Context implements IContext {
    
    private workspace: string;
    private packageJson: any;
    private angularVersion: string;

    constructor(workspace: string) {
        this.workspace = workspace;
        this.packageJson = this.generatePackageJson();
        this.angularVersion = this.generateAngularVersion()
    }

    getWorkSpace(): string {
        return this.workspace;
    }

    isAngular(): boolean {
        return this.angularVersion.length > 0;
    }

    private generatePackageJson(): any {
        try{
            return require(path.join(this.workspace, 'package.json'));
        } catch(err) {
            console.error(err);
            return null;
        }
    }

    private generateAngularVersion(): string {
        let version = '';
        if (this.packageJson !== null && this.packageJson.dependencies['@angular/core']) {
            version = require(path.join(this.workspace, 'node_modules', '@angular', 'core', 'package.json')).version;
        }
        return version;
    }}