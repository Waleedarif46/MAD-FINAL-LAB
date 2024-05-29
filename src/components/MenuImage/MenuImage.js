import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

class MenuImage extends Component {
  render() {
    const { onPress } = this.props;

    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
        <Image style={styles.headerButtonImage} source={require("../../../assets/icons/menu.png")} />
      </TouchableOpacity>
    );
  }
}

MenuImage.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default MenuImage;


MenuImage.propTypes = {
  onPress: PropTypes.func,
};
