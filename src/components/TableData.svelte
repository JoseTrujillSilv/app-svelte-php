<script>

    var tableData = [];

    fetch('http://localhost/app-svelte/app-svelte-php/src/backend/getPersonas.php')
    .then(res => {return res.json()})
    .then(data => {console.log(tableData = data)})

</script>


<header>
    <div>
        <a style="text-decoration: none;color: black; font-weight: bold;" href="/">Volver</a>
        <div class="div-link"></div>
    </div>
</header>
<div class="container">
    <table class="darkTable">
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>
            {#each tableData as { dni,nombre,apellidos,edad }, i}
                <tr>
                    <td>{dni}</td>
                    <td>{nombre}</td>
                    <td>{apellidos}</td>
                    <td>{edad}</td>
                </tr>
	        {/each}
        </tbody>    
    </table>
</div>

<style>
    header{
        position: absolute;
        top: 5%;
        left: 5%;
    }

    .div-link{
        width: 0px;
        height: 2px;
        padding: 0px;
        margin: 0px;
        background-color: black;
    }

    a:hover ~ .div-link{
        animation: link 1s ease-in-out forwards;
    } 

    @keyframes link{
        0%{
            width: 0px;
        }
        100%{
            width: 50px;
        }
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }
    
    table.darkTable {
  font-family: "Arial Black", Gadget, sans-serif;
  border: 2px solid #000000;
  background-color: #4A4A4A;
  width: 300px;
  text-align: center;
  border-collapse: collapse;
}
table.darkTable td, table.darkTable th {
  border: 1px solid #4A4A4A;
  padding: 3px 2px;
}
table.darkTable tbody td {
  font-size: 13px;
  color: #E6E6E6;
}
table.darkTable tr:nth-child(even) {
  background: #888888;
}
table.darkTable thead {
  background: #000000;
  border-bottom: 3px solid #000000;
}
table.darkTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #E6E6E6;
  text-align: center;
  border-left: 2px solid #4A4A4A;
}
table.darkTable thead th:first-child {
  border-left: none;
}

</style>