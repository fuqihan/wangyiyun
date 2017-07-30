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
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class ModalList extends Component {

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

       render() {
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
                           <TouchableOpacity
                               onPress={() => {{
                                   this.setState({
                                       isModal:false
                                   })
                               }}}
                           >
                               <Text>关闭页面</Text>
                           </TouchableOpacity>
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
       height: 300,
       width: Dimensions.get('window').width,
       backgroundColor: 'white',
       position: 'absolute',
       left: 0,
       bottom: 0,
     },
     modelCloseViewStyle: {
       flex: 1,
     }

   });
