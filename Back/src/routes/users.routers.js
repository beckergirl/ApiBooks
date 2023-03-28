const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/users.controller")

router.get("/usuarios", usersCtrl.getUser);

router.get("/usuarios/:id_usuario", usersCtrl.getUser2);
        
router.post("/usuarios/registro", usersCtrl.postUser);

router.post("/usuarios/login", usersCtrl.postUser2);
        
router.put("/usuarios", usersCtrl.putUser);
        
router.delete("/usuarios", usersCtrl.deleteUser); 

module.exports = router;

