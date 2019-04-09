import React from "react";

import {Form, Field, InjectedFormikProps} from 'formik';
import {FormProps, FormValues} from "./props_and_values";

const InnerForm: React.FunctionComponent<InjectedFormikProps<FormProps, FormValues>> = (props) =>{

    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>

            <Field type="input" name="firstName" />
            {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

            <Field type="select" name="gender"/>
               {/* <option value="male">Мужской пол</option>
                //<option value="female">Женский пол</option>
            </Field>*/}
            {touched.gender && errors.gender && <div>{errors.gender}</div>}

            <Field type="phone" name="phoneNumber"/>
            {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}

            <Field type="email" name="email" placeholder/>
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="textarea" name="textStory"/>
            {touched.textStory && errors.textStory && <div>{errors.textStory}</div>}

            <Field type="textarea" name="filmsAndSeries"/>
            {touched.filmsAndSeries && errors.filmsAndSeries && <div>{errors.filmsAndSeries}</div>}

            <button type="submit" disabled={isSubmitting}>
                Отправить
            </button>
        </Form>
    );

};

export default InnerForm;
