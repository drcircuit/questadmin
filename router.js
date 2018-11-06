module.exports = function(e,store){
    var router = e.Router();
    router.get("/api/rooms", (req,res)=>{
        var rooms = store.all();
        res.send(rooms);
    });
    router.get("/api/rooms/:id", (req, res)=>{
        var room = store.find(req.params.id);
        console.log(room);
        if(!room){
            res.status(404);
            res.send();
        } else{
            res.send(room);
        }
    });
    router.post("/api/rooms",(req,res)=>{
        var room = req.body;
        console.log(req.body);
        var id = room.name.replace(" ", "").toLowerCase();
        store.save(id, room);
        res.send(id);
    });
    router.delete("/api/rooms/:id", (req,res)=>{
        store.delete(req.params.id);
        res.send();
    });
    return router;
}