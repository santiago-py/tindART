import React from 'react';
import { StyleSheet, Button, Text, View, Dimensions, Image, Animated, PanResponder, Alert } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
// import Icon from 'react-native-vector-icons/Ionicons'
const Users = [
  { id: "1", uri: require('../assets2/1.jpg'), desc: "blah1", title: "bleh1" },
  { id: "2", uri: require('../assets2/2.jpg'), desc: "blah2", title: "bleh2" },
  { id: "3", uri: require('../assets2/3.jpg'), desc: "blah3", title: "bleh3" },
  { id: "4", uri: require('../assets2/4.jpg'), desc: "blah4", title: "bleh4" },
  { id: "5", uri: require('../assets2/5.jpg'), desc: "blah5", title: "bleh5" },
]

export default class SwipeTest extends React.Component {

    constructor() {
        super()
    
        this.position = new Animated.ValueXY()
        this.state = {
          currentIndex: 0
        }
    
        this.rotate = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: ['-10deg', '0deg', '10deg'],
          extrapolate: 'clamp'
        })
    
        this.rotateAndTranslate = {
          transform: [{
            rotate: this.rotate
          },
          ...this.position.getTranslateTransform()
          ]
        }
    
        this.likeOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [0, 0, 1],
          extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 0],
          extrapolate: 'clamp'
        })
    
        this.nextCardOpacity = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
          inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
          outputRange: [1, 0.8, 1],
          extrapolate: 'clamp'
        })
    
      }
      componentWillMount() {
        this.PanResponder = PanResponder.create({
    
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onPanResponderMove: (evt, gestureState) => {
    
            this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
          },
          onPanResponderRelease: (evt, gestureState) => {
    
            if (gestureState.dx > 120) {
              Animated.spring(this.position, {
                toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            }
            else if (gestureState.dx < -120) {
              Animated.spring(this.position, {
                toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
              }).start(() => {
                this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                  this.position.setValue({ x: 0, y: 0 })
                })
              })
            }
            else {
              Animated.spring(this.position, {
                toValue: { x: 0, y: 0 },
                friction: 4
              }).start()
            }
          }
        })
      }
    
      renderUsers = () => {
    
        return Users.map((item, i) => {
    
    
          if (i < this.state.currentIndex) {
            return null
          }
          else if (i == this.state.currentIndex) {
    
            return (
              <Animated.View
                {...this.PanResponder.panHandlers}
                key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
                <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
    
                </Animated.View>
    
                <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
    
                </Animated.View>
          
                <Text>Title: {item.title}</Text>

                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  source={item.uri} />
                
                <Button title="INFO" onPress={() => Alert.alert(item.desc)}/> 

              </Animated.View>
            )
          }
          else {
            return (
              <Animated.View
    
                key={item.id} style={[{
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }],
                  height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                }]}>
                <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
    
                </Animated.View>
    
                <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                  <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
    
                </Animated.View>
    
                <Text>Title: {item.title}</Text>
                
                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                  source={item.uri} />
                
                <Button title="INFO" onPress={() => Alert.alert(item.desc)}/> 

              </Animated.View>
            )
          }
        }).reverse()
      }
    
      render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{ height: 5 }}>
    
            </View>
            <View style={{ flex: 1 }}>
              {this.renderUsers()}
            </View>
            <View style={{ height: 60 }}>
    
            </View>
    
    
          </View>
    
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });