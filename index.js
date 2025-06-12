// to clear the result 
    function clr(){
        previous();
        document.getElementById("result").value="";
    }
// to clear the result with the history
    function clrAll(){
        previous();
        document.getElementById("result").value="";
        document.getElementById("history").value = "";
    }

// to delete the last value
    // function del(){
    //     let lastdig = document.getElementById("result").value;
    //     lastdig.

    // }




// display function
    function display(val){
        document.getElementById("result").value += val;
    }    

// equate function
let y; // declared here globally to access it from previous func 

    function equate() {
        let x =  document.getElementById("result").value ;
         y = eval(x);
        document.getElementById("result").value =y;
        // document.getElementById("result").value =` = `+ y;

    }   


// to show previous result
    
    function previous(){
        document.getElementById("history").value = y;
    }