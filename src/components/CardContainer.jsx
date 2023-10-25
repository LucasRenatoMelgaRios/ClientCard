import styled from "styled-components"
import { CardCliente } from "./CardCliente";

export const CardContainer = () => {
  return (
    <Container>
      <CardCliente 
        nombre = "Gege" 
        apellido="Lopez"
        correo= "@gege_lo"
        dni="1376920"
      />

      <CardCliente 
        nombre = "Yaniz" 
        apellido="Tinoco"
        correo= "@yaniz_t"
        dni="1376920"
      />

      <CardCliente 
        nombre = "Estrella" 
        apellido="Cardenas"
        correo= "@star191"
        dni="1376920"
      />
      <CardCliente 
        nombre = "Estrella" 
        apellido="Cardenas"
        correo= "@star191"
        dni="1376920"
      />
      <CardCliente 
        nombre = "Estrella" 
        apellido="Cardenas"
        correo= "@star191"
        dni="1376920"
      />
    </Container>
  )
}
const Container = styled.section `

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;



  @media screen and ( min-width: 760px ) {
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 40px;

  }
  @media screen and ( min-width: 1200px ) {
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
   

  }

`;