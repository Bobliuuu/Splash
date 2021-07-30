### Setup Code For Raspberry PI

First, install Tesseract OCR on the Raspberry PI to perform Optical Character Recognition. 
Open up the Linux terminal on PI ("i use arch btw")
Configure the Debian package first (to resolve any LAMP stack issues on PI)

```
sudo dpkg - -configure –a
```
Make sure you aren't the root user. 

Next, we can continue with the coveted command, 

```
sudo apt-get install tesseract-ocr
```

Type Y when prompted, and then wait for the install package. 

**Important**: Install Pillow first if you haven't already! 

```
pip install pillow
```

Use pip to unzip pytesseract: 

```
pip install pytesseract
```

Port in this code: 

```
from PIL import Image
img = Image.open ("path/to/img.type")
text = pytesseract.image_to_string(img, config="")
print(text)
```

Once this works, simply add a [https://datatofish.com/how-to-connect-python-to-sql-server-using-pyodbc/](SQL python driver) 