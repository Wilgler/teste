import { describe,expect,it,jest, } from "@jest/globals";
import PessoaController from "../controllers/PessoaController";
import pessoas from "../models/Pessoa";


describe("Deve retornar os testes Unitarios de Pessoa", () =>{
    const dataPessoa = new Date();
    const objPessoa = {
        nome: "Wilgler Pessoa",
        cpf: "12365478910",
        nit: "1456325",
        dataNascimento: dataPessoa,
        estrangeiro: false ,
        pais: "Brasil",
        cep: "769800000" ,
        logradouro: "Rua 30",
        numero:"142" ,
        bairro: "Alvorada",
        cidade: "Vilhena",
        estado: "Rondonia" ,
        telefone: "69984841487" ,
        telefoneContato: "69984841487"  
    };

    it("Dev retornar uma Instancia de Pessoa",() => {
        const pessoa = new pessoas (objPessoa)
        expect(pessoa).toEqual(expect.objectContaining(objPessoa));
    });



/**
 * ListarPessoa []
 * CadastrarPessoa []
 * 
 */

it ("Deve retornar o cadastro simulado com mock", () =>  { 
    const pessoa = new pessoas(objPessoa);
    PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
    
        nome: "Wilgler Pessoa",
        cpf: "12365478910",
        nit: "1456325",
        dataNascimento: dataPessoa,
        estrangeiro: false ,
        pais: "Brasil",
        cep: "769800000",
        logradouro: "Rua 30",
        numero:"142",
        bairro: "Alvorada",
        cidade: "Vilhena",
        estado: "Rondonia" ,
        telefone: "69984841487" ,
        telefoneContato: "69984841487"  
    
    });
    const retorno = PessoaController.cadastrarPessoa();
    expect(retorno).toEqual (expect.objectContaining({
    dataNascimento: expect.any(Date),...objPessoa,}));
    expect(PessoaController.cadastrarPessoa).toBeCalledTimes(1)
    

});
})