import React from 'react';
import { Text, Image, Dimensions, View, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem';

const DetailScreen = ({ route }) => {
  const { key, title, price, img,authImg,name ,intro,heading} = route.params;
  const isCarousel = React.useRef(null);

  return (

    <View className="flex-1">

        <View style={{justifyContent: 'center', alignSelf: 'center', width: '100%' }}>
          <Text className="text-center font-semibold text-2xl mt-12">{heading}</Text>

          <Carousel
            layout="stack"
            layoutCardOffset={9}
            ref={isCarousel}
            data={img}
            renderItem={({ item }) => <CarouselCardItem item={item} />}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            inactiveSlideShift={0}
            useScrollView={true}
            autoplay={true}
            autoplayInterval={4000}
            removeClippedSubviews={true}
          />

          <Text>{title}</Text>

        </View>


        <View className="flex-1 items-center">

          <Image
            className="w-80 h-80 rounded-lg"
            source={{ uri: authImg}}
            />
            <Text>{name}</Text>
            <Text>{intro}</Text>

        </View>
    </View>



  );
};

export default DetailScreen;
