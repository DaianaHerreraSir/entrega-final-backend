import { Router } from "express";
import usersModel from "../models/users.model.js";
import passportCall from "../middleware/passportCall.js";
import authorization from "../middleware/authentication.middleware.js";
import { UserControllers } from "../controllers/user.controllers.js";
import upload from "../utils/multerConfig.js";

const userRouter = Router()

 
const { getUsers,
        getUserBy,
        createUser,
        updateUser,
        deleteUser,
    userRole,
    renderUploadDocuments}= new UserControllers()


userRouter.get("/", getUsers)

userRouter.get("/:uid", getUserBy)

userRouter.post("/",createUser)

userRouter.put("/:uid", updateUser)

userRouter.delete("/:uid", deleteUser)

// Nueva ruta para cambiar el rol de un usuario a premium o user
userRouter.put("/premium/:uid", userRole);

// Nueva ruta para subir documentos
userRouter.post("/api/users/:uid/documents", upload.fields([
    { name: 'profile', maxCount: 1 },
    { name: 'product', maxCount: 1 },
    { name: 'document', maxCount: 10 }
]), uploadDocuments);

// Ruta para renderizar la vista de subir documentos
userRouter.get("/:uid/upload", renderUploadDocuments);