interface Context {
    getWorkSpace(): string;
    isAngular(): boolean;
}

export type IContext = Context;