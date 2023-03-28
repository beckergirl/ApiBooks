const {Router} = require ("express")
const router = Router();
const librosCtrl = require("../controller/books.controller")

router.get("/libros", librosCtrl.getBooks);

router.get("/libros?id_usuario=", librosCtrl.getBook);

router.get("/libros?id_usuario=" + "&id_libro", librosCtrl.getBook2); //??? No se si se pueden unir así los endpoints
        
router.post("/libros", librosCtrl.postBook);
        
router.put("/libros", librosCtrl.putBook);
        
router.delete("/libros", librosCtrl.deleteBook); 

module.exports = router;