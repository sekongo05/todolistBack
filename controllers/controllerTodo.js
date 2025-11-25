const db = require('../models/db')

exports.addListe = (req, res)=>{

    const {tache} =req.body
    db.query('INSERT INTO liste (tache) VALUES(?)', [tache], (error,resultat)=>{
        if(error){
            console.log(error)
            return res.json({message: "Erreur lors de l'ajout de la tâche",})
        }
        return res.json({message: "Tâche ajoutée avec succès !!",})

    })
}

exports.mesTaches =(req, res)=>{
    db.query('SELECT * FROM liste', (error,resultat)=>{
        if(error){
            console.log(error)
            return res.json({message: 'Erreur de la requête'})
        }
        return res.json({message: "voici la liste des tâches", resultat})
    })

}

exports.suppTaches = (req, res)=>{
    const {id} = req.params
    db.query('DELETE FROM liste WHERE id= ?',[id], (error,resultat)=>{
        if(error){
            console.log(error)
            return res.json({message: 'Suppression échouée'})
        }
        return res.json({message: "Tâche supprimée"})
    })
}