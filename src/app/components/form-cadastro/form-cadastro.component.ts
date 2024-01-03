import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cadastro } from '../../models/cadastro';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent  {
  @Input()
  btnText: any;
  router: any;
  isSubmitting: boolean | undefined;
  constructor(private cadastroService: CadastroService, private location: Location) {}


 @Output() cadastrar = new EventEmitter<Cadastro>();
  novoCadastro: Cadastro = {
    id: 0,
    nomeCompleto: '',
    dataNascimento: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    cep: '',
    enderecoCompleto: '',
    bairroCidEst: '',
    tipoEndereco: '',
    pontoReferencia: '',
    observacao: '',

  };

  onSubmit(): void {
    this.isSubmitting = true;

    this.cadastroService.cadastroUsuario(this.novoCadastro).subscribe(
      (usuarioCadastrado) => {
        // Exibe um alerta de sucesso
        alert('Seus dados foram cadastrados com sucesso!');


        this.location.back();//volta para página anterior

      },
      (error) => {
        // Lógica de tratamento de erro, se necessário
        console.error('Erro durante o cadastro', error);
      }
      ).add(() => {
        // Reativa o botão após a conclusão da requisição (com sucesso ou erro)
        this.isSubmitting = false;
     });

    this.novoCadastro = {
      id: 0,
    nomeCompleto: '',
    dataNascimento: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    cep: '',
    enderecoCompleto: '',
    bairroCidEst: '',
    tipoEndereco: '',
    pontoReferencia: '',
    observacao: '',
    };
  }



}

