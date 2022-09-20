import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import WebView from 'react-native-webview';

const SupsisChat = props => {
  const {domainName,btnContainerStyle,closeBtnPress, closeBtnStyle, commonTextStyle} = props;
  let newUri = `https://${domainName}.visitor.supsis.live`;
  const {
    Container,
    ChildrenContainer,
    ButtonContainer,
    CommonButton,
    CommonText,
  } = styles;
  return (
    <SafeAreaView style={Container}>
      <WebView
        startInLoadingState={true}
        source={{uri: newUri}}
        children={<View style={ChildrenContainer} />}
      />
      <View style={[ButtonContainer, btnContainerStyle]}>
        <TouchableOpacity
          onPress={closeBtnPress}
          style={[CommonButton, {backgroundColor: 'red'}, closeBtnStyle]}>
          <Text style={[CommonText, commonTextStyle]}>Kapat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: 'white'},
  ChildrenContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    width: 200,
    height: 50,
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  CommonButton: {
    width: 80,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  CommonText: {color: 'white', fontWeight: 'bold',fontSize:12},
});
SupsisChat.propTypes = {
  domainName: PropTypes.string,
  //   ...View.prototype,
  closeBtnPress: PropTypes.func,
  // backBtnStyle: ViewStyleProp,a
  //   closeBtnStyle: ViewStyle,
};
export default SupsisChat;