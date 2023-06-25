var restart = document.querySelector("#r")
var squares = document.querySelectorAll('td')

function clearAll()
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearAll)

function changeVal()
{
    if(this.textContent === '')
        this.textContent = 'X';
    else if(this.textContent === 'X')
        this.textContent = 'O';
    else    
        this.textContent = '';
}

for(var i=0;i<squares.length;i++)
{
    squares[i].addEventListener('click',changeVal);
}