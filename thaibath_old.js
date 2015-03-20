function ThaiBaht(Number)
{
	//ตัดสิ่งที่ไม่ต้องการทิ้งลงโถส้วม
	for (var i = 0; i < Number.length; i++)
	{
		Number = Number.replace (",", ""); //ไม่ต้องการเครื่องหมายคอมมาร์
		Number = Number.replace (" ", ""); //ไม่ต้องการช่องว่าง
		Number = Number.replace ("บาท", ""); //ไม่ต้องการตัวหนังสือ บาท
		Number = Number.replace ("฿", ""); //ไม่ต้องการสัญลักษณ์สกุลเงินบาท
	}
	//สร้างอะเรย์เก็บค่าที่ต้องการใช้เอาไว้
	var TxtNumArr = new Array ("ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ");
	var TxtDigitArr = new Array ("", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน");
	var BahtText = "";
	//ตรวจสอบดูซะหน่อยว่าใช่ตัวเลขที่ถูกต้องหรือเปล่า ด้วย isNaN == true ถ้าเป็นข้อความ == false ถ้าเป็นตัวเลข
	if (isNaN(Number))
	{
		return "ข้อมูลนำเข้าไม่ถูกต้อง";
	} else
	{
		//ตรวสอบอีกสักครั้งว่าตัวเลขมากเกินความต้องการหรือเปล่า
		if ((Number - 0) > 9999999.9999)
		{
			return "ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้";
		} else
		{
			//พรากทศนิยม กับจำนวนเต็มออกจากกัน (บาปหรือเปล่าหนอเรา พรากคู่เขา)
			Number = Number.split (".");
			//ขั้นตอนต่อไปนี้เป็นการประมวลผลดูกันเอาเองครับ แบบว่าขี้เกียจจะจิ้มดีดแล้ว อิอิอิ
			if (Number[1].length > 0)
			{
				Number[1] = Number[1].substring(0, 2);
			}
			var NumberLen = Number[0].length - 0;
			for(var i = 0; i < NumberLen; i++)
			{
				var tmp = Number[0].substring(i, i + 1) - 0;
				if (tmp != 0)
				{
					if ((i == (NumberLen - 1)) && (tmp == 1))
					{
						BahtText += "เอ็ด";
					} else
					if ((i == (NumberLen - 2)) && (tmp == 2))
					{
						BahtText += "ยี่";
					} else
					if ((i == (NumberLen - 2)) && (tmp == 1))
					{
						BahtText += "";
					} else
					{
						BahtText += TxtNumArr[tmp];
					}
					BahtText += TxtDigitArr[NumberLen - i - 1];
				}
			}
			BahtText += "บาท";
			if ((Number[1] == "0") || (Number[1] == "00"))
			{
				BahtText += "ถ้วน";
			} else
			{
				DecimalLen = Number[1].length - 0;
				for (var i = 0; i < DecimalLen; i++)
				{
					var tmp = Number[1].substring(i, i + 1) - 0;
					if (tmp != 0)
					{
						if ((i == (DecimalLen - 1)) && (tmp == 1))
						{
							BahtText += "เอ็ด";
						} else
						if ((i == (DecimalLen - 2)) && (tmp == 2))
						{
							BahtText += "ยี่";
						} else
						if ((i == (DecimalLen - 2)) && (tmp == 1))
						{
							BahtText += "";
						} else
						{
							BahtText += TxtNumArr[tmp];
						}
						BahtText += TxtDigitArr[DecimalLen - i - 1];
					}
				}
				BahtText += "สตางค์";
			}
			return BahtText;
		}
	}
}