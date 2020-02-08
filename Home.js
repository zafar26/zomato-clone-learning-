import React, { Component } from 'react'
import { ScrollView,StyleSheet, Text,TextInput, View, Button, Alert,ActivityIndicator,TouchableOpacity } from 'react-native';
import Card from './card'
import { Ionicons } from '@expo/vector-icons';
// import Example from './autostart'

export default class Home extends Component{
  // const [results, setResults] = useState([]);
  constructor(){
    super()
    this.state={
      isLoading:false,
      setResults:[],
      keyword:"delhi"
    }
  }
  componentDidMount() {
   this.fetchrestaurants()
  }
   fetchrestaurants(){
     this.setState({isLoading:true});

    const url = 'https://developers.zomato.com/api/v2.1/search?q='+this.state.keyword
    fetch(url,{
       method: 'GET',
       headers: {
       'Content-type': 'application/json',
       'user-key': '250924d38e117e712c56cfc414f28b02'
       }
     })
     .then(res=>res.json())
     .then(res => this.setState({
      isLoading:false,
      setResults:res.restaurants
     }))
     .catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      keyword: event.target.value
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-search" style={{marginLeft:4,marginTop:2,}}size={28} color="black" />
          <TextInput 
            style={{marginTop:4,marginLeft:10,padding:0,width:210,fontSize:16, height:25,}}
              onChangeText={keyword => this.setState({keyword})}
              value={this.state.keyword}
          />
          <TouchableOpacity style={{marginTop:2,alignItems:'center',padding:2,width:100}}onPress={() => this.fetchrestaurants()}>
          <Text>Search</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={{marginTop:10}}>
        {
          this.state.isLoading ?
           <ActivityIndicator style={{margin:100}}size="large" color="#795548" />
        :

        <View>
          {this.state.setResults.map(d=>
            <Card key = {d.restaurant.id} 
            id={d.restaurant.id}
            name= {d.restaurant.name} 
            address={d.restaurant.location.address} 
            image={d.restaurant.thumb}
            rating={d.restaurant.user_rating.aggregate_rating}
            ratingColor={d.restaurant.user_rating.rating_color}
              />
          )}
          </View>
        }
        </ScrollView>
        <Button
        title="Go to Restaurants"
        onPress={() => this.props.navigation.navigate('Restaurants')}
      />
      </View>
        
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  header:{
    width:330,
    display:'flex',
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'black',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
})
// export default Home;
