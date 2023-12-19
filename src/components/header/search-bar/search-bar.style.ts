import { devices } from "@/app/global.screen";
import styled from "styled-components";

const SearchComponent = {
  Conteiner: styled.div`
   width: 1000px;
   height: 50px;
   display: flex;
   @media ${devices.xs} {
    width: 150px;
    }
    @media ${devices.sm} {
    width: 400px;
    }
    @media ${devices.md} {
    width: 500px;
    }
    @media ${devices.lg} {
    width: 600px;
    }
  `,

  Search: styled.form`
    width: 100%;
    height: 100%;
    display: flex;
  `,

  SearchInput: styled.input`
    width: 100%;
    height: 100%;
    border: transparent;
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.bg};
    padding-left: 30px;
    outline: 0;
    box-shadow: 0 0 5px ${(props) => props.theme.colors.shadowcolor};
  `,

  ImageInput: styled.img`
    width: 20px;
    height: 20px;
  `,

  Submit: styled.button`
    width: auto;
    height: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    translate: -40px 3px;
  `,
};

export { SearchComponent };
