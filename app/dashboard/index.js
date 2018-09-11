import * as React from 'react';
import { Image, View } from 'react-native';
import { List } from 'react-native-paper';
import Header from '../header';

export default class Dashboard extends React.Component {
    render() {
        if(this.props.userInfo.user_id === 'ottugi0') {
            return (
                <View>
                    <Header userInfo={this.props.userInfo} />
                    <List.Accordion
                        key="1"
                        title="이베이코리아 G마켓"
                        description="담당자 손혜림"
                        left={() =>
                            (
                                <Image
                                    style={{ marginTop: 10, width: 32, height: 32, borderRadius: 15 }}
                                    source={require('../../assets/avatar/g.jpeg')}
                                />
                            )
                        }
                    >
                        <List.Item
                            title="신규주문"
                            description="10건"
                            left={() => (
                                <List.Icon icon="touch-app" />
                            )}
                        />
                        <List.Item
                            title="클레임"
                            description="2건"
                            left={() => (
                                <List.Icon icon="priority-high" />
                            )}
                        />
                        <List.Item
                            title="고객문의"
                            description="1건"
                            left={() => (
                                <List.Icon icon="question-answer" />
                            )}
                        />
                    </List.Accordion>
                    <List.Accordion
                        key="2"
                        title="이베이코리아 옥션"
                        description="담당자 손혜림"
                        left={() =>
                            (
                                <Image
                                    style={{ marginTop: 10, width: 32, height: 32, borderRadius: 15 }}
                                    source={require('../../assets/avatar/a.jpeg')}
                                />
                            )
                        }
                    >
                        <List.Item
                            title="신규주문"
                            description="40건"
                            left={() => (
                                <List.Icon icon="touch-app" />
                            )}
                        />
                        <List.Item
                            title="클레임"
                            description="1건"
                            left={() => (
                                <List.Icon icon="priority-high" />
                            )}
                        />
                        <List.Item
                            title="고객문의"
                            description="9건"
                            left={() => (
                                <List.Icon icon="question-answer" />
                            )}
                        />
                    </List.Accordion>
                </View>
            );
        } else {
            return (
                <View>
                    <Header userInfo={this.props.userInfo} />
                    <List.Accordion
                        key="1"
                        title="오뚜기 본사"
                        description="담당자 김건호"
                        left={() =>
                            (
                                <Image
                                    style={{ marginTop: 10, width: 32, height: 32, borderRadius: 15 }}
                                    source={require('../../assets/avatar/ottugi.jpg')}
                                />
                            )
                        }
                    >
                        <List.Item
                            title="신규주문"
                            description="64건"
                            left={() => (
                                <List.Icon icon="touch-app" />
                            )}
                        />
                        <List.Item
                            title="클레임"
                            description="5건"
                            left={() => (
                                <List.Icon icon="priority-high" />
                            )}
                        />
                        <List.Item
                            title="고객문의"
                            description="7건"
                            left={() => (
                                <List.Icon icon="question-answer" />
                            )}
                        />
                    </List.Accordion>
                    <List.Accordion
                        key="2"
                        title="CJ 공식판매자"
                        description="담당자 이수석"
                        left={() =>
                            (
                                <Image
                                    style={{ marginTop: 10, width: 32, height: 32, borderRadius: 15 }}
                                    source={require('../../assets/avatar/cj.png')}
                                />
                            )
                        }
                    >
                        <List.Item
                            title="신규주문"
                            description="53건"
                            left={() => (
                                <List.Icon icon="touch-app" />
                            )}
                        />
                        <List.Item
                            title="클레임"
                            description="3건"
                            left={() => (
                                <List.Icon icon="priority-high" />
                            )}
                        />
                        <List.Item
                            title="고객문의"
                            description="15건"
                            left={() => (
                                <List.Icon icon="question-answer" />
                            )}
                        />
                    </List.Accordion>
                </View>
            );
        }
    }
}
