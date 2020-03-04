

 function hitung() {
    a=eval(form.angka1.value); 
    b=eval(form.angka2.value);
    c=eval(form.angka3.value);
    d=eval(form.angka4.value);
    e=eval(form.angka5.value); 
   
    
   average();
   highest();
   lowest();
   median();
    }
    
   function average(){
    rata = (a+b+c+d+e)/5 
    form.avg.value = rata;
   }
   function highest(){
       var number = [a,b,c,d,e]
       var maximal = Math.max.apply(Math, number);
       form.max.value = maximal;
   
   }
   
   function lowest(){
       var number = [a,b,c,d,e]
       var minimum = Math.min.apply(Math, number);
       form.min.value = minimum;
   }
   
   function median() {
     var number = [a,b,c,d,e]
     number.sort((a,b)=> a-b);
     var lowMiddle = Math.floor((number.length -1)/2);
     var highMiddle = Math.ceil((number.length -1)/2);
     var hasilmedian = (number[lowMiddle] + number[highMiddle]) /2;
     form.med.value = hasilmedian;
       
   }
   
   
   
   
        
    
    function reset() {
    form.angka1.value="";
    form.angka2.value="";
    form.angka3.value="";
    form.angka4.value="";
    form.angka5.value="";
    }