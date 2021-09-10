import styled from "styled-components/native";

interface Props {
  color?: string;
  margin?: string;
  padding?: string;

  title?: string | any;
  large?: string | any;
  small?: string | any;
  medium?: string | any;
  tiny?: string | any;
  extra?: string | any;

  light?: string | any;
  bold?: string | any;
  heavy?: string | any;
  black?: string | any;
  center?: string | any;
  right?: string | any;
}

export const Text = styled.Text<Props>`
  color: ${(props) => props.color ?? "#555"};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};
  ${({ title, large, small, medium, tiny, extra }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 18px`;
      case extra:
        return `font-size: 28px`;
      case medium:
        return `font-size: 15px`;
      case small:
        return `font-size: 11px`;
      case tiny:
        return `font-size: 10px`;
      default:
        return `font-size: 13px`;
    }
  }}
  ${({ light, bold, heavy, black }) => {
    switch (true) {
      case light:
        return `font-weight: 200`;
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
      case black:
        return `font-weight: 900`;
      default:
        return `font-weight: 400`;
    }
  }}
${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center`;
      case right:
        return `text-align: right`;
      default:
        return `text-align: left`;
    }
  }}
`;
