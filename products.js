const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
  console.log('Connected');  
})
.catch(err => {
    console.log('Error!!!!!');
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 10
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }, 
    onsale: {
        type: Boolean,
        default: false
    }

});


const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'dsf', price: 59});

bike.save()
    .then(data => {
        console.log('Worked');
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })