$(document).ready(() => 
{
	var temp1Span=$(".details:eq(0) span");
	var temp1B=$(".details:eq(0) b");
	var temp1T=$(".details:eq(0) button");
	$(".details:eq(0) button").on('click',function(){
		$(".details:eq(0) button").off();
		temp1Span.hide();
		temp1B.hide();

		temp1T.html("Update").on('click',function(){
			$(".details:eq(0) button").off();
			var input=document.getElementsByClassName("name");
			var val=input[0].value;
			//console.log(val);
			$(".details:eq(0) input").remove();
			temp1B.show();
			temp1Span.show();
			temp1Span.html(val);
			temp1T.html("Edit")
			
		});

		var type=$(".details:eq(0)").attr("data-type");
		//console.log(type);
		$(".details:eq(0)").append(
			$("<input>",{
				type:type,
				class:"name"
			})
		);


	});

	
	var temp2Span=$(".details:eq(1) span");
	var temp2B=$(".details:eq(1) b");
	var temp2T=$(".details:eq(1) button");
	$(".details:eq(1) button").on('click',function(){
		$(".details:eq(1) button").off();
		temp2Span.hide();
		temp2B.hide();
		temp2T.html("Update").on('click',function(){
			//$(".details:eq(0) button").off();
			var input=document.getElementsByClassName("surname");
			var val=input[0].value;
			//console.log(val);
			$(".details:eq(1) input").hide();
			temp2B.show();
			temp2Span.show();
			temp2Span.html(val);
			temp2T.html("Edit")
		});
		var type=$(".details:eq(1)").attr("data-type");
		//console.log(type);
		$(".details:eq(1)").append(
			$("<input>",{
				type:type,
				class:"surname"
			})
		);
	});


	var temp3Span=$(".details:eq(2) span");
	var temp3B=$(".details:eq(2) b");
	var temp3T=$(".details:eq(2) button");
	$(".details:eq(2) button").on('click',function(){
		$(".details:eq(2) button").off();
		temp3Span.hide();
		temp3B.hide();
		temp3T.html("Update").on('click',function(){
			//$(".details:eq(0) button").off();
			var input=document.getElementsByClassName("email");
			var val=input[0].value;
			//console.log(val);
			$(".details:eq(2) input").hide();
			temp3B.show();
			temp3Span.show();
			temp3Span.html(val);
			temp3T.html("Edit")
		});
		var type=$(".details:eq(2)").attr("data-type");
		//console.log(type);
		$(".details:eq(2)").append(
			$("<input>",{
				type:type,
				class:"email"
			})
		);
	});


	var temp4Span=$(".details:eq(3) span");
	var temp4B=$(".details:eq(3) b");
	var temp4T=$(".details:eq(3) button");
	$(".details:eq(3) button").on('click',function(){
		$(".details:eq(3) button").off();
		temp4Span.hide();
		temp4B.hide();
		temp4T.html("Update").on('click',function(){
			//$(".details:eq(0) button").off();
			var input=document.getElementsByClassName("date");
			var val=input[0].value;
			//console.log(val);
			$(".details:eq(3) input").hide();
			temp4B.show();
			temp4Span.show();
			temp4Span.html(val);
			temp4T.html("Edit")
		});
		var type=$(".details:eq(3)").attr("data-type");
		//console.log(type);
		$(".details:eq(3)").append(
			$("<input>",{
				type:type,
				class:"date"
			})
		);
	});
});
