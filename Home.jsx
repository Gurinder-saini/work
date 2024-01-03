import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Accordion from '../components/Accordion';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

const Home = () => {
    const accordionData = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit justo ut elit ultrices, id convallis ligula accumsan. Suspendisse potenti.'
        },
        {
          title: 'Section 2',
          content: 'Duis interdum, risus at auctor accumsan, dolor sapien varius dolor, vel varius odio turpis non ligula. Integer ullamcorper tincidunt arcu, vitae efficitur est fermentum ac.'
        },
        {
            title: 'Section 3',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit justo ut elit ultrices, id convallis ligula accumsan. Suspendisse potenti. Vestibulum aliquet, libero et accumsan aliquet, elit ipsum convallis ligula, a euismod tortor felis eu nisl. Duis vestibulum, sem eget ultrices dapibus, sapien neque bibendum velit, in dignissim velit turpis vitae quam.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce bibendum turpis a turpis sagittis, vitae vulputate felis finibus. Duis sit amet erat quis elit luctus vehicula eu a urna. Proin vel orci vitae libero vestibulum ultrices. Morbi quis arcu ligula. Sed nec elit eget justo tincidunt commodo vel ac felis. Quisque ut enim vel nisl dignissim ultrices.`
          },
          
      ];
      
  return (
    <View style={styles.container}>
        <View style={styles.accordion_container}>
        {
            accordionData.map((item,index)=>{
                return <Accordion data={item}/>
            })
        }
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        marginTop:responsiveScreenHeight(3),
        flex:1,
        backgroundColor:'white'
    },
    accordion_container:{
        gap:responsiveScreenHeight(2),
        alignItems:"center"
    }
})