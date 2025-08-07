import {useForm, SubmitHandler} from "react-hook-form"

interface Formdata {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    completeLoaction: string;
}

const AdvanceForm = () => {

    const {register, hangleSubmit, formState: {errors},} = useForm<Formdata>();
  return (
    <>

    </>
  )
}

export default AdvanceForm