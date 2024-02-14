type ValidationFunction = (value: string) => boolean;

enum FieldType {
    Text = 'text',
    Email = 'email',
    TextArea = 'textarea',
}

const requiredField: ValidationFunction = (value: string) => value.length > 0;
const emailField: ValidationFunction = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const ValidationStrategies: Record<FieldType, ValidationFunction> = {
    [FieldType.Text]: (value: string) => requiredField(value),
    [FieldType.Email]: (value: string) => emailField(value),
    [FieldType.TextArea]: (value: string) => requiredField(value),
};

class FormField {
    modelValue: string
    state: boolean | undefined;

    constructor(public name: string, public label: string, public type: FieldType, public placeholder: string, public invalidFeedback: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.placeholder = placeholder;
        this.invalidFeedback = invalidFeedback;
        this.modelValue = '';
        this.state = undefined;
    }

    validate(): boolean {
        
        const validator = ValidationStrategies[this.type];
        console.log('1111111', validator);
        console.log(this.type);
        if (validator) {
            const isValid = validator(this.modelValue);
            this.state = isValid;
            return isValid;
        }
        console.error(`No validation strategy for field type: ${this.type}`);
        return false;
    }
}

export { FormField, FieldType };
