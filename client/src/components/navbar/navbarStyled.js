import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 50px;
    background-color: rgb(148, 14, 85);    
    color: white;
    font-size: 14px;
    position: sticky;
    top: 0;
    z-index: 1;   
`;


export const NavbarButtonsContainer = styled.div`
    display: flex;
`;

export const NavbarButtons = styled.div`
    display: flex;
    & > a {
            background-color: rgb(148, 14, 85);
            color: white;
            font-size: 18px;
            align-self: center;
            margin: 0 20px;
            box-shadow: none;
    }
    & > a:hover {
            background-color: rgb(148, 14, 85);
            color: gray;
            text-decoration: none;
    }    
`;

export const NavbarLogoContainer = styled.a`
    align-self: center; 
`;

export const NavbarLogo = styled.img`
    height: 20px;
    width: 130px;
`;