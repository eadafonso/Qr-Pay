import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 25px;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  align-self: center;
`;

export const LogoText = styled.Text`
  color: #555;
  margin: 10px 0;
  font-size: 20px;
  text-align: center;
`;

export const InfoUserContainer = styled.View`
  margin: 20px 0;
`;

export const Line = styled.View`
  border: 0.4px;
  border-color: #ddd;
  margin: 20px 0;
`;

export const MethodContainer = styled.View`
  margin-top: 10px;
`;

export const MethodPayment = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;
