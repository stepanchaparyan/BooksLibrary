import styled from 'styled-components';

export const AuthorDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const AuthorDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    color: #880E4F;
    font-size: 20px;
    margin: 20px 40px;
    max-width: 1080px;
`;

export const AuthorDetailsName = styled.div`
    display: flex;
    justify-content: center;
    color: #880E4F;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const AuthorDetailsBooks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AuthorDetailsBookData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    width: 250px;
    height: auto;
    background-color: rgb(207, 171, 191);
    border-radius: 5px;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const AuthorDetailsBookTitle = styled.div`
    margin: 5px 30px;
`;

export const AuthorDetailsBookTitleSpan = styled.span`
    color: black;
    font-weight: bold;
    margin-right: 10px;
`;

export const AuthorDetailsBookGenre = styled.div`
    margin: 5px 30px;
`;

export const AuthorDetailsBookGenreSpan = styled(AuthorDetailsBookTitleSpan)`
`;

export const AuthorDetailsHR = styled.hr`
    width: 60%;
    border-top: 1px solid #880E4F;
`;

export const AuthorDetailsLoading = styled.span`
    display: flex;
    justify-content: center;
    color: #880E4F;
    font-size: 18px;
    margin: 20px;
`;