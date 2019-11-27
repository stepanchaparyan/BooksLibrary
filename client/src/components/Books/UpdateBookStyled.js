import styled from 'styled-components';

export const UpdateBookForm = styled.form`
    background: rgb(158, 117, 138);
    padding: 5px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 15px 15px 15px 30px;
    border-radius: 4px;
`;

export const UpdateBookTitle = styled.div`
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const UpdateBookName = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;

export const UpdateBookGenre = styled(UpdateBookName)`
`;

export const UpdateBookAuthor = styled(UpdateBookName)`
`;

export const UpdateBookLabel = styled.label`
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: cornsilk;
`;

export const UpdateBookInput = styled.input`
    margin: 4px 0;
    padding-left: 6px;
    border-radius: 4px;
    min-width: 213px;
`;

export const UpdateBookSelect = styled.select`
    margin: 4px 0;
    border-radius: 4px;
    padding: 5px 0;
    color: #880E4F;
    min-width: 210px;
`;

export const UpdateBookButton = styled.button`
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
    margin-top: 14px;
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