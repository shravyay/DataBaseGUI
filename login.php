<?php include('include/home/header.php'); ?>	
	<section id="form"><!--form-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form"><!--login form-->

 
	<div class="error"></div>	


						<h2>Administrative Login</h2>
                                                <form action="admin.php" method="POST">
                            <input type="text" name="uname" placeholder="username" id="username" required/>
                            <input type="password" name="pwd" placeholder="password" id="password" required/>
                            <input type="submit" value="submit" class="btn btn-default" id="login">   
                                                </form>
					</div><!--/login form-->
				</div>
			</div>
		</div>
	</section><!--/form-->
	
	
   
    
<?php include('include/home/footer.php'); ?>
