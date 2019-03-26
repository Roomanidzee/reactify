import React from "react";
import { Checkbox } from "antd";

interface ComponentFunctions {
    handleStatusChange: (taskId: number, complete: boolean) => void
}

const initialState = {
    task : {
        id: 0,
        title: "test",
        complete: false
    },
};

type State = Readonly<typeof initialState>;

type Props = {
    task: State["task"],
    handleStatusChange: ComponentFunctions["handleStatusChange"]
}

export default class TaskComponent extends React.Component<Props, State>{

    state: Readonly<State> = {
        task : {
            id: 0,
            title: "test",
            complete: false
        }
    };

    shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
        return nextProps.task !== this.props.task;
    }

    render(): React.ReactNode {

        const { task, handleStatusChange } = this.props;

        let styles = {
            item: {
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                borderBottom: "solid 1px #E0E0E0",
                height: 46
            },
            title: {
                marginBottom: 0,
                textDecoration: ""
            }
        };

        if (task.complete) {
            styles.title.textDecoration = "line-through";
        }

        return(

            <div style={styles.item}>
                <Checkbox
                    checked={task.complete}
                    style={{ marginRight: 8 }}
                    onChange={event => handleStatusChange(task.id, event.target.checked)}
                />
                <h4 style={styles.title}>{task.title}</h4>
            </div>

        );

    }

}
