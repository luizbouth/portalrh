<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Portal Recursos Humanos</h3>
  </div>
  <div class="panel-body">
    <div class="container">
        <form action="View/validacao.php" method="post">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="ipt_matricula">Matrícula:</label>
              <input id="ipt_matricula" name="ipt_matricula" type="text" class="form-control" placeholder="Matricula" required/>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="ipt_nome">Nome:</label>
              <input id="ipt_nome" name="ipt_nome" type="text" class="form-control" placeholder="Nome" required/>
              <!--label for="ipt_email">Email:</label>
              <input id="ipt_email" name="ipt_email" type="email" class="form-control" placeholder="Email" required/-->
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="ipt_setor">Setor:</label>
              <input id="ipt_setor" name="ipt_setor" type="text" class="form-control" placeholder="Setor" required/>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="ipt_mesano">Informe o mês e ano:</label>
              <input id="ipt_mesano" name="ipt_mesano" type="month" class="form-control" placeholder="99/9999" required/>
            </div>
          </div>
            
          <div class="col-sm-4">
            <div class="form-group">
              <div class="radio">
                <label>
                  <input id="ipt_checkbox_downl" name="saida" type="radio" value="D" required checked>Download (PDF)
                </label>
              </div>

              <div class="radio">
                <label>
                  <input id="ipt_checkbox_impr" name="saida" type="radio" value="I" required>Imprimir
                </label>
              </div>
                
            </div>
            <div class="form-group">
                <button id="btn_imprimir" type="button" class="btn btn-primary" onclick="javascript:window.print();">Imprimir</button>              
            </div>
              
          </div>
        </div>

        <!--div class="row">
          <div class="col-sm-12">
            <div class="form-group table-responsive">
              <table class="table table-striped table-hover">
                <th>Campo1</th>
                <th>Campo2</th>
                <th>Campo3</th>
                <th>Campo4</th>

                <tr>
                  <td class="success">x1</td>
                  <td class="warning">x2</td>
                  <td>x3</td>
                  <td>x4</td>
                </tr>
                <tr>
                  <td class="success">x5</td>
                  <td class="warning">x6</td>
                  <td>x7</td>
                  <td>x8</td>
                </tr>
              </table>
            </div>
          </div>
        </div-->
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <button id="btn_submit" class="btn btn-primary">Confirmar</button>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>  
</div>
