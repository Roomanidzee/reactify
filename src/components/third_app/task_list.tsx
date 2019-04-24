import React from "react";

import { Card, Button, Input} from "antd";
import TaskComponent from "./task";
import _ from "lodash";

import '../../assets/styles/third_app/TaskListComponent.css';
import {connect} from "react-redux";
import {ADD_TASK, COMPLETE_TASK} from "./redux/action_types";

const initialState = {
  input: "",
  tasks: [{id: 0, title: "test", complete: false}]
};

type State = Readonly<typeof initialState>;

type Props = {
    input?: State["input"],
    tasks?: State["tasks"]
}

class TaskListComponent extends React.Component<Props, State>{

    inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    readonly state: State = initialState;

    constructor(props: Props){
        super(props);

        this.handleTaskCreation = this.handleTaskCreation.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);

    }

    componentDidMount(): void {

        if(this.inputRef.current){
            this.inputRef.current.focus();
        }

    }

    handleTaskCreation = () => {

        const newTasks = _.cloneDeep(this.state.tasks);

        const task = {
            id: newTasks.length > 0 ? newTasks[newTasks.length - 1].id + 1 : 0,
            title: this.state.input,
            complete: false
        };

        newTasks.push(task);
        this.setState((previousState: State, props: Props) => {

            return {
                tasks: newTasks,
                input: ""
            }

        });
        //this.props.addTask(task); - добавить потом в пропсы

    };

    handleStatusChange = (taskId: number, complete: boolean) => {

        //const {completeTask} = this.props;

        let tasks = _.cloneDeep(this.state.tasks);

        const newTasks = tasks.map(task => {

           if(task.id === taskId){
               task.complete = complete;
           }

           return task;

        });

        this.setState((previousState: State, props: Props) => {

            return {
                tasks: newTasks
            }

        });

        //completeTask(task);

    };

    render(): React.ReactNode {

        let taskComponents = this.state.tasks.map(task => (
            <TaskComponent
                key={task.id}
                task={task}
                handleStatusChange={this.handleStatusChange}
            />
        ));

        if (taskComponents.length === 0) {
            taskComponents = [];
        }

        return (
            <div className="App">
                <div className="Content">
                    <div
                        style={{
                            width: 400,
                            display: "flex",
                            justifyContent: "flex-end",
                            paddingBottom: 8
                        }}
                    >
                        <Input
                            value={this.state.input}
                            onChange={event => this.setState({ input: event.target.value })}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.handleTaskCreation();
                                }
                            }}
                            placeholder="New task"
                            style={{ marginRight: 8 }}
                        />
                        <Button type="primary" onClick={this.handleTaskCreation}>
                            Добавить
                        </Button>
                    </div>
                    <Card
                        style={{ width: 400 }}
                        bodyStyle={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <div style={{ flexGrow: 1 }}>{taskComponents}</div>
                    </Card>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (store: any) => {
    return {
        tasks: store.taskReducer.tasks
    }
};

const mapDispatchToProps = (dispatch : any, ownProps: any) => ({
   addTask: (task: any) => {
       dispatch({
           type: ADD_TASK,
           task: task
       });
   },
   completeTask: (task: any) => {
       dispatch({
           type: COMPLETE_TASK,
           task: task
       })
   }
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);
