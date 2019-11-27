import styled from 'styled-components';

export const AuthorsListContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const AuthorsListContent = styled.div`
    max-width: 900px;
`;

export const AuthorTitle = styled.div`
    text-align: center;
    margin: 10px;
    color: #880E4F;
    font-size: 40px;
    font-weight: bold;
`;

export const AuthorsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 5px 20px 20px 20px;
`;

export const AuthorsListLoading = styled.span`
    display: flex;
    justify-content: center;
    color: #880E4F;
    font-size: 18px;
    margin: 20px;
`;