<div class="panel panel-primary">
    <div class="panel-heading">
        <h3 class="panel-title">Soma de Valores</h3>
    </div>
    <div class="panel-body">
        <div class="container">
            <form action="Modules/Default/View/soma/valida.php" method="post">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="ipt_val1">Valor1:</label>
                            <input id="ipt_val1" name="ipt_val1" type="text" class="form-control" placeholder="Valor 1" required/>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="ipt_val2">Valor 2:</label>
                            <input id="ipt_val2" name="ipt_val2" type="text" class="form-control" placeholder="Valor 2" required/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <button id="btn_submit" class="btn btn-primary" type="button" onclick="soma()">Calcular</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="ipt_soma">Soma:</label>
                        <input id="ipt_soma" name="ipt_soma" type="text" class="form-control" placeholder="Soma" required readonly/>
                    </div>
                </div>

            </form>
        </div>
    </div>

</div>  

<script>
    function soma(){
        var val1 = $('#ipt_val1').val();
        var val2 = $('#ipt_val2').val();
        
        //alert(parseInt(val1)+parseInt(val2));
        
        $('#ipt_soma').val(parseInt(val1)+parseInt(val2));
    }
</script>
