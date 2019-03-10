import React from "react";
import UserCardUtils from "../../utils/second_app";

import { Button, Card } from "antd";
import {Icon} from "antd";

const initialState = {users: [{ id: 0, nickname: "Вано" }]};
type State = Readonly<typeof initialState>;

type Props = {
    users?: State["users"]
}

import '../../assets/styles/UserCardComponent.css';

export default class UserCardComponent extends React.Component<Props, State>{

    readonly state: State = initialState;

    constructor(props: Props){
        super(props);

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);

    }

    handleAddUser = () => {

        this.setState((previousState: State, props: Props) => {

            let {users} = previousState;

            let newUserID = UserCardUtils.getRandomNumber();
            let newUserNickname = `Вано #${newUserID}`;

            users.concat([{id: newUserID, nickname: newUserNickname}]);

            return {
                users: users
            }

        });

    };

    handleUpdateUser = (id: number) => {

        this.setState((previousState: State, props: Props) => {

            let {users} = previousState;

            let userForUpdate = users.filter(user => user.id === id)[0];

            userForUpdate.nickname = `Вано #${UserCardUtils.getRandomNumber()}`;

            return {
                users: users
            }

        });

    };

    handleDeleteUser = (id: number) => {

        this.setState((previousState: State, props: Props) => {

            let {users} = previousState;
            let deleteIndex = users.findIndex(user => user.id === id);
            users.splice(deleteIndex, 1);

            return {
                users: users
            }

        });

    };

    render(): React.ReactNode {

        const {users} = this.state;
        const userItems = users.map(user => {

            return (
                <p className="center_text" key = {user.id}>
                    {user.nickname}
                    <Icon type="edit" onClick={() =>this.handleUpdateUser(user.id)}/>
                    <Icon type="delete" onClick={() =>this.handleDeleteUser(user.id)}/>
                </p>
            );

        });


        return(

            <div className="center_div">

                <Card title="Пользователи" headStyle={{textAlign: "center"}}>{userItems}</Card>

                <Button type="primary" onClick={this.handleAddUser} >
                    Добавить пользователя
                </Button>

            </div>

        );

    };

}
