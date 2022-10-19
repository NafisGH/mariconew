import styled from "styled-components";

const StyledHeader = styled.div`


    max-width: 1640px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

     

    nav {

        ul {
             display: flex;
             align-items:center;
             height: 100%;

             li:not(:last-child) {
                margin-right: 39px;
             }

             li {
                color: #707070;

                & > a {
                    color: #707070;
                    text-decoration: none;
                    :hover {
                        background-color: #326CF9;;
                    }
                }
             }
        }
    }

    div {
        padding: 12px 22px;
    }

    .login {
            font-size: 20px;
            color: #707070;
            background: none;
            margin-right: 24px;
        }
    .sign {
            background: #306EF7;
            font-size: 20px;
            width: 119px;
            height: 55px;
            border-radius: 10px;
            border: 1px solid #306EF7;
            color: white;
        }

    
`

export default StyledHeader;