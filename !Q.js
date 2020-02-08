import React, { Component } from 'react'


class App extends Component{
    constructor(){
        super()
        this.state={
          isLoading:false,
          setResults:[],
          keyword:"delhi"
        }
      }
      render(){
        return(
            <View style={styles.header}>
          <Ionicons name="md-search" style={{marginLeft:2,}}size={28} color="black" />
          <TextInput 
            style={{marginTop:8,marginLeft:6,padding:2,width:240, height:20,}}
              onChangeText={keyword => this.setState({keyword})}
              value={this.state.keyword}
          />
          <TouchableOpacity style={{padding:3,width:100}}onPress={() => this.fetchrestaurants()}>
          <Text>Search</Text>
          </TouchableOpacity>
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
      width:320,
      display:'flex',
      flexDirection:'row',
      borderWidth: 1,
      borderColor: 'black',
      
      // opacity:0.25,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    }
  })
  export default App;
  