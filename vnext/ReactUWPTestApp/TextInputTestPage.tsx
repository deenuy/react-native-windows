/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 * @format
 */

import React from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';

interface ITextInputTestPageState {
  curText: string;
  prevText: string;
  prev2Text: string;
  prev3Text: string;
}
class TextInputTestPage extends React.Component<{}, ITextInputTestPageState> {
  public state = {
    curText: '<No Event>',
    prevText: '<No Event>',
    prev2Text: '<No Event>',
    prev3Text: '<No Event>',
  };

  public updateText = (text: string) => {
    this.setState(state => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
        prev3Text: state.prev2Text,
      };
    });
  };

  public render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={event =>
            this.updateText('onChange text: ' + event.nativeEvent.text)
          }
          onEndEditing={event =>
            this.updateText('onEndEditing text: ' + event.nativeEvent.text)
          }
          onSubmitEditing={event =>
            this.updateText('onSubmitEditing text: ' + event.nativeEvent.text)
          }
          onSelectionChange={event =>
            this.updateText(
              'onSelectionChange range: ' +
                event.nativeEvent.selection.start +
                ',' +
                event.nativeEvent.selection.end,
            )
          }
          onKeyPress={event => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.default}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}
          {'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text}){'\n'}
          (prev3: {this.state.prev3Text})
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: 300,
  },
  default: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  multiline: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
    padding: 4,
    marginBottom: 4,
  },
  multilineExpandable: {
    height: 'auto',
    maxHeight: 100,
  },
  multilineWithFontStyles: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Cochin',
    height: 60,
  },
  multilineChild: {
    width: 50,
    height: 40,
    position: 'absolute',
    right: 5,
    backgroundColor: 'red',
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  rewriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainder: {
    textAlign: 'right',
    width: 24,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('TextInputTestPage', () => TextInputTestPage);
