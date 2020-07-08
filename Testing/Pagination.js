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
export default class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            serverData: [],
            fetching_from_server: false,
            tokenvalue: '',
            number: 1,
            lmt: 5
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
                    serverData: [...this.state.serverData, ...responseData.data.results.results],
                    loading: false
                })
            })
        console.log("serverDATA", this.state.serverData);
    }
    loadMoreData = async () => {
        let val2 = await AsyncStorage.getItem('token')
        console.log('pagination token value', this.state.tokenvalue);
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
                this.setState({
                    serverData: [...this.state.serverData, ...responseData.data.results.results],
                    fetching_from_server: false,
                })
            })
            .catch(error => {
                console.error(error);
            })
    }
    renderFooter() {
        return (
            //Footer View with Load More button
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.loadMoreData}
                    //On Click of button calling loadMoreData function to load more data
                    style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Load More</Text>
                    {this.state.fetching_from_server ? (
                        <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
                    ) : null}
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                        <FlatList
                            style={{ width: '100%' }}
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
        paddingTop: 30,
    },
    item: {
        padding: 10,
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
