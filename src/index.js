module.exports = function check(str, bracketsConfig) {
for (let  i = 0; i < str.length; i++){
  bracketsConfig.forEach(item=> {if (str[i] === item[0] && str[i+1] === item[1]) {
  str = str.slice(0,i) + str.slice(i+2, str.length);
  i-=2;
}
 });
}


return (str.length === 0);
}
