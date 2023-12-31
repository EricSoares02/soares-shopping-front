import styled from "styled-components";

const ProductComponent = {
  Conteiner: styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  `,

  AlignBox: styled.div`
    width: 70vw;
    height: auto;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    border-radius: 13px;
    box-shadow: 0 0 4px ${(props) => props.theme.colors.shadow};
  `,

  TopSide: styled.section`
    width: 100%;
    height: auto;
    display: flex;
  `,

  BottomSide: styled.section`
    width: 100%;
    height: auto;
  `,
};

const Separetor =  styled.div`
  width: 65%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.gray};
  margin: 0 23px 0 23px;
  `;

export { ProductComponent, Separetor };
