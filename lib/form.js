export class Form {
    constructor(options) {
        this.inputs = options.inputs || {};
        this.errors = [];
        this.validators = options.validators || {};
        this.onChange = options.onChange || (() => { });
        for (const input in this.inputs) {
            this[input] = {
                input,
                _value: this.inputs[input].value,
                valid: () => this.validateInput(input),
                errors: [],
                validateOnChange: this.inputs[input].validateOnChange !== false,
                hasError: (type) => {
                    return this[input].errors.includes(type);
                },
                set: (v) => {
                    this[input].errors = [];
                    this[input]._value = v;
                    this.validateInput(input, false);
                    this.onChange(this[input]);
                }
            };
            Object.defineProperty(this[input], 'value', {
                get: () => this[input]._value,
                set: (v) => {
                    this[input].set(v);
                }
            });
        }
    }
    reset() {
        return new Form(this);
    }
    set(input, value) {
        if (!this.inputs[input]) {
            throw new Error(`Input ${input} does not exist`);
        }
        this[input].set(value);
    }
    get valid() {
        return this.validate(false);
    }
    validate(forceValidate = true) {
        return Object.keys(this.inputs).every(input => this.validateInput(input, forceValidate));
    }
    validateInput(input, forceValidate = true) {
        if (!this.inputs[input].validators) {
            return true;
        }
        return this.inputs[input].validators.every(validator => {
            if (!forceValidate && !this[input].validateOnChange) {
                return true;
            }
            const result = validator(this[input]._value, this);
            if (result !== true) {
                if (!this[input].errors.includes(result)) {
                    this[input].errors.push(result);
                }
                if (!this.errors.find(error => error.input === input && error.type === result)) {
                    this.errors.push({ input, type: result });
                }
                return false;
            }
            if (this[input].errors.includes(result)) {
                this[input].errors = this[input].errors.filter(error => error !== result);
            }
            return true;
        });
    }
    hasError(inputType) {
        const [input, type] = inputType.split('.');
        return this[input].errors.includes(type);
    }
    toJSON() {
        return Object.keys(this.inputs).reduce((acc, input) => {
            acc[input] = this[input].value;
            return acc;
        }, {});
    }
}
