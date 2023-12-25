let comments = [];
const FormForcomment=document.getElementById('form');
let opinionsElm = document.getElementById('comment-field');
document.getElementById('comment-add').onclick = function(event){
    event.preventDefault();
    const UserName = document.getElementById("User").value.trim();
    const UserEmail = document.getElementById("EmailUser").value.trim();
    const UserOpn = document.getElementById("opn").value.trim();
    const UserUrl = document.getElementById("UserUrl").value.trim();
    const rad = document.querySelector('input[ name = fig ]:checked');
    const site1 = document.getElementById("site1").checked;
    const site2 = document.getElementById("site2").checked;
    const site3 = document.getElementById("site3").checked;
    const UserGrade = document.getElementById("grad").value.trim();
    if(UserName=="" || UserEmail=="" || UserOpn==""){
    //if(UserName==""|| UserOpn==""){
        window.alert("Please, enter both your name, email and opinion");
        return;
    }

    let newOpinion =
        {
            name: UserName,
            email: UserEmail,
            comment: UserOpn,
            url: UserUrl,
            radiobtn: rad,
            site1like: site1,
            site2like: site2,
            site3like: site3, 
            grade: UserGrade,
            created: new Date()
        };
    comments.push(newOpinion);
    console.log(comments);
    saveComments();
    //showComments();
    opinionsElm.innerHTML+=opinion2html(newOpinion);
    FormForcomment.reset();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function opinion2html(opinion){

        let template = document.getElementById("template").innerHTML;

        const opinionTemplate=Mustache.render(template, {name:opinion.name, grade: opinion.grade, created: (new Date(opinion.created)).toDateString(), comment: opinion.comment});
    
        return opinionTemplate;
    }

// function showComments(){
    
//     let out = '';

//     comments.forEach(function(item){
//         out += `<p>${item.name}</p>`;
//     });

//     commentField.innerHTML = out;
// }

// let comments = [];
// let opinionsElm = document.getElementById('comment-field');

// if(localStorage.myTreescomment){
//     comments=JSON.parse(localStorage.myTreescomment);
// }
// //localStorage.clear();
// console.log(comments);
// const FormForcomment=document.getElementById('form');
// FormForcomment.addEventListener("submit",processOpnFrmData);
// function processOpnFrmData(event){
//         //1.prevent normal event (form sending) processing
//     event.preventDefault();

//         //2. Read and adjust data from the form (here we remove white spaces before and after the strings)
//     const UserName = document.getElementById("User").value.trim();
//     const UserEmail = document.getElementById("EmailUser").value.trim();
//     const UserOpn = document.getElementById("opn").value.trim();
//     const UserUrl = document.getElementById("UserUrl").value.trim();
//     const rad = document.querySelector('input[ name = fig ]:checked');
//     const site1 = document.getElementById("site1").checked;
//     const site2 = document.getElementById("site2").checked;
//     const site3 = document.getElementById("site3").checked;
//     const UserGrade = document.getElementById("grad").value.trim();
//         //3. Verify the data
//     // if(UserName=="" || UserEmail=="" || UserOpn==""){
//     if(UserName==""|| UserOpn==""){
//         window.alert("Please, enter both your name, email and opinion");
//         return;
//     }

//         //3. Add the data to the array comment and local storage
//     const newOpinion =
//         {
//             name: UserName,
//             email: UserEmail,
//             comment: UserOpn,
//             url: UserUrl,
//             radiobtn: rad,
//             site1like: site1,
//             site2like: site2,
//             site3like: site3, 
//             grade: UserGrade,
//             created: new Date()
//         };

    
//         this.comments.push(newOpinion);

//         localStorage.myTreesComment = JSON.stringify(this.comments);


//         //4. Update HTML
//         this.opinionsElm.innerHTML+=this.opinion2html(newOpinion);


//         //5. Reset the form
//         this.FormForcomment.reset();
// }

// function opinion2html(opinion){

//     const opinionTemplate=
//         `
//             <section>
//                <h3>${opinion.name} <i>(${(new Date(opinion.created)).toDateString()})</i></h3>

//                <p>${opinion.comment}</p>
//             </section>`;

//     return opinionTemplate;
// }