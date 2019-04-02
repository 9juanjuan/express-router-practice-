// Create
function create(req,res) {
    res.status(200).json({ message: "You created"})
}



// Retrieve
function retrieveAll(req,res) {
    // const allThinkpads = await Thinkpad.getAll();

    res.status(200).json({ message: "You retrieved all"})
}
function retrieveOne(req,res) {
    // const allThinkpads = await Thinkpad.getAll();
    const { id } = req.params;
    console.log(`the Book Route for ${id}`)
    res.status(200).json({ message: `You retrieved one entry from user ${id}`})
}




// Update
function update(req,res) {
    res.status(200).json({ message: "You updated "})
}


// Delete 
function deleteOne(req,res) {
    res.status(200).json({ message: "You deleted one"})
}




module.exports = {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
}