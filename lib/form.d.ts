export declare class Form {
    inputs: object;
    errors: Array<{
        input: string;
        type: string;
    }>;
    validators: object;
    onChange: Function;
    constructor(options: any);
    reset(): Form;
    set(input: any, value: any): void;
    get valid(): boolean;
    validate(forceValidate?: boolean): boolean;
    validateInput(input: any, forceValidate?: boolean): any;
    hasError(inputType: any): any;
    toJSON(): {};
}
