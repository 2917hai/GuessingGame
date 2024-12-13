

let ok=()=>

{ 
let para1=document.querySelector(".box1");
let para2=document.querySelector(".box2");
let para3=document.querySelector(".box3");
let para4=document.querySelector(".box4");
let para5=document.querySelector(".box5");
let para6=document.querySelector(".box6");
     dice =Math.trunc(Math.random()*6);
    if(dice==1)
    {

        para2.style.display="none";
        para3.style.display="none";
        para4.style.display="none";
        para5.style.display="none";
        para6.style.display="none";
        para1.style.display="block";
    }
    if(dice==2)
        {
            para6.style.display="none";
            para5.style.display="none";
            para4.style.display="none";
            para3.style.display="none";
            para1.style.display="none";
            para2.style.display="block";
        }
        if(dice==3)
            {
                para1.style.display="none";
                para2.style.display="none";
                para4.style.display="none";
                para5.style.display="none";
                para6.style.display="none";
                para3.style.display="block";
               
            }
            if(dice==4)
                {
                    para1.style.display="none";
                    para2.style.display="none";
                    para3.style.display="none";
                    para5.style.display="none";
                    para6.style.display="none";
                    para4.style.display="block";
                  
                }
                if(dice==5)
                    {
                        para1.style.display="none";
                        para2.style.display="none";
                        para3.style.display="none";
                        para4.style.display="none";
                        para6.style.display="none";
                        para5.style.display="block";
                       
                    }
                    if(dice==6)
                        {
                            para1.style.display="none";
                            para2.style.display="none";
                            para3.style.display="none";
                            para4.style.display="none";
                            para5.style.display="none";
                            para6.style.display="block";
                          
                        }
                        else
                        {

                        }
                    }
