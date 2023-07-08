import * as yup from 'yup';

export const contractorValidationSchema = yup.object().shape({
  work_details: yup.string().required(),
  availability: yup.boolean().required(),
  user_id: yup.string().nullable(),
});
