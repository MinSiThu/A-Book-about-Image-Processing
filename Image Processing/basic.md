# Image Processing

An image is nothing more than a **X-Y** plane.

## Pixel

A Pixel is a smallest element of an image.

Each pixel has a specific value.

In an 8-bit gray scale image, the value of the pixel between 0 
and 255. 

```js
Calculation Pixel Value
Total no: of pixel = no of rows * no of cols
```

### Pixel Value

- Pixel value **zero** means there is no light. So, it is black pixel.
- Pixel value **255** means full white pxiel.

## Bpp - Bits per pixel

The number of different colors in an image depends on the bpp.

- One bit image - 2 colors(1, 0)
- Two bits image - 4 colors(00, 01, 10, 11)
- Three bits image - 8 colors (000, 001, 010, 011, 100, 101, 110, 111)
- n bits image - **2^n colors**

Color images are usually of the 24 bpp format, or 16 bpp.

### White color & Black Color

The color value of black color is always **0**.
 
The color value that represent **white** can be
```c
white color = 2^n - 1; 
```

## Image Size

The size of an image depends on 3 factors.

- Number of rows
- Number of cols
- Bits per pixel

To get size of an image
```js
size = rows * cols * bpp;
```

Assume a gray-scale image has 1024 rows & 1024 cols.
```
Size = rows * cols * bpp
     = 1024 * 1024 * 8 // (gray-scale is 8-bits)
     = 8388608 bits 
```

### 8388608 bits
- in byte, 8388608 / 8 = **1048576** bytes
- in KB, 1048576 / 1024 = **1024** KB
- in MB, 1024/ 1024 = **1**MB

## Types of Image

### Binary Image

It is based on 1bbp. Each pixel may be one of two states - 0 & 1 or black and white.

### Gray-Scale Image

It is based on 8bbp. Each pixel can have 256 pixel states from 0 to 255. 

0 is black.
255 is white.
254 is gray.

Format - PGM (Portable Gray Map)

### 16 bits color format

It has 65,536 different colors.
But it is quite complex than gray scale.
Each pixel is built upon **RGB** (Red, Green, Blue) and sometimes **RGBA** (Red, Green, Blue, Alpha)

It has many different distributions.

4 bits for Red, 4 bits for Green, 4 bits fro Blue, 4 bits for Alpha.

OR

5 bits for Red, 5 bits for Green, 5 bits fro Blue, 1 bits for Alpha.




