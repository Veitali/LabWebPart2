
   

   function createTable(id,mas){
       let table="<table>";
       table+="<tr>";
       table+="<th> User name </th>";
       table+='<th> Password </th>';
       table+='<th> Age </th>';
       table+='<tr>';
       mas1=JSON.parse(mas);
       for(let i=0; i< mas1.length;i++){
           table+='<tr>';
           table+="<td>"+mas1[i]['username']+"</td>"+"<td>"+mas1[i]['password']+"</td>"+"<td>"+mas1[i]['age']+"</td>";
           table+='</tr>';
       }
       table+='</table>';
       document.getElementById(id).innerHTML=table;
 
   }

   $(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
        createTable('table',data)
        })
        }
    getUsers();
   })