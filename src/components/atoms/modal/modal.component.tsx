import React, { useState } from "react";
import { Props } from "./modal.props";
import { StyledModal } from "./modal.styled";

export const Modal = ({ children, ...props }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <StyledModal
      onRequestClose={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      {...props}
    >
      {children}
    </StyledModal>
  );
};
