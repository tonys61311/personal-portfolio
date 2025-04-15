// 欄位類型定義
enum FieldType {
    Text = 'text',
    Email = 'email',
    TextArea = 'textarea',
}

// 驗證函式類型
type ValidationFunction = (value: string) => boolean;

const requiredField: ValidationFunction = (value) => value.trim().length > 0;
const emailField: ValidationFunction = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// 抽象類別：共用欄位邏輯
abstract class FormFieldBase {
    abstract type: FieldType;

    modelValue = '';
    state: boolean | undefined = undefined;

    constructor(
        public name: string,
        public label: string,
        public placeholder: string,
        public invalidFeedback: string
    ) { }

    abstract validate(): boolean;

    get isValid(): boolean | undefined {
        return this.state;
    }
}

// 個別欄位類別
class TextField extends FormFieldBase {
    type = FieldType.Text;

    validate(): boolean {
        const isValid = requiredField(this.modelValue);
        this.state = isValid;
        return isValid;
    }
}

class EmailField extends FormFieldBase {
    type = FieldType.Email;

    validate(): boolean {
        const isValid = emailField(this.modelValue);
        this.state = isValid;
        return isValid;
    }
}

class TextAreaField extends FormFieldBase {
    type = FieldType.TextArea;

    validate(): boolean {
        const isValid = requiredField(this.modelValue);
        this.state = isValid;
        return isValid;
    }
}

// 表單欄位工廠（可選：根據 type 動態建立欄位）
class FormFieldFactory {
    static createField(
        type: FieldType,
        name: string,
        label: string,
        placeholder: string,
        invalidFeedback: string
    ): FormFieldBase {
        switch (type) {
            case FieldType.Text:
                return new TextField(name, label, placeholder, invalidFeedback);
            case FieldType.Email:
                return new EmailField(name, label, placeholder, invalidFeedback);
            case FieldType.TextArea:
                return new TextAreaField(name, label, placeholder, invalidFeedback);
            default:
                throw new Error(`Unsupported field type: ${type}`);
        }
    }
}

// 表單資料介面（依然保留）
interface FormData {
    name: string;
    email: string;
    message: string;
}

export {
    FieldType,
    FormFieldBase,
    TextField,
    EmailField,
    TextAreaField,
    FormFieldFactory,
    FormData,
};
