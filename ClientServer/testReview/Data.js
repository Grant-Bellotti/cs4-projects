let Data = function(id,name,color,residence,image) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.r = parseInt(this.color.substring(1,3), 16);
    this.g = parseInt(this.color.substring(3,5), 16);
    this.b = parseInt(this.color.substring(5,7), 16);
    this.residence = residence;
    this.image = image;
}

module.exports = Data;
