import { render } from "@testing-library/react"
import { Formulario } from "./formulario"
import userEvent from '@testing-library/user-event'

describe(('no Formulario'), () => {
    const mockAoSubmeter = jest.fn()

    test('se os campos estiverem vazios, o botão deve estar desabilitado', () => {
        // ASSERT - aqui organizamos variáveis do teste
    
        //importa funções e renderiza o compomente Formulário
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter}/>)
        
        // buscar inputs via placeholder
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
    
        // captura do botão adicionar
        const botaoAdicionar = getByRole('button')
    
        // ACT - simulação das ações de teste
        expect(inputNome).toBeInTheDocument()
        expect(inputAnoDeLancamento).toBeInTheDocument()
    
        // captura do botão adicionar 
        expect(botaoAdicionar).toBeDisabled()
        // ASSERT - testa as execuções e resultados obtidos
    } )
    
    test('se os inputs estiverem prenchidos, o botão deve estar habilitado', async () => {
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter}/>)
        
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button')

        await userEvent.type(inputNome, 'Interestelar')
        await userEvent.type(inputAnoDeLancamento, '2014')

        await userEvent.click(botaoAdicionar)

        expect(botaoAdicionar).toBeEnabled()
    })
})