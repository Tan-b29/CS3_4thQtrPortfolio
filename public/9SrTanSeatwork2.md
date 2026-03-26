# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
- When i added the line of code, the sidebar moved 20 px down and 20 px to the right from its original position, Unlike static, relative positioning allows position shifting using the directions top left right or bottom.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative? 
- The footer stays at the bottom of the screen even when i scroll because it maintains a "fixed" hence the name, position at the bottom of the screen attaching the element to the screen, not the page layout.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
- The "main content" box moves 66px up and 200px left based on it's reference point, it no longer affects other elements.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
- Notice appears on top of the content because of the z index. It's kinda like layering in canva or in powerpoint presentations.The higher the z-index, the higher position.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    - To place the notice at the top-right corner of the content box, I would set the .content to position: relative and the .notice to position: absolute with top: 0 and right: 0. This makes the notice position itself relative to the content container.
    '''
    .content {
    position: relative;
    background: lightyellow;
    width: 300px;
    height: 200px;
    z-index: 1;
}

.notice {
    position: absolute;
    top: 0;
    right: 0;
    background: orange;
    padding: 10px;
    z-index: 2;
}
'''


    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    - When .content is set to position: relative, the notice stays correctly inside it and follows its position. When .content is changed to position: fixed, the content box stays in one place on the screen even when scrolling, and the notice also moves with it since it is inside the content.

    * What do you observe on about the effect of z-index on .notice and .content boxes?
   -  The z-index controls which element appears on top. When .notice has a higher z-index than .content, it appears in front. If the values are swapped, the content will cover the notice.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static is the default and does not allow movement. Relative allows movement from its original position but still keeps its space. Absolute removes the element from the layout and positions it based on the parent element. Fixed attaches the element to the screen and does not move when scrolling.


    b. How does absolute positioning depend on its parent element?

    Absolute positioning depends on the nearest parent that has a position aside than static. If no  parent exists, it will position itself relative to the entire page.
  

    c. How do you differentiate sticky from fixed (you can research on sticky)?
          Sticky positioning behaves like relative at first but becomes fixed when you scroll to a certain point. Fixed positioning stays in one place on the screen all the time, no matter how much scrolling the user does.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    I would use fixed positioning for a navigation bar so it stays visible while scrolling. I could use absolute positioning to place important labels like “Register Now” on top of images. I might also use sticky positioning for announcements so they stay visible as users scroll through the page.