import styled from 'styled-components';

export const Container = styled.form`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;

`;

export const WrapperFilterNumeric = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  justify-content:center;
  
  .searchPlanet{
    max-width: 600px;
    padding: 10px 7px ;
    border-radius: 5px;
    width:100%;
    outline:none;
  }

`;

export const FiltersPlanets = styled.div`
  margin-top:20px;
  width:100%;
  max-width:750px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;

  label{
    display:flex;
    flex-direction:column;
    color: #fff;;
  }

  input, select {
    padding: 10px 7px;
    margin-right:15px;
    font-size:0.9rem;
  }
  .filter{
    display:flex;
    justify-content:center;
    align-items:flex-end;

  }

  .buttonsFilters{
    display:flex;
    align-items:flex-end;

    button{
      margin-left:5px;
      padding: 11px 7px;
      width:130px;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor: pointer;
      border: 1px solid transparent;
      background-color: #fff;

    }

    button:hover{
      background-color: #040915;
      color: #fff;
    }

    .fa-solid{
      margin-right:10px
    }
  }

`;

export const FiltersAplicated = styled.ul`
  display:flex;
  width:100%;
  list-style:none;
  max-width:713px;
  justify-content:start;
  flex-wrap:wrap;
  p{
    width:100%;
    color: #fff;
    padding-left:10px;
  }

  li{
    background-color:black;
    border-radius:5px;
    margin:10px;
    width:200px;
    position: relative;

    button{
      z-index:80000;
      cursor: pointer;
      position:absolute;
      top:0;
      left:90%;
      font-size:1rem;
      background-color:transparent;
      border:transparent;
      color:red;

    }
  }

`;

export const OrderFilter = styled.div`
  color:#FFF;

  select {
    padding: 10px 7px;
    margin-right:15px;
    font-size:0.9rem;
  }
  button{
    cursor: pointer;
    margin-left:15px;
    width:100px;
    background-color:#FFF;
    border:transparent;
    padding: 10px 7px;
    width:120px;
  }
`;
