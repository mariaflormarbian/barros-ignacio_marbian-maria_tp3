import * as GalleryService from '../../services/gallery.services.js'

function createGallery (req, res) {

    const idProject = req.params.id

    const gallery = {
        url: req.body.url,
        description: req.body.description
    }

    GalleryService.addToGallery(idProject, gallery)
    .then((newGallery) => {
        res.status(201).json(newGallery);
    })
    .catch((err) => {
        res.status(500).json({message: 'Error al guardar la galería', error: err});
    });

}

function findGalleryByProject (req, res) {

    const idProject = req.params.id

    GalleryService.findGalleryByProject(idProject)
    .then((gallery) => {
        res.status(200).json(gallery);
    })
    .catch((err) => {
        res.status(500).json({message: 'Error al obtener la galería', error: err});
    });

}

function deleteImageById (req, res) {
    
    const idProject = req.params.id
    const idImage = req.params.idImage

    GalleryService.deleteImageById(idProject, idImage)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).json({message: 'Error al eliminar la imagen', error: err});
    });
    
}

export {
    createGallery,
    findGalleryByProject,
    deleteImageById
}