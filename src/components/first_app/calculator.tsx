import React from "react";
import TemperatureUtils from "../../utils/first_app";
import {TemperatureInput} from "./temperature_input";

const initialBoilingState = {celsius: 0};
const initialCalculatorState = {temperature: '', scale: 'c'};

type BoilingState = Readonly<typeof initialBoilingState>;
type CalculatorState = Readonly<typeof initialCalculatorState>;

type BoilingProps = {
    celsius: BoilingState['celsius'];
}

type CalculatorProps = {
    temperature?: CalculatorState['temperature'];
    scale?: CalculatorState['scale'];
}

const BoilingVerdict: React.FunctionComponent<BoilingProps> = (props) => {

    if (props.celsius >= 100) {
        return <p>Вода станет кипятком.</p>;
    }
    return <p>Вода не станет кипятком.</p>;

};

export class Calculator extends React.Component<CalculatorProps, CalculatorState>{

    readonly state: CalculatorState = initialCalculatorState;

    private handleCelsius = () => this.setState(convertToCelsius);
    private handleFahrenheit = () => this.setState(convertToFahrenheit);

    constructor(props: CalculatorProps){
        super(props);
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
    }

    render(): React.ReactNode {

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? TemperatureUtils.tryConvert(temperature, TemperatureUtils.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? TemperatureUtils.tryConvert(temperature, TemperatureUtils.toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsius} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheit} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );

    }

}

const convertToCelsius = (previousState: CalculatorState) => ({scale: 'c', temperature: previousState.temperature});
const convertToFahrenheit =
    (previousState: CalculatorState) => ({scale: 'f', temperature: previousState.temperature});
