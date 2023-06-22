let container = document.querySelector('.container');

let DSA2 = [
    {className: 'Orientation.',
     classLink: `https://player.vimeo.com/video/805256875?h=5f56bdd8b2`,
     classAssigment: ``},
    
    {className: 'Introduction & Recursion on Integer 1',
     classLink: `https://player.vimeo.com/video/806477762?h=5f26eed41c`,
     classAssigment: ``},

    {className: 'Introduction & Recursion on Integer 2',
     classLink: `https://player.vimeo.com/video/806871950?h=768849dd9e`,
     classAssigment: ``},

    {className: 'Soft Skills Placement Prep: LinkedIn and Introduction',
     classLink: `https://player.vimeo.com/video/807044917?h=a5471a6528`,
     classAssigment: ``},

    {className: 'Recursion on Array',
     classLink: `https://player.vimeo.com/video/807220169?h=d4b9c1ba8e`,
     classAssigment: ``},

    {className: 'Recursion on Strings and 2D-Arrays 1',
     classLink: `https://player.vimeo.com/video/807656596?h=5f38fb3479`,
     classAssigment: ``},

    {className: 'Recursion on Strings and 2D-Arrays 2',
     classLink: `https://player.vimeo.com/video/808063157?h=98449916f2`,
     classAssigment: ``},
     
 
    {className: 'Recursion on ArrayList',
     classLink: `https://player.vimeo.com/video/808441372?h=beb6ae8b68`,
     classAssigment: ``},
    
    {className: 'Merge and Quick Sort',
     classLink: `https://player.vimeo.com/video/808823226?h=f419b6dad7`,
     classAssigment: ``},

    {className: 'OOPs 1',
     classLink: `https://player.vimeo.com/video/809102187?h=f5b41e647c`,
     classAssigment: ``},

    {className: 'Revision Recursion.',
     classLink: `https://player.vimeo.com/video/809297934?h=5f21cf6aef`,
     classAssigment: ``},

    {className: 'SoftSkill Session and methods.',
     classLink: `https://player.vimeo.com/video/809312508?h=5964bb61ce`,
     classAssigment: ``},

    {className: 'OOPs -1',
     classLink: `https://player.vimeo.com/video/809888279?h=e947ebfe03`,
     classAssigment: ``},

    {className: 'OOPS - 2',
     classLink: `https://player.vimeo.com/video/810263885?h=bdba6bef1d`,
     classAssigment: ``},

    {className: 'OOPS - 3',
     classLink: `https://player.vimeo.com/video/810662518?h=b53bfb1345`,
     classAssigment: ``},
     
    {className: 'OOPS - 4',
     classLink: `https://player.vimeo.com/video/811045644?h=e16aa255ce`,
     classAssigment: ``},
     
    {className: 'OOPS - 5',
     classLink: `https://player.vimeo.com/video/811395944?h=f10a732b9d`,
     classAssigment: ``},
     
     
    {className: 'Soft skills session: Behavioural Questions',
     classLink: `https://player.vimeo.com/video/811560508?h=b881047dcc`,
     classAssigment: ``},
     
     
    {className: 'Linked List - I',
     classLink: `https://player.vimeo.com/video/812172376?h=0da8fbdef7`,
     classAssigment: ``},
     
     
     {className: 'Linked List - II',
     classLink: `https://player.vimeo.com/video/812560849?h=f2b7ff9456`,
     classAssigment: ``},
     
    {className: 'Linked List - III',
     classLink: `https://player.vimeo.com/video/812945645?h=5bc8edf1cb`,
     classAssigment: ``},

    {className: 'Linked List - IV',
     classLink: `https://player.vimeo.com/video/813674350?h=45f1ea5af6`,
     classAssigment: ``},
     
    {className: 'Linked List - V',
     classLink: `https://player.vimeo.com/video/813797909?h=56a250553b`,
     classAssigment: ``},
     
    {className: 'Contest Discotion.',
     classLink: `https://player.vimeo.com/video/813957207?h=d70c9a1b31`,
     classAssigment: ``},
]
    

for(let i=0; i < DSA2.length; i++)
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
      para1.innerText = DSA2[i].className;

    let para2 = document.createElement('p');
    para2.innerText = "Class Link ------>";
      
    let button = document.createElement('button');
     
    let anchor = document.createElement('a');
         anchor.href = DSA2[i].classLink;
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




