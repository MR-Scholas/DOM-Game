let boxNum=25;
const ansNum=Math.floor(Math.random()*(25-1+1)+1);
const app=document.querySelector('.app')
for(let i=1;i<boxNum+1;i++)
{
    const div=document.createElement('div');
    div.className='box';
    div.textContent=i;
    div.id=i;
    div.style.backgroundColor='white'
    div.onclick=function() {answer(i)}
    app.appendChild(div);
}

const answer=(i)=>
{
    let a = document.getElementById(i)
    if(i==ansNum) {a.style.backgroundColor='green'}
        else {a.style.backgroundColor='red'}
}