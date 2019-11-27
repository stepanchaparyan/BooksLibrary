import styled from 'styled-components';

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    color: #880E4F;
    font-size: 18px;
    margin: 20px;
`;

export const BookDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const BookDetailsData = styled.div`
    display: flex;
    flex-direction: column;
    color: #880E4F;
    font-size: 20px;
    margin: 20px 40px;
    max-width: 1080px;
`;

export const BookName = styled.div`
    display: flex;
    justify-content: center;
    color: #880E4F;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;


export const BookData = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 10px;
    width: 350px;
    height: auto;
    background-color: rgb(207, 171, 191);
    border-radius: 5px;
`;

export const HR = styled.hr`
    width: 60%;
    border-top: 1px solid #880E4F;
`;

export const BookTitle = styled.div`
    margin: 5px 30px;
`;

export const BookGenre = styled.div`
    margin: 5px 30px;
`;

export const BookAuthorName = styled.div`
    margin: 5px 30px;
    & > a {
        color: #880E4F;
    }
    & > a:hover {
        text-decoration: none;
        font-weight: bold;
        color: #880E4F;
    }
`;

export const AuthorBooks = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AuthorBooksData = styled.div`
    display: flex;
    padding: 0 15px;
    margin: 10px;
    min-width: 250px;
    height: auto;
    background-color: rgb(207, 171, 191);
    border-radius: 5px;
`;

export const BooksDetailsSpan = styled.span`
    color: black;
    font-weight: bold;
    margin-right: 10px;
`;