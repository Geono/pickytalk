import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Main from '../main';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    }
});

export default class Present extends Component {
    constructor() {
        super();
        this._onDone = this._onDone.bind(this);

    }

    componentWillMount() {
        this.setState({ showRealApp: false });
    }

    _onDone() {
        this.setState({ showRealApp: true });
    }

    render() {
        const isSeller = this.props.userInfo.user_id === 'ottugi0';
        const seller1 = require('../../assets/intro/seller1.png');
        const seller2 = require('../../assets/intro/seller2.png');
        const seller3 = require('../../assets/intro/seller3.png');
        const seller4 = require('../../assets/intro/seller4.png');
        const am1 = require('../../assets/intro/am1.png');
        const am2 = require('../../assets/intro/am2.png');
        const am3 = require('../../assets/intro/am3.png');
        const am4 = require('../../assets/intro/am4.png');

        const slides = [
            {
                key: isSeller ? 'seller1' : 'am1',
                title: isSeller ? 'Seller' : 'Account Manager',
                text: isSeller ?
                    '궁금한 것도 많고, \n상품 제안도 하고 싶어요!':
                    '특가 제안은 언제든 환영!',
                image: isSeller ? seller1 : am1,
                imageStyle: styles.image,
                backgroundColor: isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: isSeller ? 'seller2' : 'am2',
                title: isSeller ? 'Seller' : 'Account Manager',
                text: isSeller ?
                    '한시가 급한데, 피드백이 빨리 안와요' :
                    '딜 세팅, 실적 관리도 해야 하는데...\n판매자 문의까지 ㅠㅠ',
                image: isSeller ? seller2 : am2,
                imageStyle: styles.image,
                backgroundColor: isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: isSeller ? 'seller3' : 'am3',
                title: isSeller ? 'Seller' : 'Account Manager',
                text: isSeller ?
                    '갑자기 매출이 떨어진 이유를 모르겠어요':
                    '어제까지 연락하던 담당자가 퇴사?!',
                image: isSeller ? seller3 : am3,
                imageStyle: styles.image,
                backgroundColor: isSeller ? '#59b2ab' : '#febe29',
            },
            {
                key: isSeller ? 'seller4' : 'am4',
                title: isSeller ? 'Seller' : 'Account Manager',
                text: isSeller ?
                    '자연어로 물어봐도 자동 답변 가능!':
                    '전에 없이 간편한 판매자와의 소통',
                image: isSeller ? seller4 : am4,
                imageStyle: styles.image,
                backgroundColor: isSeller ? '#59b2ab' : '#febe29',
            }
        ];

        if (this.state.showRealApp) {
            return <Main userInfo={this.props.userInfo} />;
        } else {
            return (
                <AppIntroSlider
                    slides={slides}
                    onDone={this._onDone}
                    showPrevButton
                />
            );
        }
    }
}
