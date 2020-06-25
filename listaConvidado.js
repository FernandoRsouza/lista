class ListaConvidados {

   constructor() {// iniciando uma contagem
      this.qtd = 0;
      this.id = 0;
      this.edit = false;
      this.editID = "";
   }

   add() {// criando metodo  adicionar 
      // 1) ler o input do DOM[tela]
      let nome = document.getElementById("nomeConvidado").value; 

      // 7) criar condições para validar o EDITAR() 
      if (this.edit == true) {
         document.getElementById(this.editID).childNodes[0].innerText = nome;
         this.edit = false;
          }else{
             // criando condições no Dom[tela]
      if (nome == "") {
         alert("DIGITE NOME DO CONVIDADO !!!!");
     div.removeChild(span);
      }



      // else if (this.qtd == 0) {
      //    alert("adicionando primeiro convidado desta lista");

      // }
      else if (this.qtd == 10) {
         alert(" LIMITE MAXIMO DE CONVIDADOS!!\n autorizado apenas 10 convidados neste evento.");
         this.qtd--;
      }

      // 2) ler a lista no Dom[tela]
      let lista = document.getElementById("lista");

      // 2.1 criar elemento no DOM[tela]
      let div = document.createElement("div");// criando uma tag  via JS >>  <di></div> no DOM[tela]
      div.classList.add("itemLista");// inserindo uma class no  div>>  <div class="itemlista"></div>
      div.id = "conv-" + this.id;  //lendo o ID e criando contador

      let span = document.createElement("span");// criando uma <span></span> no DOM[tela]
      span.innerText = nome;// inserindo nome no <span>exemplo: Jão da silva</span>

      let imgDel = document.createElement("img");//criando uma <img> no DOM[tela]
      imgDel.src = "../listaConvidados/img/trash.svg";// inserindo um atributo dentro da img src="../listaConvidados/img/trash.svg"

      let imgEdit = document.createElement("img");//criando uma <img> no DOM[tela]
      imgEdit.src = "../listaConvidados/img/edit.svg";// inserindo um atributo dentro da img src="../listaConvidados/img/edit.svg"

      //criando o onclick="lista.excluir(conv)"
      imgDel.setAttribute("onclick", "lista.excluir('" + div.id + "')");
      // criando o onclick="lista.editar()"
      imgEdit.setAttribute("onclick", "lista.editar('" + div.id + "')");

      // 2.2/ aninhar as tags
      div.appendChild(span);// agrupando <div id="itemLista"><span>'nome'</span></div>
      div.appendChild(imgDel); // agrupando <div id="itemLista"><span> 'nome'</span> <img src=" img/trash.svg"
      div.appendChild(imgEdit); // agrupando <div id="itemLista"><span> 'nome'</span> <img src=" img/edit.svg"

      // 2.3) inserir na lista  do DOM[tela]
      lista.appendChild(div);

      // 3) criando o contador
      this.qtd+=1;
      this.id+=1;

      this.atualizarQtd();

          }
      
      document.getElementById("nomeConvidado").value = "";//limpando o input nome convidado

       document.getElementById("btnAdd").innerText = "Salvar";


   }
   // 4) atualizar o contador qtd
   atualizarQtd() {
      let labelqtd = document.getElementById("labelqtd");
      labelqtd.innerText = this.qtd;
   }

   // 5)criando metodo excluir da lista convidados
   excluir(id) {
     
      if(confirm("TEM CERTEZA QUE DESEJA EXCLUIR ??") == true){
         let conv = document.getElementById(id);// buscando o id do convidado no DOM[tela]
         let lis = document.getElementById("lista");//acessando a lista de convidado no DOM[tela]
        lis.removeChild(conv);//excluindo convidado pelo id 
       this.qtd-=1;
       this.atualizarQtd();
       
   }   
         }

 // 6)criando metodo editar da lista convidados
   editar(id) {
      let nome = document.getElementById(id).childNodes[0].innerText;// acessando o 'id' e inserindo um texto
      document.getElementById("nomeConvidado").value = nome;//acessando o nomeCovidado[input]e colocando valor
      this.edit = true; //validando o botao add para modo editar
      this.editID = id;

      document.getElementById("btnAdd").innerText = "Alterar";
   }
}
var lista = new ListaConvidados();/**criando um objeto 'ListaConvidados' em js */