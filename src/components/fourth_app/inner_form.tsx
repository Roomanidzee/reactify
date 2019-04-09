import React from "react";

import {Form, Field, InjectedFormikProps} from 'formik';
import {FormProps, FormValues} from "./props_and_values";
import CustomSelect from "./custom_select";

const InnerForm: React.FunctionComponent<InjectedFormikProps<FormProps, FormValues>> = (props) =>{

    const {
        values,
        touched,
        errors,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
        message
    } = props;

    return (
        <Form>
            <h1>{message}</h1>

            <Field type="input" name="nickname" placeholder="Никнейм"/>
            {touched.nickname && errors.nickname && <div>{errors.nickname}</div>}

            <br/>

            <CustomSelect

                value={values.gender}
                onChange={setFieldValue}
                onBlur={setFieldTouched}

            />

            <br/>

            <Field type="phone" name="phoneNumber" placeholder="Номер телефона"/>
            {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}

            <br/>

            <Field type="email" name="email" placeholder = "Электронная почта"/>
            {touched.email && errors.email && <div>{errors.email}</div>}

            <br/>

            <Field type="textarea" name="textStory" placeholder="Немного о себе"/>
            {touched.textStory && errors.textStory && <div>{errors.textStory}</div>}

            <br/>

            <Field type="textarea" name="filmsAndSeries" placeholder="Ваши фильмы и сериалы"/>
            {touched.filmsAndSeries && errors.filmsAndSeries && <div>{errors.filmsAndSeries}</div>}

            <br/>

            <button type="submit" disabled={isSubmitting}>
                Отправить
            </button>
        </Form>
    );

};

export default InnerForm;
