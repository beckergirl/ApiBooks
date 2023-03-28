// el PUT NO FUNCIONA

const connection = require("../database")

function getBooks(request, response){ // funciona
    let sql;
    if (request.query.id_usuario == null)
        sql = "SELECT * FROM libros";
    else
        sql = "SELECT * FROM libros WHERE id_usuario=" + request.query.id_usuario;

    connection.query(sql, function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })}


// GET “/libros?id_usuario=Pepe”.
//  Devuelve todos los libros almacenados en la BBDD de un usuario.
function getBook(request,response){ // dudas

    let sql= "SELECT * FROM libro WHERE id_usuario = '" + id_usuario + "'"

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

// Devuelve los datos del libro cuyo id corresponda con el de la BBDD y sea del usuario especificado por su id_usuario.
// GET “/libros?id_usuario=Pepe&id_libro=10
function getBook2(request, response) //funciona?
{
    let sql = "SELECT usuarios.id_usuario,libros.id_libro,libros.titulo,libros.tipo,libros.autor,libros.precio,libros.foto FROM usuarios JOIN libros ON (usuarios.id_usuario = libros.id_usuario) WHERE usuarios.id_usuario = '" + id_usuario + "' AND libros.id_libro = '" + id_libro + "'"
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

function postBook(request, response) //POST Añade un nuevo libro a la BBDD asociado a un usuario.
{
    console.log(request.body);// funciona
    let sql = "INSERT INTO libros (id_usuario, titulo, tipoLibro, autor, precio, foto) " + 
              "VALUES ('" + request.body.id_usuario + "', '" + 
                            request.body.titulo + "', '" +
                            request.body.tipoLibro + "', '" +
                            request.body.autor + "', '" +
                            request.body.precio + "', '" +
                            request.body.foto + "')";
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



function putBook(request, response){  //Actualiza la información de un libro de la BBDD.

    console.log(request.body); // NO

    let params = [request.body.id_usuario, 
                  request.body.titulo, 
                  request.body.tipoLibro,
                  request.body.autor,
                  request.body.precio,
                  request.body.foto]

    let sql = "UPDATE libros SET id_usuario = COALESCE(?, id_usuario) , " + 
               "titulo = COALESCE(?, titulo) , " + 
               "tipoLibro = COALESCE(?, tipoLibro) , " + 
               "autor = COALESCE(?, autor) , " + 
               "precio = COALESCE(?, precio) , " + 
               "foto = COALESCE(?, foto)  WHERE id_libro = ?";

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

function deleteBook(request, response){ //Elimina el libro de la BBDD.

    console.log(request.body);
    let sql = "DELETE FROM libros WHERE id_libro = '" + request.body.id_libro + "'";
    console.log(sql); 
    connection.query(sql, function (err, result) // funciona
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}




module.exports = { getBooks, getBook, getBook2, postBook, putBook, deleteBook };