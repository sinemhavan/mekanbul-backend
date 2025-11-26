var mongoose = require('mongoose');

// 1. Saatler (Hour) Şeması
var hour = new mongoose.Schema({
    days: { type: String, required: true },
    open: String,
    close: String,
    isClosed: { type: Boolean, required: false }
});

// 2. Yorumlar (Comment) Şeması (Senin kodda burası eksikti)
var comment = new mongoose.Schema({
    author: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// 3. Ana Mekan (Venue) Şeması
var venue = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
    foodanddrink: [String], 
    coordinates: { type: [Number], index: '2dsphere' },
    hours: [hour],       // Yukarıdaki hour şemasını kullanır
    comments: [comment]  // Yukarıdaki comment şemasını kullanır
});

// Şemayı modele çeviriyoruz
mongoose.model("venue", venue, "venues");