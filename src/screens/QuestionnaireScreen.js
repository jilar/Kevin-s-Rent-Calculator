import React from 'react';
import {View,Button} from 'react-native';
import {connect} from 'react-redux';
import {deletePost,addPost} from '../actions';
import {Feather} from '@expo/vector-icons';
import { Field, FieldArray, reduxForm } from 'redux-form'


const renderInput = ({ input, label}) => (
  return(
     <View>
       <Text style={{fontSize:20}}>{label}</Text>
       <TextInput
         style={styles.input}
         autoCapitalize="none"
         autoCorrect={false}
         value={input.value}
         onChangeText={input.onChange}
       />
     </View>
);

const renderRoomates = ({fields}) => (
  // <button
  //   type="button"
  //   title="Remove Member"
  //   onClick={() => fields.remove(index)}
  // />

  // using fields, render field for each roomate.
  //use flatlsit

  return(
      <button type="button" onClick={() => fields.push({})}>Add Roomate</button>
      <FlatList
          data={fields}
          keyExtractor={result => result.id}
          renderItem={({item})=>{
            return(
              <Field name={`${item.name}`} component={renderInput} label='Name'/>
              <Field name={`${item.contributionPercent}`} component={renderInput} label='Contribution'/>
            )
          }}
        />
      </>
  )
);


const QuestionareScreen =({handleSubmit}) =>{
  const onSubmit=()=>{

  }

  return (
    <View>
      <Text>First tell me who's living here.</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>Name</Text>
        <Text>Contribution</Text>
      </View>
      <FieldArray name="roomates" component={renderRoomates} />


      <Button
         title="Add New Post"
         onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

const formWrapped= reduxForm({
  form:'questionnaire'
})(QuestionareScreen);

export default connect(null,{})(formWrapped);
