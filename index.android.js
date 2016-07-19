/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    foodTitle: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 30
    },
    imageContainer: {
        flex: 1.0,
        alignItems: 'stretch'
    },
    foodImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null
    },
    prepTime: {
        fontSize: 22,
        marginBottom: 10
    },
    ingredient: {
        textAlign: 'left',
        marginLeft: 10,
        fontSize: 16
    },
    ingredientContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor: '#eeeeee',
        fontSize: 20,
        color: "black"
    },
});

class Ingredient extends Component {
    render() {
        return (
            <View>
              <Text style={styles.ingredient}>
                • {this.props.text}
              </Text>
            </View>
        );
    }
}

class Main extends Component {
    render() {
        const imgUrl = 'http://assets.epicurious.com/photos/54bac91ae231becc7f3d37bf/6:4/w_620%2Ch_413/chocolate-mousse-6x4.jpg';
        
        return (
            <View style={styles.container}>
              <Image
                style={styles.foodImage}
                source={{uri: imgUrl}}
                />
              <Text style={styles.foodTitle}>
                Chocolate Mousse 
              </Text>
              <Text>
                <Text style={styles.prepTime}>
                  Prep Time: 20 min
                </Text>
              </Text>
              <View style={styles.ingredientContainer}>
                <Ingredient text="2 cups chilled heavy cream" />
                <Ingredient text="4 large egg yolks" />
                <Ingredient text="3 tablespoons sugar" />
                <Ingredient text="1 teaspoon vanilla" />
                <Ingredient text="7 oz fine-quality bittersweet chocolate (not unsweetened), chopped" />
                <Ingredient text="garnish: lightly sweetened whipped cream" />
              </View>
              
              <Button
                onPress={() => console.log('PRESSED BUTTON')} 
                style={styles.button}
                >
                Hello
              </Button>

            </View>
        );
    }
}

AppRegistry.registerComponent('FoodApp', () => Main);
