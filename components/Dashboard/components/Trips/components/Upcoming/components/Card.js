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
  Button,
  Icon,
  Rating
} from 'react-native-elements'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default class extends React.Component {
  render() {
    const depart = this.props.booking.date[0]
    const arrive = this.props.booking.date[1]
    const amount = this.props.booking.type
    return (
      <View style={[ styles.cardContainer, this.props.style ]}>
        <Text style={ styles.booking }>
          { depart.d } { months[depart.m - 1] } { depart.y } -&nbsp;
          { amount.room } Room{ amount.room > 1 ? 's' : '' }&nbsp;
          { amount.adult } Adult{ amount.adult > 1 ? 's' : '' }
          {
            amount.child > 0 ? (
              '&nbsp;' + amount.child + ' Child' + (
                amount.child > 1 ? 'ren' : ''
              )
            ) : ''
          }
        </Text>
        <View style={ styles.card }>
          <Image
            source={ this.props.illustration }
            style={ styles.image }
          />
          <View style={ styles.contentContainer }>
            <Text style={ styles.title }>{ this.props.title }</Text>
            <View style={ styles.distanceContainer }>
              <Text style={ styles.place }>{ this.props.place }</Text>
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
            <Text style={ styles.reviews }>
              { this.props.reviews } Reviews
            </Text>
          </View>
          <View style={ styles.priceContainer }>
            <Text style={ styles.price }>
              { this.props.currency + this.props.price }
            </Text>
            <Text style={ styles.priceUnit }>/per night</Text>
          </View>
          <View style={ styles.loveContainer }>
          <Button
            icon={
              <Icon
                name='heart'
                type='feather'
                size={ fontSize.small }
                color={ color.green }
              />
            }
            buttonStyle={ styles.love }
            onPress={ () => {} }
          />
        </View>
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
  cardContainer: {
    alignItems: 'center'
  },
  booking: {
    color: color.black,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  card: {
    width: width * 0.9,
    height: height * 0.4,
    marginTop: height * 0.03,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  image: {
    width: '100%',
    height: '60%',
  },
  contentContainer: {
    flex: 1,
    marginLeft: width * 0.03
  },
  title: {
    marginTop: height * 0.01,
    color: color.black,
    fontSize: fontSize.small,
    fontFamily: 'OpenSans-ExtraBold'
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  place: {
    marginRight: width * 0.01,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  distance: {
    marginLeft: width * 0.01,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
  },
  starsContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviews: {
    marginBottom: height * 0.01,
    color: color.gray,
    fontSize: fontSize.xSmall,
    fontFamily: 'OpenSans-Regular'
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
  },
  loveContainer: {
    position: 'absolute',
    right: width * 0.03,
    top: height * 0.01,
    backgroundColor: '#fff',
    borderRadius: 999,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  },
  love: {
    backgroundColor: '#0000',
    padding: height * 0.02
  }
})