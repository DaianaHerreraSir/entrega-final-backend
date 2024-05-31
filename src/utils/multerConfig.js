import multer from "multer";
import path from "path";

// Configuración del almacenamiento de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = "documents";
        if (file.fieldname === "profile") {
            folder = "profiles";
        } else if (file.fieldname === "product") {
            folder = "products";
        }
        cb(null, path.join(__dirname, `../uploads/${folder}`));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

export default upload;
