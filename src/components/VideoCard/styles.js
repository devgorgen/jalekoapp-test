import styled from 'styled-components/native';

export const Container = styled.View`
    border: 1px solid black;
    border-radius: 5px;
    height: 245px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    background: white;
    min-width: 200px;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const FooterCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

export const ItemLeftFooter = styled.View`
    height: 45;
`;

export const ItemRightFooter = styled.TouchableOpacity`
    height: 30;
    margin-top: 5px;
    margin-right: 5px;
`;
