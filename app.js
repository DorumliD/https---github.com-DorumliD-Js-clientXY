// class Odam{
//     constructor(name, age, job, nationality){
//         this.name=name;
//         this.age=age;
//         this.job=job;
//         this.nationality=nationality;
//     }
//     go(){
//         console.log(this.name+" ismli odam "+this.nationality + ' yuryapti');
//     }
//     stop(){
//         console.log(this.name+" ismli odam "+this.job+" likdan boshadi.");
//     }
//     lock(){
//         console.log(this.name+" ismli odam o'zidan mamnun emas. Chunki hayoti omadsizliklar bilan to'lib ketdi.");
//     }
// }
// let habibjon = new Odam("Habibulloh", 19, "cleaner", "uzbek");
// console.log(habibjon);
// habibjon.go()
// habibjon.stop()
// habibjon.lock()

////////////////////////////////////////////////////////////////////
let myDiv = document.querySelector('.blackboard');
let myXbutton = document.querySelector('button');
let myYbutton = document.querySelector('input');

myDiv.addEventListener('mousemove', function(event){
    let x = event.clientX; 
    let y = event.clientY;
    
    // console.log(x + ' va ' + y);
    myXbutton.innerText = 'x= ' + x;
    myYbutton.value = 'y= ' + y;

    // if(x>250){
    //     myDiv.style.backgroundColor="red"
    // }else{
    //     myDiv.style.backgroundColor="blue"
    // }

    // if(x>30){
    //     myDiv.style.backgroundImage = 'url(https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg)';

    //     myDiv.style.backgroundSize = '100% 100%'
    // }

    if(x>0 && x<71){
        myDiv.style.backgroundImage = 'url(https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>72 && x<142){
        myDiv.style.backgroundImage = 'url(https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>143 && x<214){
        myDiv.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>214 && x<285){
        myDiv.style.backgroundImage = 'url(https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>286 && x<357){
        myDiv.style.backgroundImage = 'url(https://cdn.motor1.com/images/mgl/MkO9NN/s1/future-supercars.webp)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>358 && x<429){
        myDiv.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDhN6PT71Exuhr6j6KayhENg5ofz4iXGR1A&s)';
        myDiv.style.backgroundSize = '100% 100%'
    }
    else if(x>429 && x<500){
        myDiv.style.backgroundImage = 'url(https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg?size=626&ext=jpg&ga=GA1.1.967060102.1710979200&semt=ais)';
        myDiv.style.backgroundSize = '100% 100%'
    }
})


