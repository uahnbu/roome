export const hotels = [
  {
    title: 'Grand Royal Hotel',
    place: 'Wembley, London',
    distance: 2,
    stars: 4,
    price: 180,
    reviews: 80,
    illustration: require('./grandroyal.jpg'),
    booking: {
      date: [
        { d: 12, m: 12, y: 2019 },
        { d: 22, m: 12, y: 2019 }
      ],
      type: {
        room: 1,
        adult: 2,
        child: 0
      }
    }
  }, {
    title: 'Leonardo Hotel',
    place: 'Wembley, London',
    distance: 2,
    stars: 4,
    price: 220,
    reviews: 156,
    illustration: require('./leonardo.jpg'),
    booking: {
      date: [
        { d: 23, m: 12, y: 2019 },
        { d: 25, m: 12, y: 2019 }
      ],
      type: {
        room: 1,
        adult: 2,
        child: 0
      }
    }
  }
]