# SupsisChat for React Native

This is a React Native component to easily add [SupsisChat widget](https://supsis.com/) to your application.

It works for both iOS and Android.

## Getting Started

### Prerequisites

To use SupsisChat in your React application, you will need the SupsisChat license ID.

-   `domainName` - Defines the name of your application
-   For instance , namespace - `supsis` - for www.supsis.com

If you don't have an account, you can create one [here](https://supsis.com/).

### Installation

To import SupsisChat for React Native, run the following command to install required dependency (react-native-webview)
and react-native-supsischat library:

```javascript
yarn add react-native-webview react-native-supsischat
```

```javascript
npm install react-native-webview react-native-supsischat --save
```

## User Guide

### Start

Having imported SupsisChat for React Native, put it in your render method:

```javascript
import { SupsisChat } from 'react-native-supsischat'

...

<SupsisChat ref={supsisRef} domainName="your-domain-name"/>
```

### Commands
<table>
<tr><td>open</td><td>makes visible supsis</td></tr>
<tr><td>close</td><td>makes invisible supsis</td></tr>
<tr><td>setUserData</td><td>fills login form</td></tr>
<tr><td>setDepartment</td><td>allows you to pick a department</td></tr>
</table>
Example:

```javascript
supsisRef.current.setUserData({
	email: "John@doe.com",
});
```

## Support

If you need any help, you can chat with us [here](https://supsis.com/).

I hope you will find this module useful. Happy coding!
