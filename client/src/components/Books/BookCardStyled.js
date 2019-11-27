import styled from 'styled-components';

export const BookCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: rgb(241, 139, 194);
    border: 1px solid #880E4F;
`;

export const BookCardImage = styled.img`
    width: 150px;
    height: auto;
`;

export const BookCardBody = styled.div`
    margin: 5px;
    color: black;
`;

export const BookCardName = styled.div`
    margin-bottom: 5px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const BookCardGenre = styled.div`
    margin-bottom: 5px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const BookCardAuthor = styled.div`
    width: 150px;
    height: auto;
`;