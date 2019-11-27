import styled from 'styled-components';

export const AuthorCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: rgb(241, 139, 194);
    border: 1px solid #880E4F;
`;

export const AuthorCardImageContainer = styled.div`
    width: 150px;
    height: auto;
`;

export const AuthorCardImage = styled.img`
    width: 150px;
    height: auto;
`;

export const AuthorCardBody = styled.div`
    margin: 5px;
    color: black;
`;

export const AuthorCardName = styled.div`
    margin-bottom: 5px;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const AuthorCardAge = styled.div`
`;

export const AuthorCardBooks = styled.div`
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 7px;
`;