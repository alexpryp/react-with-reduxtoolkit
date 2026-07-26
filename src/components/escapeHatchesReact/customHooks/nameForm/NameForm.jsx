import useFormInput from '@/components/escapeHatchesReact/customHooks/hooks/useFormInput';

export default function NameForm() {
  const firstNameProps = useFormInput('Mary')
  const lastNameProps = useFormInput('Poppins')

  return (
    <>
      <hr></hr>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />

      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  )
}
