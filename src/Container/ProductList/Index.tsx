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





  
  const ProductCard = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>-8%</Text>
        </View>
        <Image
          source={{ uri:item.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text numberOfLines={2} style={styles.title1}>
          {item?.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>{item?.price}</Text>
          <Text style={styles.newPrice}>{item?.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

  return (
    <View
      style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Header />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          numColumns={3}
          data={product}
          renderItem={ProductCard}
          contentContainerStyle={styles.container}
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
  card: {
    width: 118,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    margin: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#e74c3c',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    zIndex: 2,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productImage: {
    width: 60,
    height: 100,
    marginVertical: 10,
  },
  title1: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 13,
  },
  newPrice: {
    color: '#e67e22',
    fontWeight: 'bold',
    fontSize: 15,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#e67e22',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});











