import styled, { keyframes } from "styled-components";

const ping = keyframes`
75%, 100% {
     transform: scale(2);
    opacity: 0;
  }
`;

const OptionsComponent = {
  DivOptions: styled.div`
    width: auto;
    height: 100%;
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: end;
    & a {
      text-decoration: none;
      color: black;
    }
  `,

  ImageOptions: styled.img`
    width: 30px;
    height: 30px;
  `,
  ImageOptionsUser: styled.img`
    width: 30px;
    height: 30px;
  `,
  ImageOptionUserLogged: styled.div`
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    color: black;
    border: solid ${(props) => props.theme.colors.gray} 1px;
    text-decoration: none;
    font-size: 13px;
  `,

  AlignToCart: styled.div`
    width: auto;
    height: auto;
    display: flex;
  `,

  CaseForQuatity: styled.div`
    width: 10px;
    height: 10px;
    translate: -9px 1px;
  `,
  QuatityInCart: styled.div`
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    border-radius: 9999px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  EffectToQuatityInCart: styled.div`
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 9999px;
    animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    translate: 0px 15px;
  `,
};

export { OptionsComponent };
