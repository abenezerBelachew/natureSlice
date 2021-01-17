import React from 'react'
import {StyleSheet, View, Text, Image, FlatList } from 'react-native'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { connect } from 'react-redux'

function Profile(props) {
    const { currentUser, posts } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text>{ currentUser.name }</Text>
                <Text>{ currentUser.email }</Text>
            </View>

            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={posts}
                    renderItem={({ item }) => (
                        <Card>
                            {/* <Card.Title title={ item.description } /> */}
                            <Card.Content>
                            <Title>{item.description}</Title>
                            {/* <Paragraph>{ item.description }</Paragraph> */}
                            </Card.Content>
                            <Card.Cover source={{ uri: item.downloadURL }} />
                        </Card>


                        // <View
                        //     style={styles.containerImage}>

                        //     <Image
                        //         style={styles.image}
                        //         source={{ uri: item.downloadURL }}
                        //     />
                        //     <Text>
                        //         { item.description }
                        //     </Text>
                        // </View>

                    )}

                />
            </View>


            
        </View>
    )
}


const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
    // following: store.userState.following
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        margin: 20
    },
    containerGallery: {
        flex: 1
    },
    containerImage: {
        flex: 1 / 3

    },
    image: {
        // flex: 1,
        // aspectRatio: 1 / 1,
        width: '30%',
        height: 70,
        marginBottom: 10,
    }
});

export default connect(mapStateToProps, null)(Profile);