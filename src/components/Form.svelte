<script>
    const submit = (e)=>{
        e.preventDefault();
        let name = e.target.name.value;
        let lastName = e.target.last_name.value;
        let edad = e.target.edad.value;

        location.href = 'http://localhost/app-svelte/app-svelte-php/src/backend/addPersonas.php?name='+name+'&last_name='+lastName+'&edad='+edad;
    }
</script>

<form on:submit={submit} class="form">
    <div>
        <h3 style="color: #9a1ce8;text-align: center;">Registrate aquí</h3>
    </div>
    <div>
        <input type="text" name="name" id="name" placeholder="nombre..." required>
    </div>
    <div>
        <input type="text" name="last_name" id="last_name" placeholder="apellidos..." required>
    </div>
    <div>
        <input type="number" name="edad" id="edad" placeholder="33 años" required>
    </div>
    <div style="display: flex;align-items: center; justify-content: center; gap: 10px;">
        <button class="btn" type="submit">Enviar</button>
        <a href="/#/table" class="btn">Ver Tabla</a>
    </div>
</form>

<style>
    .form{
        background-color: black;
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        height: 70vh;
        width: 300px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .form>div{
        width: 100%;
        padding: 0px 20px;
        text-align: center;
    }

    input{
        background-color: black;
        border: none;
        border-bottom: 2px solid #9a1ce8;
        color: azure;
        width: 80%;
    }
    input:focus{
        border: none;
        outline: none;
        border-bottom: 2px solid #9a1ce8;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
    .btn{
        background-color: black;
        border: 2px solid #9a1ce8;
        color: #9a1ce8;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 20px;
        text-decoration: none;
        font-size: 16px;
    }
    .btn:hover{
        background-color: #9a1ce8;
        color: black;
    }
</style>