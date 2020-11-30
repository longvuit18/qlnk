import React from "react";
import { connectContainer, IPageProps } from "../../libs/containers";
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from "react-facebook-login";
import { Table } from "antd";

interface IState { }
class LoginRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);

        this.state = {};
    }


    render() {
        const dataSource = [
            {
              key: "1",
              name: "Mike",
              age: 32,
              address: "10 Downing Street",
            },
            {
              key: "2",
              name: "John",
              age: 42,
              address: "10 Downing Street",
            },
          ];
          
          const columns = [
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age",
            },
            {
              title: "Address",
              dataIndex: "address",
              key: "address",
            },
          ];
        return (
            <>
                <Table dataSource={dataSource} columns={columns} />;
                
            </>
        );

    }

    private rp  = (userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
            console.log(userInfo);
    }

}

export const Login = connectContainer(LoginRaw);