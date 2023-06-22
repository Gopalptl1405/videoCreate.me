 let container = document.querySelector('.container');

let DSA1 = [
    {className: 'Orientation',
     classLink: `https://player.vimeo.com/video/795366112?h=22102cc3ec`,
     classAssigment: ``},
     
    {className: 'Hello World, Variables & Data Types, Taking Input New',
     classLink: `https://player.vimeo.com/video/803600805?h=9f7376ad83`,
     classAssigment: ``},

    {className: 'Conditionals & Loops',
     classLink: `https://player.vimeo.com/video/796406334?h=adb53b2438`,
     classAssigment: ``},

    {className: 'Nested Loop',
     classLink: `https://player.vimeo.com/video/796760438?h=3180f5e6bb`,
     classAssigment: ``},

    {className: 'Functions.',
     classLink: `https://player.vimeo.com/video/797139026?h=35ad74c2cf`,
     classAssigment: ``},

    {className: 'Arrays I.',
     classLink: `https://player.vimeo.com/video/797503249?h=9a1feca6a7`,
     classAssigment: ``},

    {className: 'Arrays II.',
     classLink: `https://player.vimeo.com/video/797815011?h=2d0939d79b`,
     classAssigment: ``},

    {className: 'Array Completion and Contest Discussion',
     classLink: `https://player.vimeo.com/video/798096003?h=e5f3d9b4fc`,
     classAssigment: ``},

    {className: 'Time & Space Complexity',
     classLink: `https://player.vimeo.com/video/798507403?h=19a6a7a23e`,
     classAssigment: ``},

    {className: '2D Arrays I.',
     classLink: `https://player.vimeo.com/video/798906203?h=9f316d1e32`,
     classAssigment: ``},

    {className: '2D Arrays II.',
     classLink: `https://player.vimeo.com/video/799257620?h=4f7fbe10f0`,
     classAssigment: ``},

    {className: 'Arrays List.',
     classLink: `https://player.vimeo.com/video/799644132?h=d30915cd4a`,
     classAssigment: ``},

    {className: 'Strings -I',
     classLink: `https://player.vimeo.com/video/799980604?h=1cfaa9545f`,
     classAssigment: ``},

    {className: 'Strings - II',
     classLink: `https://player.vimeo.com/video/800081772?h=156e9ce7f4`,
     classAssigment: ``},


    {className: 'Basic Discosion.',
     classLink: `https://player.vimeo.com/video/800239115?h=fb1a4b0c32`,
     classAssigment: ``},

    {className: 'Strings - III',
     classLink: `https://player.vimeo.com/video/800636859?h=7af17f66f8`,
     classAssigment: ``},

    {className: 'Sorting Algoritham.',
     classLink: `https://player.vimeo.com/video/800998188?h=107218c648`,
     classAssigment: ``},

    {className: 'Sorting Algoritham II.',
     classLink: `https://player.vimeo.com/video/801370185?h=4a97e79e20`,
     classAssigment: ``},

    {className: 'StringBuilder and BuffReader I',
     classLink: `https://player.vimeo.com/video/801731909?h=c4cbc9b6e7`,
     classAssigment: ``},

    {className: 'StringBuilder and BuffReader II',
     classLink: `https://player.vimeo.com/video/802097446?h=346cc413cf`,
     classAssigment: ``},

   {className: 'Revision - 1',
     classLink: `https://player.vimeo.com/video/802852354?h=548e2bd95d`,
     classAssigment: ``},

    {className: 'Revision - 2',
     classLink: `https://player.vimeo.com/video/803232546?h=9e540cf563`,
     classAssigment: ``},

    {className: 'Revision -3',
     classLink: `https://player.vimeo.com/video/803600805?h=9f7376ad83`,
     classAssigment: ``},

]

for(let i=0; i < DSA1.length; i++)
{
    let period = document.createElement("div");
       period.classList.add('class');

    let spanserialNo = document.createElement('p');
        
        if(i<10){
            spanserialNo.innerText = "0" + (i + 1);
        }else{
            spanserialNo.innerText = i;
        }

    let para1 = document.createElement('p');
      para1.classList.add('para');
      para1.innerText = DSA1[i].className;

    let para2 = document.createElement('p');
    para2.innerText = "Class Link ------>";
      
    let button = document.createElement('button');
     
    let anchor = document.createElement('a');
         anchor.href = DSA1[i].classLink;
         anchor.target ="-black";
         anchor.innerText = "Link."
    let assigment = document.createElement('div');
        assigment.classList.add('assigment');
        assigment.innerText = " Assigment : - Please be patient doc will be update. ";

     button.append(anchor);
     period.append(spanserialNo);
    period.append(para1);
    period.append(para2);
    period.append(button);

    container.append(period);
    container.append(assigment);
}




