let s = "{{{{}}}}";
// 写出一个函数，判断s是否是对应封闭的函数形式；
function isFn(s){
    let e = s.split("");
   let arr = e.map(
       function(a){
       if(a == "{"){
       return 1;
   }else if(a == "}"){
       return -1;
   }else{
      return  0;
   }}
   );

   let L = arr.length;
   
   for(let i = 0,mark = 0; i <= L; i++){
         for(let j = 0;j < L; j++){
            mark += arr[j];
         }
         if(mark < 0 ){
             return false;
         }
   }

   return true;
}
console.log(isFn(s));