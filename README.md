# kjuraszek.pl-homepage
Simple HTML document with useless JavaScript which is used on my homepage: [kjuraszek.pl](https://kjuraszek.pl)

## Document consists of 
1. banner
2. div element:
    * filled with random chars in range (600,700),
    * and with anchor to my [portfolio](https://portfolio.kjuraszek.pl) placed in the middle

## Third party resources
* minified jQuery (served locally)
* 2 fonts from Google Fonts (CDN)

## What does the script do ?
1. generates rows filled with letters underneath the banner when document is ready
2. adds event handlers:
    * right mouse button
    * banner click
    * window resize
    * .letter mouseover and mouseout
    * mousewheel spin
3. changes randomly color of letters and background color of rows