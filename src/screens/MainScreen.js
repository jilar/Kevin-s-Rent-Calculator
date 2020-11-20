import React from 'react';
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import {addRoomate}
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {ListItem} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';

const roomateListItem=(roomate)=>{
  return(
    <ListItem
      title:{roomate.name}
      subtitle:{` Percent Contribution: ${roomate.contributionPercent}`}
    />
  )
}

//{id:uuidv4();}
const MainScreen =({Roomates}) =>{
  const onClick=()=>{
    const roomate=[{
      id:uudv4(),
      name:null,
      contributionPercent:null
    }]
    addRoomate(roomate);
  }

  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>
        Roomates
        </Text>
        <TouchableOpacity onPress={onClick}>
          <FontAwesome name="plus" size={24} color="Green" />
        </TouchableOpacity>
      </View>
      <FlatList
          data={Roomates}
          keyExtractor={result => result.id}
          renderItem={({item})=>{
            return(
              roomateListItem(item)
            )
          }}
          ListEmptyComponent={<Text>No Roomates, Add one </Text>}
        />
    </View>
  )

}

const mapStateToProps=(state)=>{
  return {
    Roomates:state.Roomates
  }
}

export default connect(mapStateToProps,{addRoomate})(MainScreen);
