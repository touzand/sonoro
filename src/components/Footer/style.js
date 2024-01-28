import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 350px;
  //width: 100%;
  background-color: var(--third-color);
  color: var(--primal-color);
  padding: 2rem;
display:flex;
flex-direction:column;
justify-content:space-between;

&>figure{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
  height:100%;
  justify-content:space-around;
}

article figure{
  margin:0;
}

img{
  max-width:100%;
  height:auto;
  display:block;
  margin:0 auto;
}

*{
  opacity:.8;
}

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
  }

  article {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    figure {
      width: 30px;
    }
  }

p{
  border-top:solid thin white;
  padding-top:1rem;
  text-align:start;
}

a{
  color:var(--primal-color);
  font-weight:bold;
}

@media (min-width:800px){
  height:250px;
  justify-content:center;

  &>figure{
  width:800px;
    margin:auto;

  flex-direction:row;
  align-items:center;
    justify-content:space-around;
  }


  div:nth-child(1){
    flex-direction:row;
    align-items:center;

    p:nth-child(1){
      width:250px;
    }

    p{
      border:none;
      padding:0;
      border-left:solid thin white;
      padding-left:1rem;
    }
  }

  div:nth-child(2){
  //background-color:red;
    //flex-direction:column;
    //align-items:start;
    //
    
    p{
      border:none;
      padding:0;
    }
  }
}
`;

export const Links = styled.figure`
display:flex;
align-items:center;
gap:1rem;

a:hover{
  opacity:1;
  color:white;
  transition:color .5s ease;
}

@media (min-width:800px){

}
`
