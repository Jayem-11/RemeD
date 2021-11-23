import * as Yup from "yup";

const validations = {
    signinValidations: {
        password: {
            custom: {
                isValid: value => value.length > 6,
                message: 'The password must be at least 6 characters long'
            }
        },
        email: {
            pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message:'Please enter a valid email address',
            }
        }
    },
}

export const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required('Email is a required field'),
    password: Yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
})

export const doctorSignupSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required('Email is a required field'),
    password: Yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    firstname: Yup
        .string()
        .required('Firstname is a required field'),
    lastname: Yup
        .string()
        .required('Lastname is a required field'),
    phoneno: Yup
        .string()
        .required('Phoneno is a required field'),
    speciality: Yup
        .string()
        .required('Speciality is a required field'),
    institution: Yup
        .string()
        .required('Institution is a required field'),
    license: Yup
        .string()
        .required('License is a required field'),
    address: Yup
        .string()
        .required('Address is a required field'),
})
export const patientSignupSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required('Email is a required field'),
    password: Yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    firstname: Yup
        .string()
        .required('Firstname is a required field'),
    lastname: Yup
        .string()
        .required('Lastname is a required field'),
    phoneno: Yup
        .string()
        .required('Phoneno is a required field'),
    gender: Yup
        .string()
        .required('Gender is a required field'),
    bloodType: Yup
        .string()
        .required('Institution is a required field'),
})

export default validations;