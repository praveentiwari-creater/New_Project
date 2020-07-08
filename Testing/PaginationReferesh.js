import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Platform,
    ActivityIndicator
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export default class PaginationReferesh extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            serverData: [],
             fetching_from_server: false,
            // tokenvalue: '',
            number: 1,
            lmt: 5,
            refreshing: false,
        };
        this.offset = 1;
    }
    async componentDidMount() {
        let val = await AsyncStorage.getItem('token')
        console.log('pagination token value', this.state.tokenvalue);
        axios.post(("https://tecorbfirst.herokuapp.com/api/getuserpost"), {
            "pageno": this.state.number,
            "limit": this.state.lmt
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    "tokenId": val,
                }
            })
            .then((responseData) => {
                console.log('pagination responsewwwww======', responseData);
                console.log('pagination responsewwwwwppppppp', responseData.data.results.results);
                this.setState({
                    ///    serverData: [...this.state.serverData, ...responseData.data.results.results],
                    serverData: responseData.data.results.results,
                    loading: false,
                    /// refreshing: false
                })
            })
        console.log("serverDATA", this.state.serverData);
    }
    loadMoreData = async () => {
        let val2 = await AsyncStorage.getItem('token');
        console.log('pagination token value', this.state.tokenvalue);
        this.setState({ fetching_from_server: true }, async () => {

            axios.post(("https://tecorbfirst.herokuapp.com/api/getuserpost"), {
                "pageno": this.state.number + 1,
                "limit": this.state.lmt
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "tokenId": val2,
                    }
                })
                .then((responseData) => {
                    // this.offset = this.offset + 1;
                    console.log('pagination responsewwwww======', responseData);
                    console.log('pagination responsewwwwwppppppp', responseData.data.results.results);
                   // this.state.lmt +=1;
                    this.setState({
                        serverData: [...this.state.serverData, ...responseData.data.results.results],
                        fetching_from_server: false,
                        refreshing: false
                    })
                })
                .catch(error => {
                    console.error(error);
                })
         })
    }

    // renderFooter() {
    //     return (
    //         //Footer View with Load More button
    //         <View style={styles.footer}>
    //             <TouchableOpacity
    //                 activeOpacity={0.9}
    //                 onPress={this.loadMoreData}
    //                 //On Click of button calling loadMoreData function to load more data
    //                 style={styles.loadMoreBtn}>
    //                 <Text style={styles.btnText}>Load More</Text>
    //                 {this.state.fetching_from_server ? (
    //                     <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
    //                 ) : null}
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    // handleRefresh = () => {
    //     this.state.number

    //     // () => {
    //     this.loadMoreData();
    //     // }

    // };
    // onhandleLoadMore = () => {
    //     // this.setState(
    //     //     {
    //     this.state.number + 1
    //     // });
    //     // () => {
    //     this.loadMoreData();
    //     // }
    // };

    renderFooter = () => {
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
               {this.state.fetching_from_server ? <ActivityIndicator animating size="large" /> : null}
            </View>
        );
    }

    render()
     {
        return (
            <View style={styles.container}>
                {this.state.loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                        <FlatList
                            style={{ width: '100%',backgroundColor:'lightblue' }}
                            keyExtractor={(item, index) => index.toString()}
                            data={this.state.serverData}
                            renderItem={({ item, index }) => (
                                <View style={styles.item}>
                                    <Text style={styles.text}>
                                        {item._id}
                                        {'.'}
                                        {item.content}
                                    </Text>
                                </View>
                            )}
                           // onRefresh={this.loadMoreData}
                            refreshing={this.state.refreshing}
                            onEndReached={this.loadMoreData}
                            onEndReachedThreshold={0.5}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            ListFooterComponent={this.renderFooter.bind(this)}
                        />
                    )}
            </View>
        );
    }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:5,
    },
    item: {
        padding: 20,
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    text: {
        fontSize: 15,
        color: 'black',
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
})














































// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   FlatList,
//   ActivityIndicator,
//   AppRegistry
// } from 'react-native';
// //  import { List, ListItem } from "react-native-elements";
// export default class PaginationReferesh extends Component {

//     constructor(props) {
//         super(props); 
//         this.state = {
//           loading: false,
//           data: [],
//           page: 1,
//           refreshing: false,
//           siteTitle: ''
//         };
//       }
//       render()
//       {
//           return(
//               <View>
//                   <Text>
//                       pggggggg
//                   </Text>
//               </View>
//           )
//       }

//       fetchData = () => {

//         const { page } = this.state;
//         const url = `http://3arabmagazine.com/wp-json/wp/v2/posts?page=${page}&results=20`;

//         this.setState({ loading: true });
//         fetch(url)
//           .then(res => { 
//             return res.json()
//           })
//           .then(res => {
//             const arrayData = [...this.state.data, ...res]
//             this.setState({
//               data: page === 1 ? res : arrayData,
//               loading: false,
//               refreshing: false
//             });
//           })
//           .catch(error => {
//             console.log(error);
//             this.setState({ loading: false });
//           });
//       };
//       componentDidMount=()=> {

//         const urlSiteDetail = "http://3arabmagazine.com/wp-json"
//         fetch(urlSiteDetail)
//           .then(res => {

//             return res.json()
//           })
//           .then(res => {
//             this.setState({
//              siteTitle: res.name
//             });
//           })
//           .catch(error => {

//           });

//           this.fetchData();
//       }
//       renderHeader = () => {
//         return (<Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, marginBottom: 10}}>
//             {this.state.siteTitle}</Text>)
//       };
//       renderFooter = () => {
//         return (
//           <View
//             style={{
//               paddingVertical: 20,
//               borderTopWidth: 1,
//               borderColor: "#CED0CE"
//             }}
//           >
//             <ActivityIndicator animating size="large" />
//           </View>
//         );
//       };
//       handleRefresh = () => {
//         this.setState(
//           {
//             page: 1,
//             refreshing: true
//           },
//           () => {
//             this.fetchData();
//           }
//         );
//       };
//       handleLoadMore = () => {
//         this.setState(
//           {
//             page: this.state.page + 1
//           },
//           () => {
//             this.fetchData();
//           }
//         );
//       };
//       render()
//       {
//         return (
//           <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
//           <FlatList
//             data={this.state.data}
//             keyExtractor={item => item.id}
//             ListHeaderComponent={this.renderHeader}
//             ListFooterComponent={this.renderFooter}
//             renderItem={({ item }) =>{
//               if(((item.title.rendered).trim() != "") && ((item.title.rendered).trim() != "Copy"))
//               return (<View><ListItem
//                   roundAvatar
//                   title={<HTML html={`${item.title.rendered}`} />}
//                   avatar={{ uri: item.featured_image_urls.thumbnail }}
//                   containerStyle={{ borderBottomWidth: 0 }}
//                 />
//                 <View
//                   style={{
//                     height: 1,
//                     width: "86%",
//                     backgroundColor: "#CED0CE",
//                     marginLeft: "14%"
//                   }}
//                 /></View>
//               )
//             }}
//             onRefresh={this.handleRefresh}
//             refreshing={this.state.refreshing}
//             onEndReached={this.handleLoadMore}
//             onEndReachedThreshold={50}
//           />
//           </View>
//         );
//         }
// }