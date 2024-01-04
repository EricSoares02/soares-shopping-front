import styled from "styled-components";

const StarComponent = styled.div<{ $starSize?: number; }>`
width: ${props=>props.$starSize? props.$starSize : 20}px;
height: ${props=>props.$starSize? props.$starSize : 20}px;
& svg{
    width: 100%;
    height: 100%;
}
`
export {StarComponent}