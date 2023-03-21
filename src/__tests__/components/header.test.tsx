import { render, screen } from '@testing-library/react';
import Header from "../../components/Header/Header";

describe("Header component", () => {
  test('Should be able to render the header', () => {

    render(<Header />);
    
    const producer = screen.getAllByText("Fale com o produtor:");
    const login = screen.getAllByText("Acesse sua conta");
    const register = screen.getAllByText("Cadastre-se");
  
    // existem 2 de cada texto, um do header normal e um dentro do burger meno para mobile
    expect(producer[0]).toBeTruthy();
    expect(producer[1]).toBeTruthy();
    expect(login[0]).toBeTruthy();
    expect(login[1]).toBeTruthy();
    expect(register[0]).toBeTruthy();
    expect(register[1]).toBeTruthy();
  });
})

