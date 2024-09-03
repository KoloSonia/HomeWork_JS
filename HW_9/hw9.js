// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div=document.createElement('div');
div.style="color:white; font-size: 20px; height: 100px; width: 100px;";
div.style.background='indianred';
div.style.border = "2px solid red";
div.style.margin='5px';
div.innerText='some text';
div.style.textAlign='center';
document.body.appendChild(div);
let clonedDiv = div.cloneNode(true);
document.body.appendChild(clonedDiv);
console.log(div===clonedDiv);

//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let menu=['Main','Products','About us','Contacts'];
const list_menu=document.createElement('ul');
document.body.appendChild(list_menu);
for (let item of menu){
    let list_item = document.createElement('li');
    list_item.innerText=item;
    list_menu.appendChild(list_item);
}

// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let div_course=[];
for (let i=0;i<coursesAndDurationArray.length;i++){
    div_course[i]=document.createElement('div');
    div_course[i].className='div_course item2';
    document.body.appendChild(div_course[i]);
    let header1=document.createElement('h1');
    header1.innerText=coursesAndDurationArray[i].title;
    let paragraph=document.createElement('p');
    paragraph.innerText=`Month duration: ${coursesAndDurationArray[i].monthDuration}`;
    div_course[i].appendChild(header1);
    div_course[i].appendChild(paragraph);
}

//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let div_course_copy=[];
for (let i=0;i<coursesAndDurationArray.length;i++){
    div_course_copy[i]=document.createElement('div');
    div_course_copy[i].className='item div_course';
    document.body.appendChild(div_course_copy[i]);
    let header1_copy=document.createElement('h1');
    header1_copy.className='heading';
    header1_copy.innerText=coursesAndDurationArray[i].title;
    let paragraph_copy=document.createElement('p');
    paragraph_copy.className='description';
    paragraph_copy.innerText=coursesAndDurationArray[i].monthDuration;
    div_course_copy[i].appendChild(header1_copy);
    div_course_copy[i].appendChild(paragraph_copy);
}