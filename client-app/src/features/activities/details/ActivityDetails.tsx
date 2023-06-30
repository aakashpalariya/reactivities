import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity
}

export default function ActivityDetails({ activity }: Props) {
    return (
        <Card fluid>
            <Card.Content>
                <img src={`/assets/categoryImages/${activity.category}.jpg`} style={{width:'100%'}} />

                <Card.Header>{activity.title} </Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2' >
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}