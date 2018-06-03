$(function(){
   
    //when add to cart is clicked
    $('#add-to-cart').on('click',function(){
        $(this).siblings('.info').fadeIn(700).fadeOut(1000);
        var price = $(this).siblings('p').children('.price').html();
        var product = $(this).siblings('.product').html();
        $.post('cart/data.php?q=addtocart',
               {
                    price:price,
                    product:product,
                    qty:1
               }
        );
    });
    
    $('#ram_val_laptops').change(function () {
        var ram_val = this.value;
        
        var price = $('.naprice').val();
        
        price=parseInt(price);
        
        if(ram_val==4){
            price=price;
        }
        if(ram_val==8){
            price=price+55;
        }
        if(ram_val==16){
            price=price+65;
        }
        //alert(ram_val+"  "+price);
        //$('.price').html(price);
        var hdd_val=$('#hdd_val_laptops').val();
        
        if(hdd_val==250){
            price=price;
        }
        if(hdd_val==500){
            price=price+60;
        }
        if(hdd_val==1000){
            price=price+75;
        }
	if(hdd_val==2000){
            price=price+95;
        }
        //alert(hdd_val+"  "+price);
        $('.price').html(price);
        
    });
    $('#ram_val_mobile').change(function () {
        var ram_val = this.value;
        
        var price = $('.naprice').val();
        
        price=parseInt(price);
        if(ram_val==2){
            price=price;
        }
        if(ram_val==4){
            price=price+35;
        }
        if(ram_val==8){
            price=price+50;
        }
        //alert(ram_val+"  "+price);
      //  $('.price').html(price);
      var hdd_val=$('#hdd_val_mobile').val();
      if(hdd_val==16){
            price=price;
        }
        if(hdd_val==24){
            price=price+25;
        }
        if(hdd_val==32){
            price=price+45;
        }
	if(hdd_val==64){
            price=price+70;
        }
        //alert(hdd_val+"  "+price);
        $('.price').html(price);
    });
    $('#hdd_val_laptops').change(function () {
        var hdd_val = this.value;
        
        var price = $('.naprice').val();
        
        price=parseInt(price);
        
        if(hdd_val==250){
            price=price;
        }
        if(hdd_val==500){
            price=price+60;
        }
        if(hdd_val==1000){
            price=price+75;
        }
	if(hdd_val==2000){
            price=price+95;
        }
        //alert(hdd_val+"  "+price);
        //$('.price').html(price);
        var ram_val=$('#ram_val_laptops').val();
        if(ram_val==4){
            price=price;
        }
        if(ram_val==8){
            price=price+55;
        }
        if(ram_val==16){
            price=price+65;
        }
        //alert(ram_val+"  "+price);
        $('.price').html(price);
    });
    $('#hdd_val_mobile').change(function () {
        var hdd_val = this.value;
        
        var price = $('.naprice').val();
        
        price=parseInt(price);
        if(hdd_val==16){
            price=price;
        }
        if(hdd_val==24){
            price=price+25;
        }
        if(hdd_val==32){
            price=price+45;
        }
	if(hdd_val==64){
            price=price+70;
        }
        //alert(hdd_val+"  "+price);
        var ram_val=$('#ram_val_mobile').val();
        if(ram_val==2){
            price=price;
        }
        if(ram_val==4){
            price=price+35;
        }
        if(ram_val==8){
            price=price+50;
        }
        //alert(ram_val+"  "+price);
      
        $('.price').html(price);
    });
    //remove product from cart
    $('.removeproduct').on('click',function(){
        $(this).parent().parent().fadeOut(300);
        var id = $(this).siblings('.proID').val();
        $.post('cart/data.php?q=removefromcart',
               {
                    proID:id
               }
        );

    });    
    //set time
    setInterval(function() {
        $.get("cart/data.php?q=countcart",function(data){
            $('.badge').html(data);
        });
        
        $.get("cart/data.php?q=countorder",function(data){
            $('.order-admin-badge').html(data);
        });
        
        $.get("cart/data.php?q=countproducts",function(data){
            $('.products-admin-badge').html(data);
        });
        
        $.get("cart/data.php?q=countcategory",function(data){
            $('.category-admin-badge').html(data);
        });
        
    }, 500);
    
    //confirmation
    $('.confirm').on('click',function(){
        var confirmation = confirm("Are you sure?");
        if(!confirmation){
            return false;   
        }
    });
    
    //login
    $('#login').on('click',function(){
        var username = $('#username').val(); 
        var password = $('#password').val(); 
        
        $.post('cart/data.php?q=verify',
               {
                   username:username,
                   password:password
               },
               function(data){
                    if(data == 1){                        
                        $('.error').removeClass().addClass('alert alert-success').html('<i class="fa fa-unlock"></i> Logging in...'); 
                        setInterval(function(){
                            window.location = 'admin.php';
                        },1000);
                    }else{
                        $('.error').addClass('alert alert-danger').html('Username/Password is Incorrect!');
                        $('#username').val('');
                        $('#password').val(''); 
                    }
               });
    });
    $('#online').on('click',function(){
    
        $('#payment').load('include/home/pay.html');
    });
});
