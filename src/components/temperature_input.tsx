import React from "react";
import {SCALE_NAMES} from "../constants";

const initialState = {temperature: '', scale: '', onTemperatureChange: {}};
type State = Readonly<typeof initialState>;

type TemperatureInputProps = {
    temperature: State['temperature'];
    scale: State['scale'];
    onTemperatureChange: State['onTemperatureChange'];
}

export class TemperatureInput extends React.Component<TemperatureInputProps, State>{

    readonly state: State = initialState;

    constructor(props: TemperatureInputProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any) {
        // баг, надо исправить
        // @ts-ignore
        this.props.onTemperatureChange(e.target.value);
    }

    render(): React.ReactNode {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введите температуру в {SCALE_NAMES[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }

}
