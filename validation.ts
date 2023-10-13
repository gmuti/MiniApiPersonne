import { object, string } from 'yup';

let PersonneSchema = object({
  firstname: string().required(),
  lastname: string().required(),
});

export {PersonneSchema};