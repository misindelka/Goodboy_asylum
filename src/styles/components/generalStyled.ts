import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const SliderRectangleWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding-left: 17px;
    @media (max-width: 992px) {
        justify-content: center;
        padding-left: 0px;
    }
`;
export const SliderRectangle = styled.div<{ active: boolean }>`
    height: 6px;
    width: ${(props) => (props.active ? '40px' : '20px')};
    background: ${(props) => (props.active ? '#CD8B65' : '#9F9F9F')};
    border-radius: 10px;
    margin-right: 5px;
`;
