export const formValidators = {
    notEmptyValidator: {
        validate: (value) => {
            return value.trim().length > 0;
        },
        message: "Este campo no puede estar vacío"
    },
    telephoneValidator: {
        validate: (value) => {
            return value.trim().length === 9 && /^\d+$/.test(value);
        },
        message: "El teléfono debe tener 9 dígitos y contener solo números"
    },
    notNoneTypeValidator: {
        validate: (value) => {
            return value !== "None";
        },
        message: "Este campo no puede estar vacío"
    },
    validPhoneNumberValidator: {
        validate: (value) => {
            return value.trim().length === 9 && /^\d+$/.test(value);
        },
        message: "El teléfono debe tener 9 dígitos y contener solo números"
    },
}