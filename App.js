import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Accordian from './app/Accordian'
import { Colors } from './app/Colors';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Lorem ipsum', 
          data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        { 
          title: 'Elementum facilisis',
          data: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        { 
         title: 'Mattis aliquam',
         data: 'Erat velit scelerisque in dictum. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Elementum nisi quis eleifend quam adipiscing vitae. Quam id leo in vitae turpis massa sed elementum. Eu consequat ac felis donec et odio pellentesque diam volutpat.',
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor:Colors.PRIMARY,
  }
});
