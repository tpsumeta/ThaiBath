# ThaiBath
javascript แปลงค่าเงินจากตัวเลขเป็นตัวหนังสือ

## ตัวอย่างโค้ด


	<script type="text/javascript">
		function myFunction(){
			var monney = document.getElementById("number").value;
			var thaibath = ArabicNumberToText(monney);
			document.getElementById("text").innerHTML  = thaibath;
		}
		function myFunction2(){
			var monney = document.getElementById("number").value;
			var thaibath = ThaiNumberToText(monney);
			document.getElementById("text").innerHTML  = thaibath;
		}
	</script>
