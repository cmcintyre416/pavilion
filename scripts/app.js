
   
   //Disable ability to click on buttons when menu is open.
        //Go get hamburger. Add event listener. If label check is true then disable button. 
    let hamburger = document.getElementById('hamburgerCheck');

    hamburger.addEventListener('click', determineIfChecked);

    const burgerList = document.getElementById('burgerList');

    //make sure list is not visible on page load

    function determineIfChecked() {
        let checked = hamburger.checked;

        const getTicksTop = document.getElementById('getTicksTop');
        
        if(checked === true){
            setTimeout(function(){          burgerList.style.display='block'; 
            }, 200);
        
            setTimeout(function(){
            getTicksTop.style.display='none';
            }, 200);
            
        } else {
            getTicksTop.style.display='block';
            burgerList.style.display='none';
        }

        console.log(checked);

    }


    let menuItem = document.getElementById('burgerList');

    menuItem.addEventListener('click', closeMenu);

    function closeMenu(){
        hamburger.checked = false;

        determineIfChecked();
    }

    const ticketBottom = document.getElementById('getTicksBottom');

    const ticketTop = document.getElementById('getTicksTop');

    ticketTop.addEventListener('click', loadTicketing);
    ticketBottom.addEventListener('click', loadTicketing);

    function loadTicketing(e) {
        e.preventDefault();
        $u.open('FBK9QT', )
    }

    


