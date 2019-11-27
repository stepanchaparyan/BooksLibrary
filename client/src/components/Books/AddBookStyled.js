import styled from 'styled-components';

export const AddBookForm = styled.form`
    background: rgb(158, 117, 138);
    padding: 5px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 15px 15px 15px 30px;
    border-radius: 4px;
`;

export const AddBookTitle = styled.div`
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const AddBookName = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;

export const AddBookGenre = styled(AddBookName)`
`;

export const AddBookAuthor = styled(AddBookName)`
`;

export const AddBookLabel = styled.label`
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: cornsilk;
`;

export const AddBookInput = styled.input`
    margin: 4px 0;
    padding-left: 6px;
    border-radius: 4px;
`;

export const AddBookSelect = styled.select`
    margin: 4px 0;
    padding-left: 6px;
    min-width: 210px;
    border-radius: 4px;
    color: #880E4F;
`;

export const AddBookButton = styled.button`
    color: #fff;
    background: #AD1457;
    cursor: pointer;
    align-self: flex-end;
    width: 100%;
    height: 32px;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    margin-top: 67px;
    &:hover {
        background: rgb(179, 77, 119);
    }
    &:focus-within {
        outline: none;
    }
    &:active {
        color: black;
    }
`;