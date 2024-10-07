import { Formik, Form } from 'formik';
import { useState } from 'react';
import FormInput from '../components/FormInput';
import * as Yup from 'yup';

const FormPage = () => {
  const [submitted, setSubmitted] = useState(0)
  const [values, setValues] = useState({})
  
  const showFormData = (values) => {
    values.age = parseInt(values.age)
    values.postal_code = parseInt(values.postal_code)
    setValues(values)
    setSubmitted(1)
  }

  const initialFormState = {
    surname: '',
    name: '',
    age: '',
    email: '',
  }

  return (
    <div>
      <h1><b>Formulaire</b></h1>
      <Formik
        initialValues={initialFormState}
        validationSchema={Yup.object({
        surname: Yup.string()
          .max(25, 'Écrivez 25 ou moins de characters')
          .required('Champ obligatoire'),
        name: Yup.string()
          .max(15, 'Écrivez 15 ou moins de characters')
          .required('Champ obligatoire'),
        age: Yup.number()
          .required('Champ obligatoire'),
        email: Yup.string()
          .email('Adresse mail invalide')
          .required('Champ obligatoire'),
        street: Yup.string()
          .required('Champ obligatoire'),
        city: Yup.string()
          .required('Champ obligatoire'),
        country: Yup.string()
          .required('Champ obligatoire'),
        postal_code: Yup.string()
          .matches(/^\d{5}$/, "Doit comporter exactement 5 chiffres")
          .required("Champ obligatoire"),
        })}
        onSubmit={(values) => {
          showFormData(values)
        }}
        >
          <Form className="needs-validation" noValidate>
            <FormInput
              label="Nom"
              name="surname"
              type="text"
            />
            
            <FormInput
              label="Prénom"
              name="name"
              type="text"
            />

            <FormInput
              label="Âge"
              name="age"
              type="number"
            />

            <FormInput
              label="Email"
              name="email"
              type="text"
            />

            <br />
            <h3> <b>Adresse</b> </h3>

            <FormInput  
              label="Rue"
              name="street"
              type="text"
            />

            <FormInput
              label="Ville"
              name="city"
              type="text"
            />

            <FormInput
              label="Pays"
              name="country"
              type="text"
            />

            <FormInput
              label="Code postale"
              name="postal_code"
              type="number"
            />

            <button type="submit">Soumettre</button>
          </Form>
        </Formik>
        
        {submitted === 1 ? 
          <div>
            <br />
            <h1> <b>Informations saisies</b> </h1>
            <p>Nom: <b>{values.surname}</b> </p>
            <p>Prénom: <b>{values.name}</b> </p>
            <p>Âge: <b>{values.age}</b> </p>
            <p>Email: <b>{values.email}</b> </p>
            <h3 style={{color: "green"}}> <b>Adresse</b> </h3>
            <p>Rue: <b>{values.street}</b> </p>
            <p>Ville: <b>{values.city}</b> </p>
            <p>Pays: <b>{values.country}</b> </p>
            <p>Code postale: <b>{values.postal_code}</b> </p>
          </div> 
        : null}
    </div>
  )
}

export default FormPage