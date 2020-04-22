class HashTable {
 constructor(size){
   this.data = new Array(size);
 }
  add_hash_element(key,value){
 const hash_key = this._hash(key);
 var hash_element = new Array();
 hash_element[0] = key;
 hash_element[1] = value;
 this.data[hash_key].push(hash_element);
 }
 
 get(key){
 const hash_key = this._hash(key);
 if(this.data[hash_key] != undefined){
   var hash_element = this.data[hash_key];
   for(let index = 0; index < hash_element.length; index++){
     if(hash_element[index][0] === key){
       return hash_element[index][1];
     }
   }
 }
  return "Key doesn't exist!";    
 }
 
 set(key,value){
 const check_key = this._hash(key);
 if(this.data[check_key] === undefined) {
   this.data[check_key] = new Array();
   this.add_hash_element(key,value);
 }else{
   let get_elem = this.data[check_key];
   var chained_elem = new Array(2);
   chained_elem[0] = key;
   chained_elem[1] = value;
   get_elem.push(chained_elem);
 }
 
 }
 
  _hash(key) {
   let hash = 0;
   for (let i =0; i < key.length; i++){
       hash = (hash + key.charCodeAt(i) * i) % this.data.length
   }
   return hash;
 }
}
 
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));
console.log(myHashTable.get('Boohyaa'));