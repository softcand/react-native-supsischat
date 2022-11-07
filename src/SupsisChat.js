import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import WebView from "react-native-webview";

const SupsisChat = (props, ref) => {
	const { domainName, children } = props;
	let newUri = `https://${domainName}.visitor.supsis.live`;
	const { Container, CloseBtn, CloseText } = styles;
	const [visible, setVisible] = useState(false);

	const viewRef = useRef();

	const convertToString = (object) => {
		let result = "{";
		for (const key of Object.keys(object)) {
			result += ` ${key}: "${object[key]}",`;
		}
		result = result.slice(0, result.length - 1);
		result += " }";
		return result;
	};

	const inject = (cmd, payload) => {
		if (!viewRef.current) return;
		viewRef.current.injectJavaScript(`
				window.postMessage({
					command: "${cmd}",
					payload: ${payload},
				});
			`);
	};

	const setUserData = (payload) => {
		inject("set-user-data", convertToString(payload));
	};

	const setDepartment = (payload) => {
		inject("set-department", `"${payload}"`);
	};

	useImperativeHandle(ref, () => ({
		setUserData,
		setDepartment,
		open: () => setVisible(true),
		close: () => setVisible(false),
	}));

	if (visible)
		return (
			<SafeAreaView style={Container}>
				<WebView
					ref={viewRef}
					startInLoadingState={true}
					source={{ uri: "http://localvisitor-mobile.supsis.live?debug=mobile" /*TODO newUri olacak*/ }}
				/>
				<Pressable style={CloseBtn} onPress={() => setVisible(false)}>
					<Text style={CloseText}>X</Text>
				</Pressable>
				{children}
			</SafeAreaView>
		);
	return null;
};

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "white",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: Number.MAX_VALUE,
	},
	CloseBtn: {
		position: "absolute",
		top: 2,
		right: 8,
		padding: 8,
	},
	CloseText: {
		color: "#fff",
		fontWeight: "500",
	},
});

const Wrapper = forwardRef(SupsisChat);

Wrapper.propTypes = {
	domainName: PropTypes.string,
};

export default Wrapper;
