import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Rating,
  Icon
} from 'react-native-elements'

export default class extends React.Component {
  render() {
    return (
      <View style={[ styles.card, this.props.style ]}>
        <Image
          source={ this.props.illustration }
          style={ styles.image }
        />
        <View style={ styles.contentContainer }>
          <Text style={ styles.title }>{ this.props.title }</Text>
          <Text style={ styles.subtitle}> { this.props.subtitle }</Text>
          <View style={ styles.distanceContainer }>
            <Icon
              name='place'
              type='material'
              color={ color.green }
              size={ fontSize.xSmall }
            />
            <Text style={ styles.distance }>
              { this.props.distance } km to city
            </Text>
          </View>
          <View style={ styles.starsContainer }>
            {
              Array(5).fill().map((_, i) => (
                <Icon
                  key={i}
                  name={"star" + (i < this.props.stars ? "" : "-border")}
                  color={ color.green }
                  size={ fontSize.small }
                />
              ))
            }
          </View>
        </View>
        <View style={ styles.priceContainer }>
          <Text style={ styles.price }>
            { this.props.currency + this.props.price }
          </Text>
          <Text style={ styles.priceUnit }>/per night</Text>
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window');
const fontSize = {
  xSmall: height * 0.02,
   small: height * 0.03,
  medium: height * 0.04,
   large: height * 0.05,
  xLarge: height * 0.06
}
const color = {
  black: '#222f3e',
  gray : '#8395a7',
  green: '#54d3c2',
  white: '#dff9fb',
  ltGray: '#dfe4ea'
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: height * 0.15,
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  image: {
    width: '30%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    marginLeft: width * 0.03
  },
  title: {
    marginTop: height * 0.01,
    color: color.black,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-ExtraBold'
  },
  subtitle: {
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Bold'
  },
  distanceContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  distance: {
    marginLeft: width * 0.01,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  starsContainer: {
    marginBottom: height * 0.01,
    flexDirection: 'row'
  },
  priceContainer: {
    position: 'absolute',
    right: width * 0.03,
    bottom: height * 0.01,
    alignItems: 'flex-end'
  },
  price: {
    color: color.black,
    fontSize: fontSize.small,
    fontFamily: 'Merriweather-Black'
  },
  priceUnit: {
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  }
})