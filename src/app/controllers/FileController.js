import File from '../models/File';

class FileController {
  async store(req, res) {
    // The 'file' object was added by multer middleware in the request object
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path
    });

    return res.json(file);
  }
}

export default new FileController();
