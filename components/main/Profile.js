import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Text, Image, FlatList } from 'react-native'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'

function Profile(props) {
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser ] = useState(null);

    useEffect(() => {
        const { currentUser, posts } = props;

        if (props.route.params.uid === firebase.auth().currentUser.uid) {
            setUser(currentUser)
            setUserPosts(posts)
        }
        else {
            firebase.firestore()
                .collection("users")
                .doc(props.route.params.uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        setUser(snapshot.data());
                    }
                    else {
                        console.log('does not exist')
                    }
                })
            firebase.firestore()
                .collection("posts")
                .doc(props.route.params.uid)
                .collection("userPosts")
                .orderBy("creation", "asc")
                .get()
                .then((snapshot) => {
                    let posts = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    setUserPosts(posts)
                })
        }

    }, [props.route.params.uid])
    if (user === null) {
        return <View />
    }
    const LeftContent = props => <Avatar.Icon {...props} icon="fruit-pineapple" />

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text>{ user.name }</Text>
                <Text>{ user.email }</Text>
            </View>

            <View style={styles.containerGallery}>
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={userPosts}
                    renderItem={({ item }) => (
                        // <Card>
                        //     {/* <Card.Title title={ item.description } /> */}
                        //     {/* <Card.Content> */}
                        //     {/* <Paragraph>{ item.description }</Paragraph> */}
                        //     {/* </Card.Content> */}
                        //     <Card.Cover source={{ uri: item.downloadURL }} />
                        
                            
                        //     <Title>{item.description}</Title>
                        //     <Paragraph>{ item.updatedAt }</Paragraph>
                        // </Card>

                        // **************
                        <Card>
                        <Card.Title title="Your Donations" subtitle="Food you didn't waste" left={LeftContent} />
                        
            
                        <Card.Cover source={{ uri: item.downloadURL }} />
                        <Card.Content>
                        {/* <Paragraph>Mi Casa</Paragraph> */}
                        </Card.Content>
                        <Card.Actions>
                        <Button>{item.description}</Button>
                        {/* <Button></Button> */}
                        </Card.Actions>
            
                    </Card>
                        // **************


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
})

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
    header: {
        fontSize: 16,
        fontWeight:'bold',
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