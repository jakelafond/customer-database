var ul = document.querySelector('.person-list');

customers.results.forEach(function(data, index) {
  var li = document.createElement('li');
  ul.appendChild(li);

  var image = document.createElement('img');
  image.src = customers['results'][index].picture['large'];
  li.appendChild(image);

  var pName = document.createElement('p');
  pName.textContent = customers['results'][index].name['first'] + ' ' + customers['results'][index].name['last'];
  pName.className = 'name';
  li.appendChild(pName);

  var pEmail = document.createElement('p');
  pEmail.textContent = customers['results'][index]['email'];
  pEmail.className = 'email';
  li.appendChild(pEmail);

  var newAddress = document.createElement('address');
  newAddress.className = 'address';
  li.appendChild(newAddress);

  var pStreet = document.createElement('p');
  pStreet.textContent = customers['results'][index].location['street'];
  newAddress.appendChild(pStreet);

  var pCityStateZip = document.createElement('p');
  pCityStateZip.textContent = `${customers['results'][index].location['city']}, ${customers['results'][index].location[
    'state'
  ]} ${customers['results'][index].location['postcode']}`;
  newAddress.appendChild(pCityStateZip);

  var pTel = document.createElement('p');
  pTel.textContent = customers['results'][index]['phone'];
  pTel.className = 'tel';
  li.appendChild(pTel);

  var pSSN = document.createElement('p');
  pSSN.textContent = customers['results'][index].id['value'];
  pSSN.className = 'ssndefault';
  li.appendChild(pSSN);

  console.log(customers['results'][index].name);
});

var classname = document.getElementsByClassName('ssndefault');
var classname2 = document.getElementsByClassName('ssnvis');

var turnVis = function() {
  var attribute = this.setAttribute('class', 'ssnvis');
};

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('mouseover', turnVis);
}

var goAway = function() {
  var attribute2 = this.setAttribute('class', 'ssndefault');
};

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('mouseout', goAway);
}
