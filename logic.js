
var arr=[
    {
       team:'CSK',
       primary: 'yellow',
       sceondary:'darkgreen' 
    },

    {
        team:'RCB',
        primary: 'Red',
        sceondary:'black' 
     },
     {
        team:'MI',
        primary: 'Blue',
        sceondary:'gold' 
     },
     {
        team:'KKR',
        primary: 'purple',
        sceondary:'gold' 
     },
     {
        team:'SRH',
        primary: 'orange',
        sceondary:'black' 
     }
]
let btn =document.querySelector('button')
let h1 =document.querySelector('h1')

btn.addEventListener('click',function(){
    let num=Math.floor(Math.random()*arr.length)
    let winner=arr[num];
    console.log(winner);
    h1.innerHTML= winner.team;
    h1.style.backgroundColor=winner.primary;
    h1.style.color=winner.sceondary;
})