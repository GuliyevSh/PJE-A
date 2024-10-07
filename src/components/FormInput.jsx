import { useField } from "formik";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let inputStyle = "form-control"
  if (meta.touched)
    inputStyle = inputStyle + (meta.error ? " is-invalid" : " is-valid");

  return (
  <div className='form-group'>
    <label htmlFor = {props.name}> {label} </label>
    <input className = {inputStyle} {...field} {...props} id = {props.name} />
    <div className="invalid-feedback"> {meta.error} </div>
  </div>
  )
}

export default FormInput