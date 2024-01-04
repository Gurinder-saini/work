import {
  View,
  Text,
  Pressable,
  PermissionsAndroid,
  Platform,
  FlatList,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const Gallery = () => {

    const [ allphotos,setallphotos]=useState()
    
  const getRequestPermissionPromise = async() => {
    if (Platform.Version >= 33) {
        const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES)
        if(PermissionsAndroid.RESULTS.GRANTED==permission){
            getphoto()
        }
        console.log(permission)
    } else {
        const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
        if(PermissionsAndroid.RESULTS.GRANTED==permission){
            getphoto()
        }
      console.log(permission)
    }
  };

  const getphoto = ()=>{
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        setallphotos(r.edges);
        console.log(JSON.stringify(r.edges))
      })
      .catch((err) => {
         console.log(err)
      });
    };
  

  return (
    <View style={{
        flex:1
    }}>
      <Pressable
        onPress={async() => {
          await getRequestPermissionPromise();
        }}>
        <Text>gallery</Text>
      </Pressable>
      {
        allphotos && 
        <View>
            <FlatList
            data={allphotos}
            renderItem={({item,index})=>{
                return (
                    <View style={{
                        width:300,
                        height:300,
                    }}>
                        <Image source={{uri:item.node.image.uri}} style={{
                            flex:1
                        }}/>
                    </View>
                )
            }}
            />
        </View>
      }
    </View>
  );
};

export default Gallery;
