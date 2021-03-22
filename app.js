const Generate_btn = document.getElementById("create_btn");
const result = document.getElementById("result");
var length_pass= document.getElementById("Password_length");
const checkbox = document.querySelectorAll(".item input");
const password_arr=["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","0123456789","~!@#$%^&*()_+`-/{}"];
var temp_arr = []; // to save item
var result_arr=[];

length_pass.onchange = function(){
    length_pass.setAttribute('value', length_pass.value);
}
Generate_btn.onclick = function(){
    console.log(length_pass);
     for(let i=0;i<checkbox.length-1;i++)
     {
        if(checkbox[i+1].checked === true) // cause not choose first input in item class
        {
            temp_arr.push(password_arr[i]);
        }
     }
     for(let i=0;i<parseInt(length_pass.value);i++)
     {
        result_arr.push(random_arr(random_arr(temp_arr)));
     }
     result.textContent = result_arr.join('');
     temp_arr=[];
     result_arr=[];
}
function random_arr (arr)
{
    return arr[Math.floor(Math.random()*arr.length)];
}


