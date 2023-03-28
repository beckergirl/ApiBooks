
const connection = require("../database")

function getUser(request, response) // va 
{
    let sql;
    if (request.query.id == null)
        sql = "SELECT * FROM usuarios";
    else
        sql = "SELECT * FROM usuarios WHERE id_usuario=" + request.query.id_usuario;

    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


function getUser2(request, response)
{
    let sql = "SELECT * FROM usuarios WHERE id_usuario=" + request.params.id_usuario;
    console.log(sql);  
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result)
            response.send(result);
        }
    })
} 

function postUser(request, response) //POST “/registro”. Añade un nuevo usuario a la BBDD.
{
    console.log(request.body);// va
    let sql = "INSERT INTO usuarios (nombre, apellidos, correo, foto, password) " + 
              "VALUES ('" + request.body.nombre + "', '" + 
                            request.body.apellidos + "', '" +
                            request.body.correo + "', '" +
                            request.body.foto + "', '" +
                            request.body.password + "')";
    console.log(sql);                      
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result);
            if (result.insertId)
                response.send(String(result.insertId));
            else
                response.send("-1");
        }
    })
}

/// me devuelve los datos del usuario(body) sin mostrar su

function postUser2(request,response){ //POST “/login”. Comprueba que existe un usuario con los datos (correo, contraseña) en caso correcto
    //se debe retornar todos los datos de la tabla usuario menos la contraseña, en caso contrario notificar que los datos son incorrectos.

    console.log(request.body);

    let sql = "SELECT id_usuario, nombre, apellidos, correo, foto FROM usuarios WHERE password = '" + request.body.password + "' AND correo = '" + request.body.correo + "' ";

    console.log(sql);

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else
        {
            console.log(result);

            if(result)
            response.send(result);

            else{response.send("-1")}
        }
    })
} 

function putUser(request, response){ //va

    console.log(request.body);

    let params = [request.body.nombre, 
                  request.body.apellidos, 
                  request.body.correo,
                  request.body.foto,
                  request.body.password,
                  request.body.id_usuario]

    let sql = "UPDATE usuarios SET nombre = COALESCE(?, nombre) , " + 
               "apellidos = COALESCE(?, apellidos) , " + 
               "correo = COALESCE(?, correo) , " + 
               "foto = COALESCE(?, foto) , " + 
               "password = COALESCE(?, password)  WHERE id_usuario = ?";

    console.log(sql); 

    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

function deleteUser(request, response){ //va

    console.log(request.body);
    let sql = "DELETE FROM usuarios WHERE id_usuario = '" + request.body.id_usuario + "'";
    console.log(sql); 
    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


module.exports = {getUser, getUser2, postUser, postUser2, putUser, deleteUser};

