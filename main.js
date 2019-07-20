var names = [];
var contentBlock = document.querySelector('#content');

/**
 * getListOfNames
 * get list of names
 * @returns {string}
 */
getListOfNames = function() {
  var list = '';
  for(name of names)
   list += `<li>${name}</li>`
  return list;
};

/**
 * rerenderList
 * rerender list
 * @returns {*}
 */

rerenderList = function() {
  var list;
  if (names.length < 0)
    return document.getElementById("block-list-ul").outerHTML = "";

  list = getListOfNames();
  var blockListUlElement = document.getElementById("block-list-ul");
  if (blockListUlElement !== null)
    return blockListUlElement.innerHTML = list;

  var blockDivUlElement = document.getElementById("block-list");
  return blockDivUlElement.innerHTML = `<ul id="block-list-ul">${list}</ul>`;
};

/**
 * insertName
 * insert name
 * @param name
 * @returns {*}
 */
const insertName = function() {
  var nameElement = document.getElementById('name');
  var name = nameElement.value;
  if (name === '')
    return;
  names.push(name);
  return rerenderList();
};

/**
 * deleteName
 * delete name from list of names
 */
const deleteName = function() {
  names = [];
  var nameElement = document.getElementById('name');
  nameElement.value = '';
  rerenderList();
};

const inputBlock = `
    <div>
      <input id="name" type="text"/>
      <button onclick="insertName()">input</button>
      <button onclick="deleteName()">delete</button>
    </div>
`;

var ulBlock = `<div id="block-list"></div>`;

var html = `${inputBlock}${ulBlock}`;
contentBlock.innerHTML = html;
