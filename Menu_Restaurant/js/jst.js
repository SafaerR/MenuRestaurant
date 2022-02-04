$(document).ready(function(){
    $f = $("li.fish");
     $(".left_col").children().not("h4");
     $(".menu_list").parent().slice(1, 3);
     $(".menu_list").parents().filter("div");
     $("li").first();
     $(".menu_list li").eq(3);
     $(".menu_list").children().last();
     var deleted = [];
        var v =false;
        //$f = $(".fish").parent().parent().detach();
     
        $("button#vegOn").click(function(){
            if (v==false){
                
                $(".hamburger").replaceWith("<li class='portbelo'><em>Portobello Musherone</em>");
                $(".meat").before("<li class='tofu'><em>Tofu</em></li>");
                $(".tofu").parent().parent().addClass("veg_leaf");
                 $m = $(".meat").detach();
                deleted.push(($f).parent().parent().detach());
                // ($f).parent().parent().detach();
                 v=true;
            }
            
        }); //end button
        $("#restoreMe").click(function(){
            if (v==true){
                $(".portbelo").replaceWith("<li class='hamburger'><em>Hamburger</em>");
                $(".menu_entrees li").first().before($f);
                $(".tofu").each(function(i){
                    $(this).after($m[i]);
                });
                
                $(".tofu").parent().parent().removeClass("veg_leaf");
                $(".tofu").remove();
            
                v=false;
                // alert(v);
                //$(".meat").before("<li class='tofu'><em>Tofu</em></li>");
                // $m = $(".meat").detach();
                // $(".menu_list").children().first();
     
            }
            
        }); //end button
        });//end doc ready