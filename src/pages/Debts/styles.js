// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const Container = styled.div`
//     /* display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 50px;
//     padding-bottom: 50px; */
//     width: 100%;
//     max-width: 1500px;
//     min-height: 400px;
//     padding: 4rem;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin: auto;
//     border-radius: 2rem;

//     #options {
//         .p-dropdown-panel {
//         background: #ffffff;
//         color: #495057;
//         border: 0 none;
//         border-radius: 3px;
//         -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
//             0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
//         box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
//             0 1px 10px 0 rgb(0 0 0 / 12%);
//         margin-left: -90px;
//         }
//     }
// `;

// export const ButtonRedirect = styled(Link)`
//     color: var(--shape);
//     background-color: var(--yellow);
//     border-color: transparent;
//     border-radius: 4px;
//     text-decoration: none;
//     font-size: 20px;
//     width: 250px;
//     height: 60px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     margin-left: 20px;
//     transition: filter 0.2s;

//     &:hover {
//         filter: brightness(0.8);
//     }

//     @media(max-width: 720px) {
//         width: 160px !important;
//     }
// `;

// export const Title = styled.h1`
//     text-align: center;
//     margin: 20px 0 40px 0;
//     color: var(--yellow);
// `;

// export const Introduction = styled.p`
//     text-align: justify;
//     color: var(--text-body);
//     line-height: 1.4;
//     padding: 0 20% 0 20%;
//     font-size: 24px;

//     span {
//         color: var(--yellow)
//     }

//     @media(max-width: 720px) {
//         padding: 0 10% 0 10%;
//     }
// `;

// export const ButtonsDirection = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     margin-top: 50px;
// `;

// export const List = styled.div`
//   width: 100%;
//   padding: 4rem;
//   margin: 100px auto;

//   background-color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 2rem;
// `;

import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 2rem;

  #options {
    .p-dropdown-panel {
      background: #ffffff;
      color: #495057;
      border: 0 none;
      border-radius: 3px;
      -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
        0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
        0 1px 10px 0 rgb(0 0 0 / 12%);
      margin-left: -90px;
    }
  }
`;

export const List = styled.div`
  width: 100%;
  padding: 4rem;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;
