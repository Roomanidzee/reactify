import React from "react";
import Select from "react-select";
import {Gender} from "./props_and_values";
import {ValueType} from "react-select/lib/types";

interface State {

    value: Array<Gender>;
    onChange: Function;
    onBlur: Function;
    error: string;
    touched: boolean;

}


type Props = {

    value?: State["value"];
    onChange?: Function;
    onBlur?: Function;
    error?: string;
    touched?: boolean;

};

const options = [
    {value: "male", label: "Мужской пол"},
    {value: "female", label: "Женский пол"}
];

export default class CustomSelect extends React.Component<Props, State> {

    constructor(props : Props){
        super(props);
    }

    handleChange = (value: ValueType<Gender>) => {

        if(this.props.onChange){
            this.props.onChange('gender', value);
        }

    };

    handleBlur = () => {

        if(this.props.onBlur){
            this.props.onBlur('gender', true);
        }

    };

    render(): React.ReactNode{

        return (

            <div>
                <label htmlFor="gender">Гендерная принадлежность</label>
                <Select
                    id="color"
                    options={options}
                    isMulti
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error && this.props.touched && (
                    <div style={{ color: "red", marginTop: ".5rem" }}>
                        {this.props.error}
                    </div>
                )}
            </div>


        );

    }

}
