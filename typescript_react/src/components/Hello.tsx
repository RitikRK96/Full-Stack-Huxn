import { useForm } from "react-hook-form";

const Hello = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" {...register("firstName")} />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        {...register("lastName", { required: "Last name is required." })}
      />
      {errors.lastName && (
        <p style={{ color: "red" }}>{errors.lastName.message}</p>
      )}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        {...register("age", {
          valueAsNumber: true,
          min: { value: 18, message: "You must be at least 18." },
        })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default Hello;
