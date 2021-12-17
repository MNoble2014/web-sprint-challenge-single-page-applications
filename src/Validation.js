import * as yup from 'yup'

const Validation = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup   
        .string()
        .oneOf(['SM', 'MD', 'LG'], 'Role is required'),
    special: yup   
        .string()
        .trim(),
    bacon: yup.boolean(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
})

export default Validation