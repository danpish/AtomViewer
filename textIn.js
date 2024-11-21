class textIn
{
	constructor()
	{
		this.text = "";
		this.x;
		this.y;
		this.Width;
		this.Height;
		this.enabled;
	}

	draw()
	{
		push();
		if(this.enabled)
		{
			fill("white");
		}
		else
		{
			fill("gray");
		}
		rect(this.x, this.y, this.Width, this.Height);
		textSize(10);
		fill('black');
		text(this.text, this.x + 1, this.y + this.Height / 2 + this.Height / 4);
		pop();
	}

	clicked(X, Y)
	{
		if(X > this.x && X < this.x + this.Width && Y > this.y && Y < this.y + this.Height)
		{
			this.enabled = true;
			//console.log('yes it did');
		}
		else
		{
			this.enabled = false;
			//console.log('i mean you called it');
		}
	}

	typed(charIn)
	{
		if(this.enabled)
		{
			this.text = this.text + charIn;
			//console.log(this.text);
		}		
	}

	delete()
	{
		if(this.enabled)
		{
			this.text = this.text.slice(0,-1);
		}
	}
}

class buttonl
{
	constructor()
	{
		this.lable;
		this.x;
		this.y;
		this.Width;
		this.Height;
	}
	draw()
	{
		push();
		fill("white");
		rect(this.x, this.y, this.Width, this.Height);
		textSize(10);
		fill('black');
		text(this.lable, this.x + 5, this.y + 15);
		pop();
	}

	clicked(X, Y)
	{
		if(X > this.x && X < this.x + this.Width && Y > this.y && Y < this.y + this.Height)
		{
			return true;
		}
	}
}