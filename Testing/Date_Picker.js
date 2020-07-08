import React from 'react';
import { Text, View, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { format } from "date-fns";
export default class Date_Picker extends React.Component {
    constructor() {
        super();
        this.state = {

            isVisible: false
        }
    }
    showDatePicker = () => {
        this.setState({ isVisible: true });
    };
    handlepicker = (datetime) => {
        this.setState({
            isVisible: false,
            chooseDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        });
    }
    hidepicker = () => {
        this.setState({
            isVisible: false,
            chooseDate: '',
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:4}}>
                    <Text style={{ color: 'red', fontSize: 20, }}>
                        {
                            this.state.chooseDate
                        }
                    </Text>
                    </View>
                    <View style={{flex:4}}>
                <Button title="Show Date Picker" onPress={this.showDatePicker} />
               
                
                <DateTimePickerModal
                    isVisible={this.state.isVisible}
                    mode="datetime"
                    onConfirm={this.handlepicker}
                    onCancel={this.hidepicker}
                    DateTimePickerModal
                    is24Hour={true}
                />
                 </View>
                <View sty={{flex:2}}>
               <TouchableOpacity onPress={this.props.navigation.navigate("home_page")}>
                   <Text style={{fontSize:15,color:"blue",textAlign:'left'}}>
                       Back
                   </Text>
               </TouchableOpacity>
               </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 20,
        margin: 20
    },
    button: {
        width: 250, height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    text: {
        fontSize: 18, color: 'green', textAlign: 'center'
    }
});









// constructor() {

//     super();
//     this.state = {
//         date: '',

//     }

// }

// fun = () => {
//     let date1 = new Date("2016-01-04 10:34:23");

//     let formattedDate = format(date1, "MMMM Do, YYYY H:mma");
//     this.setState({date:formattedDate})

// }
// render() {

//     console.log("dateeee", this.state.date);
//     return (
//         <View>
//             <View>
//                 <DatePicker
//                     date={this.state.date}
//                     mode={'date'}
//                     onDateChange={this.state.date}
//                 />

//             </View>

//             <View>
//                 <Text>
//                     {this.fun}
//                 </Text>
//             </View>

//         </View>

//     );
// }
//}





{/* //     constructor (props) { */ }
//         super(props)
//         this.state = {
//           startDate: moment()
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }

//       handleChange(date) {
//         this.setState({
//           startDate: date
//         })
//       }

//       handleSubmit(e) {
//          e.preventDefault();
//          let main = this.state.startDate
//         console.log(main.format('L'));
//       }

//        render() {
//          return (


//             <View>

//               <TextInput placeholder={'date'} style={{borderColor:'Blue',borderWidth:2,fontSize:20}}
//   onChangeText={(startDate) => this.setState({ startDate })} value={this.state.startDate}/>

//                  <DatePicker
//                   selected={ this.state.startDate }
//                   onChange={ this.handleChange }
//                   name="startDate"
//                   dateFormat="MM/DD/YYYY"
//                 />

//                <Button title="add date"/>
//                  </View>
//          );
//        }
//     }






















