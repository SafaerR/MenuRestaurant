$(document).ready(function(){
  var clique= false;
    $("#vegOn").on("click",function(){

      if(clique==false){

      
        $f= $("li.fish").parent().parent().detach();
          //f.detach();//on supp
          //$("li.fish").parent().parent().hide();////on cache tous les li de la classe fish avec leurs deux parents
  
          $("img").remove();
        
                  $("li.hamburger").text('portobello').parent().parent().prepend('<img src="/images/leaf.png" alt="vege"></img>');// on remplace le mot hamburger par Portobello

                  $("li").find(".meat").text("Tofu").parent().parent().prepend('<img src="/images/leaf.png" alt="vege"></img>');//On offre du tofu pour tous les plats `a base de viande et d’oeufs, sauf les hamburgers.
            

          //e.preventDefault();
        // $(this).off(e);
        clique=true;
      }
    });

    $("#restoreMe").click(function(){
      if(clique==true){

      
      $(".left_col").children().eq(1).prepend($f);
       // $("li.fish").parent().parent().show();///on montre tous les li de la classe fish avec leurs deux parents

        $("li.hamburger").text('hamburger');
        $("li.meat:first").text("lamb shoulder");
        $("li.meat").eq(1).text("proscuttio");
        $("li.meat").eq(2).text("eggs");
        $("li.meat").eq(3).text("chicken");
        $("li.meat").eq(4).text("grilled steak");
        $("li.meat").eq(5).text("roasted pork");
        $("li.meat").eq(6).text("charbroiled or blackened chicken");

        $("img").remove();//$("img").hide();
        
        clique=false;
       // $(this).off();
 
      }
    });
    
});//end doc ready
    