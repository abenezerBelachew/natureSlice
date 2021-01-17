import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import {View, Text, FlatList, ScrollView, SafeAreaView} from 'react-native'



export default function Feed() {
    const LeftContent = props => <Avatar.Icon {...props} icon="fruit-pineapple" />

    return (
        <ScrollView>
        <Card>
            <Card.Title title="Shared Today" subtitle="Foods given out today" left={LeftContent} />
            

            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1577161618325-2663fcfb4636?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80' }} />
            <Card.Content>
            {/* <Paragraph>Mi Casa</Paragraph> */}
            </Card.Content>
            <Card.Actions>
            <Button>Pea Berry Special Organic Coffee</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>

        </Card>

        <Card>

            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1603189864792-cb81bf683b17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80' }} />
            <Card.Content>
            {/* <Paragraph>Mi Casa</Paragraph> */}
            </Card.Content>
            <Card.Actions>
            <Button>Wine, Cinnamon Buns and Biscuits</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
            </Card>

        <Card>

            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1608611518153-f708d93fc1d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }} />
            <Card.Content>
            {/* <Paragraph>Mi Casa</Paragraph> */}
            </Card.Content>
            <Card.Actions>
            <Button>Cheesy Sauce</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>

        <Card>

            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1603189863791-8154cbb04e13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' }} />
            <Card.Content>
            {/* <Paragraph>Mi Casa</Paragraph> */}
            </Card.Content>
            <Card.Actions>
            <Button>Wine, Cashew, Crispbread</Button>
            {/* <Button>Ok</Button> */}
            </Card.Actions>
        </Card>

        </ScrollView>


    )
}
