const mongoose = require('mongoose')
const connet = 'mongodb://waheed:waheed23@crud-cluster-shard-00-00.svwhp.mongodb.net:27017,crud-cluster-shard-00-01.svwhp.mongodb.net:27017,crud-cluster-shard-00-02.svwhp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-s0rpjf-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(connet).then(()=> {
    console.log('connected to db');
}).catch((err)=>{
console.log(err);
})
