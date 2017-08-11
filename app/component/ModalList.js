import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Modal,
  PixelRatio,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { connect } from 'react-redux'
import { modalSongList,fooderMusic } from '../action/actions.js'

class ModalList extends Component {

       // 构造
       constructor(props) {
           super(props);
           // 初始状态
           this.state = {
               isModal:false
           };
       }

       showModal() {
           this.setState({
               isModal:true
           })
       }

       onRequestClose() {
           this.setState({
               isModal:false
           });
       }
       _itemPlay(dispatch,id,index){
           let url = 'http://120.25.240.196:3001/song/detail?ids='+id
           let _self = this
         fetch(url)
              .then((response) => response.json())
              .then((responseJson) => {
                let data = {
                  name: responseJson.songs[0].name,
                  ar: responseJson.songs[0].ar[0].name,
                  al:  responseJson.songs[0].al.picUrl,
                  id:  responseJson.songs[0].id,
                  index: index
                }
                dispatch(fooderMusic(data))

              })
              .catch((error) => {
                console.error(error);
              });
       }

       render() {
         const { dispatch, songList } = this.props
           return(
               <View style={styles.container}>
                   {/* 初始化Modal */}
                   <Modal
                       animationType='slide'           // 从底部滑入
                       transparent={true}             // 不透明
                       visible={this.state.isModal}    // 根据isModal决定是否显示
                       onRequestClose={() => {this.onRequestClose()}}  // android必须实现
                   >
                       <View style={styles.modalViewStyle} >
                       <View  style={styles.modelCloseViewStyle}>
                       <TouchableOpacity style={styles.modelCloseViewStyle}
                           onPress={() => {{
                               this.setState({
                                   isModal:false
                               })
                          }}}
                       />
                      </View>
                       <View style={styles.modelListViewStyle}>
                           {/* 关闭页面 */}
                           <ScrollView>
                           {songList.map((tab, i) => {
                             let name
                             if(!tab.ar){
                               name = tab.artists[0].name
                             } else {
                               name = tab.ar[0].name
                             }

                               return <TouchableOpacity key={i} style={styles.itemList} onPress={this._itemPlay.bind(this,dispatch,tab.id,i)}>
                                   <Text style={{position: 'absolute', top: 5, left: 20,fontSize: 18}}>{tab.name}</Text>
                                   <Text style={{position: 'absolute', top: 32, left: 20, fontSize: 16}}>{name}</Text>
                               </TouchableOpacity>;
                           })}
                           </ScrollView>
                         </View>
                       </View>
                   </Modal>

                   {/* 模态跳转 */}
                   <TouchableOpacity
                       onPress={() => this.showModal()}
                   >
                       <Icon name="list-number" size={30} color="#000000" />
                   </TouchableOpacity>
               </View>
           );
       }
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
     },
     modalViewStyle: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.8)',
       position: 'relative',
     },
     modelListViewStyle: {
       height: 400,
       width: Dimensions.get('window').width,
       backgroundColor: 'white',
       position: 'absolute',
       left: 0,
       bottom: 0,
     },
     modelCloseViewStyle: {
       flex: 1,
     },
     itemList: {
       height: 55,
       borderColor: 'black',
       borderWidth: (Platform.OS==='ios' ? 0.6 :1.1) / PixelRatio.get(),
       position: 'relative',
     }

   });

   const select = (state) => ({
     songList: state.modalSongList
   })
   export default connect(select)(ModalList)
