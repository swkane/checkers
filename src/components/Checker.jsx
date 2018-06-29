import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default class Checker extends React.Component {
    state = {
        id: this.props.id,
        color: this.props.color, // cyan / navy
        crowned: false
    }

    moveForward = (direction) => {
        console.log('You moved forward' + direction);
    }

    captureForward = (direction) => {
        console.log('You captured forward' + direction);
    }

    crowned = () => {
        console.log('You were crowned');
    }

    moveBackward = (direction) => {
        console.log('You moved backward' + direction);
    }

    render() {
        return (
            <Button circular size='large' color={this.props.color} icon={<Icon name='circle outline' />} />
        )
    }
}