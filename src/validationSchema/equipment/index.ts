import * as yup from 'yup';

export const equipmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  availability: yup.boolean().required(),
  user_id: yup.string().nullable(),
});
