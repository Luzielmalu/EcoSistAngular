import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';


@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrl: './lista-cadastro.component.css'
})
export class ListaCadastroComponent implements OnInit{
  /*dataSource: MatTableDataSource<Cadastro>*/
  dataSource = new MatTableDataSource<any>();

  cpfParaBuscar = '';
  dadosUsuario: any;
  displayedColumns: string[] = ['id', 'nomeCompleto', 'dataNascimento','cpfCnpj','telefone','email', 'cep','enderecoCompleto','bairroCidEst','tipoEndereco','pontoReferencia','observacao','acoes'];
  constructor(private cadastroService: CadastroService, private router: Router) {}


  ngOnInit(): void {
  }

  buscarPorCpfOuCnpj(): void {
    this.buscarPorCpfCnpj();
  }
  buscarPorCpfCnpj() {
    if (this.cpfParaBuscar) {
      const cpfCnpj = this.cpfParaBuscar.replace(/\D/g, ''); // Remover caracteres não numéricos do CPF/CNPJ
      this.cadastroService.getCadastroByCpfCnpj(this.cpfParaBuscar)
          .subscribe(
              (dados) => {
                console.log('Dados recebidos:', dados);
                  this.dadosUsuario = dados;
                  this.dataSource.data = dados; // Adiciona os dados ao dataSource
              },
              (erro) => {
                  console.error('Erro ao buscar por CPF', erro);
              }
          );
  }

  }

  sair(): void {
    console.log('Botão Sair clicado');
    this.router.navigate(['/dashboard']);
  }

}
