alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);


if(grade>=90)
{
console.log("%cلقد حصلت على امتياز 🥳", "background:#00418C; color:white; padding:5px;");    
}
else if(grade>=80)
{
console.log("%cلقد حصلت على جيد جداً🤩", "background:#00418C; color:white; padding:5px;");    
}
else if(grade>=70)
{
console.log( "%cلقد حصلت على جيد🙂", "background:#00418C; color:white; padding:5px;");    
}
else if(grade>=60)
{
console.log("%cلقد حصلت على مقبول😕", "background:#00418C; color:white; padding:5px;");    
}
else if(grade>=50)
{
console.log("%cلقد حصلت على ضعيف☹️", "background:#00418C; color:white; padding:5px;");    
}
else{
 console.log("%cراسب💔", "background:#00418C; color:white; padding:5px;");   
}
//جافاسكربت ليست جافا