import * as Yup from 'yup';

export const CreateItem = Yup.object().shape({
    name: Yup.string().required().label('name'),
    price: Yup.string()
        .required('Required'),
    file: Yup.array().required().label('file'),


})