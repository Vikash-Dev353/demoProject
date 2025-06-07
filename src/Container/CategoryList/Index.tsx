import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground, SafeAreaView } from "react-native";
import Header from "../../Component/Header";
import { useEffect, useState } from "react";
import { getProductServices } from "../../Api/Services/getProductServices";


const CategoryList = () => {

  const [product, setProduct] = useState([])
  const navigation = useNavigation<any>();

  useEffect(() => {
    getProductData()
  }, [])


  const getProductData = () => {
    getProductServices().then((res: any) => {
      if (res?.length > 0) {
        setProduct(res)
      }
    }).catch((err: any) => {
      console.log('err====>>>>', err)
    })
  }

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity 
      style={styles.itemContainer}
        onPress={()=>{
          navigation.navigate('productlist')
        }}
      >
        <Text style={styles.TitleTxt}>{item?.title?.substring(0, 20)}</Text>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    )
  }

  const horizontalItem = ({ item }: any) => {
    return (
      
      <Image
        source={{ uri: item.image }}
        style={{
          width:100,
          height:100,
          marginLeft:16,
        }}
        resizeMode="cover"
      />
    
    )
  }


  return (
    <View
      style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Header />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          numColumns={2}
          data={product}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          ListHeaderComponent={() => (
            <FlatList
              horizontal
              data={product}
              renderItem={horizontalItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            />
          )}
        />
      </SafeAreaView>
    </View>

  );
}

export default CategoryList;


const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  itemContainer: {
    position: 'relative',
    width: '45%',
    margin: 10,
    height: 170
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 8
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',

  },
  TitleTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    top: 50,
    // zIndex: 1,
    color: "blue"
  },

});











