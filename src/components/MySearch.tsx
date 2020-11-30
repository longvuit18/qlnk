import { Input, Button, Select } from "antd";
import React from "react";
import { filterTable } from "../libs/filter";

interface IProps<T> {
    inputData: Array<T>;
    outputData: (outputData: Array<T>) => void;
    keys: Array<{ key: string, label: string }>;
}

interface IState<T> {
    data: Array<T>;
    key: string;
}
export class MySearch<T> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>) {
        super(props);

        this.state = {
            data: props.inputData,
            key: props.keys[0].key
        };
    }

    render() {
        const { Option } = Select;

        const selector = (

            <Select onChange={(value, _o) => this.setState({ key: value as any })} defaultValue={this.state.key} style={{ width: "25%" }}>
                {this.props.keys.map((item, index) => {
                    return (<Option value={item.key} key={index}>{item.label}</Option>)
                })}

            </Select>

        );
        return (
            <>

                <Input.Group compact>
                    {selector}
                    <Input.Search
                        style={{ width: "65%" }}
                        placeholder={"Nhập ..."}
                        allowClear
                        enterButton 
                        onSearch={this.onSearch} />
                    <div style={{ width: "10%" }}>
                        <Button onClick={() => this.props.outputData(this.state.data)} >Reset</Button>
                    </div>
                </Input.Group>


            </>
        );
    }

    private onSearch = (value: string) => {
        const filters = filterTable<T>(value, this.state.data, this.state.key);
        this.props.outputData(filters);
    }
}