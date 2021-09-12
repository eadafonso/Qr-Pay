import styled from "styled-components/native";

export const Header = styled.SafeAreaView`
  height: 45px;
  justify-content: center;
  padding: 0 15px;
  margin-top: 40px;
`;

export const Container = styled.View`
  margin-top: 35px;
  padding: 0 24px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 0.8px;
  border-bottom-color: #ddd;
  margin-top: 20px;
  padding: 10px 0 15px 0;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 130px;
  height: 45px;
  margin: 25px 0;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: #00c271;
  border-radius: 4px;
  border-color: transparent;
`;
