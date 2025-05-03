import Item from "../models/item.js";

export function getAllItems (req,res) {
    Item.find().then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )
}

export function saveItem(req,res) {

    if(req.user.role != "admin") { 
        res.status(403).json({
            message : "You cannot add items"
        })
        return;
    }
    const item = new Item(req.body)
    item.save().then(
        ()=>{
            res.json({
                message : "Item saved"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )
}

export function getGoodItems(req,res) {
    res.json({
        message : "Good items"
    })
}

export function searchItem(req,res) {
    const itemName = req.params.name

    Item.find(
        {
            name : itemName
        }
    ).then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )
}