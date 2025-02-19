import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';

const { Group: CheckboxGroup } = Checkbox;
const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
        disabled: true,
    },
];

class UnControlApp extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(selectedItems) {
        console.log('onChange callback', selectedItems);
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <CheckboxGroup
                    defaultValue={['apple']}
                    dataSource={list}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<UnControlApp />, mountNode);
