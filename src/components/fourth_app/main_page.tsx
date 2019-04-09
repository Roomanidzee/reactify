import React from "react";
import MainForm from "./main_form";

const initialState = {
    message: ""
};

type State = Readonly<typeof initialState>;
type Props = {
    message?: State["message"]
}

export default class FormExampleComponent extends React.Component<Props, State> {

    readonly state: State = initialState;

    constructor(props: Props){
        super(props);
    }

    render(): React.ReactNode {

        return(
            <div>
               <MainForm message="Пример формы ввода данных" />
            </div>
        )

    }

}
