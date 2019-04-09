import * as Yup from 'yup';
import {withFormik} from 'formik';
import {FormProps, FormValues} from "./props_and_values";
import InnerForm from "./inner_form";

const phoneRegexp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const MainForm = withFormik<FormProps, FormValues>({

   mapPropsToValues: props => {

       return {
           firstName: '',
           gender: '',
           phoneNumber: '',
           email: '',
           textStory: '',
           filmsAndSeries: '',
           message: ''
       };

   },

   validationSchema: Yup.object().shape({

       firstName: Yup.string()
                     .max(30, "Предел имени в сервисе - 30 символов")
                     .required("Введите своё имя в сервисе"),

       gender: Yup.string()
                  .oneOf(["male", "female"])
                  .required("Выберите свою половую принадлежность"),

       phoneNumber: Yup.string()
                       .matches(phoneRegexp, "Неправильно введён номер телефона"),

       email: Yup.string()
                 .email("Неправильно введён адрес электронной почты"),

       textStory: Yup.string()
                     .required("Напишите немного информации о себе"),

       filmsAndSeries: Yup.string()
                          .required("Опишите ваши любимые фильмы и сериалы")

   }),

   handleSubmit: (values, { setSubmitting }) => {

       alert("Данные сохранены!");
       setSubmitting(true);

   },

})(InnerForm);

export default MainForm;
