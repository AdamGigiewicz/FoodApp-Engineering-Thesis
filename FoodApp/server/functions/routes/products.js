const router = require("express").Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/create", async (req, res) => {
    try {
        const id = Date.now();
        const data = {
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_price: req.body.product_price,
            imageURL:req.body. imageURL,
    };

    const response = await db.collection("products").doc(`/${id}/`).set(data);
    return res.status(200).send({success: true, data: response});
    } catch (err) {
        return res({success: false, msg: `Error: ${err}`});
    }

});

router.get("/all", async (req, res) => {
    (async () => {
        try{
            let query = db.collection("products");
            let response = [];
            await query.get().then(querysnap => {
                let docs = querysnap.docs;
                docs.map(doc => {
                    response.push({...doc.data()})
                });
                return response;
            });
            return res.status(200).send({success: true, data: response});
        }catch(err){
            return res({success: false, msg: `Error: ${err}`})
        }
    })()
})


module.exports = router;