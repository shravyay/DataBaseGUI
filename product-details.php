<?php include('include/home/header.php'); ?>

<?php
	
	$prodID = $_GET['prodid'];

	if(!empty($prodID)){
		$sqlSelectSpecProd = mysqli_query1("select * from products where id = '$prodID'") or die(mysqli_error());
		$getProdInfo = mysqli_fetch_array($sqlSelectSpecProd);
		$prodname= $getProdInfo["Product"];
		$prodcat = $getProdInfo["Category"];
		$prodprice = $getProdInfo["Price"];
		$proddesc = $getProdInfo["Description"];
		$prodimage = $getProdInfo["imgUrl"];
				}
?>
	
	<section>
		<div class="container">
			<div class="row">
				<?php include('include/home/sidebar.php'); ?>
				
                
				<div class="col-sm-9 padding-right">
					<div class="product-details"><!--product-details-->
						<div class="col-sm-5">
							<div class="view-product">
                            
						
							<img src="reservation/img/products/<?php echo $prodimage; ?>" />	
                                
							</div>
						</div>
						<div class="col-sm-7">
							<div class="product-information"><!--/product-information-->
							<h2 class="product"><?php echo $prodname; ?></h2>
								<p>Category: <?php echo $prodcat; ?></p>
                                                                <p><b>Description: </b><?php echo $proddesc; ?></p>
                                                                <?php if($prodcat==='Laptops'){ ?>
                                                                RAM-<select id="ram_val_laptops">
                                                                    <option value="4">4 GB</option>
                                                                    <option value="8">8 GB</option>
                                                                    <option value="16">16 GB</option>
                                                                </select><br>
                                                                Hard Disk-<select id="hdd_val_laptops">
                                                                    <option value="250">250 GB</option>
                                                                    <option value="500">500 GB</option>
                                                                    <option value="1000">1 TB</option>
                                                                    <option value="2000">2 TB</option>
                                                                </select>
                                                                
                                                                <?php }else{ ?>
                                                                RAM-  <select id="ram_val_mobile">
                                                                    <option value="2">2 GB</option>
                                                                    <option value="4">4 GB</option>
                                                                    <option value="8">8 GB</option>
                                                                </select>
                                                                 Internal Memory-
                                                                 <select id="hdd_val_mobile">
                                                                    <option value="16">16 GB</option>
                                                                    <option value="24">24 GB</option>
                                                                    <option value="32">32 GB</option>
                                                                    <option value="64">64 TB</option>
                                                                </select>
                                                                <?php }?>
                                                                 <br><input type="hidden" class="naprice" value="<?php echo $prodprice; ?>">
                                                                 <h2>Price: $ <span class="price" style="color: #FC9A11"><?php echo $prodprice; ?></span></h2>

                                <br>
                                
                                <a class="btn btn-default add-to-cart" id="add-to-cart"><i class="fa fa-shopping-cart"></i>Add to Cart</a>
                                <p class="info hidethis" style="color:red;"><strong>Product Added to Cart!</strong></p>
								
								<p><b>Contact Info:</b> 1234567</p>
								<p><b>Email:</b> email@domain.com</p>
								
							</div><!--/product-information-->
						</div>
					</div><!--/product-details-->
					
				</div>
			</div>
		</div>
		</div>
	</section>
	
	<?php include('include/home/footer.php'); ?>