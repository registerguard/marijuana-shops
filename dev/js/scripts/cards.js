function addCard(id,statusLower,status,name,address,city,zip){
  cards += "<div id='" + id + "' class='flexy-item card-" + statusLower + "'>";
    cards += "<h3 class='label'>" + status + "</h3>";
    cards += "<h1 class='h5'>" + name + "</h1>";
    cards += "<p>" + address + "<br>" + city +", OR " + zip + "</p>";
  cards += "</div>";
  //console.log(cards);
}
