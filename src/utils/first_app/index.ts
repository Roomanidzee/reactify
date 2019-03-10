
export default class TemperatureUtils{

    static toCelsius(fahrenheit: number){
       return (fahrenheit - 32) * 5 / 9;
    }

    static toFahrenheit(celsius: number){
        return (celsius * 9 / 5) + 32;
    }

    static tryConvert(temperature: string, convert_func: Function){

        const input = parseFloat(temperature);

        if(Number.isNaN(input)){
            return '';
        }

        const output = convert_func(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();

    }
}
