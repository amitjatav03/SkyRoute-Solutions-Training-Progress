# Task 1 - Introduction to HTML

## What is HTML?
- **HTML** stands for **HyperText Markup Language**.
- It is used to label and structure elements on a webpage.

### Key Concepts:
- **HTML**: Responsible for labeling and structuring content.
- **CSS**: Handles styling and appearance.
- **JavaScript**: Adds logic and interactivity.

---

## HTML Overview
HTML is a markup language that defines the structure of a website. It labels content such as:
- Buttons
- Paragraphs
- Headings
- Inputs
- Header and Footer sections

A webpage can be thought of as the **skeleton** or **foundation**, and HTML provides this structure.

---

## Basic HTML Syntax

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        Hello, World! This is my first HTML page.
    </body>
</html>
```

### Explanation:
- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element where all HTML content is written.
- `<head>`: Contains metadata, SEO-related data, and the title of the page.
- `<body>`: Contains the visible content of the webpage.

---

## HTML Tags
HTML uses tags to define elements. Tags can be:
- **Headings**: `<h1>`, `<h2>`, `<h3>`, etc.
- **Paragraphs**: `<p>`
- **Sections**: `<section>`, `<article>`
- **Forms**: `<form>`
- **Root**: `<html>`

### Opening and Closing Tags:
- **Opening Tag**: `<html>`
- **Closing Tag**: `</html>`

---

## HTML Elements
An HTML element consists of:
- **Opening Tag**: `<div>`
- **Content**: `content...`
- **Closing Tag**: `</div>`

### Example:
```html
<div>Content goes here</div>
```

---

## Head Tag
The `<head>` tag contains:
- **Metadata**: Data that describes the HTML document.
- **SEO Data**: Information for search engine optimization.
- **Title**: The title of the webpage.

> **Note**: Metadata refers to data that describes or provides information about the HTML document itself.

---

## Body Tag
The `<body>` tag contains all the visible content of the webpage. It allows users to:
- View the content.
- Interact with the elements.

---

## Comments in HTML
- Comments are not rendered by the browser.
- They are used to describe the structure or improve readability.

### Example:
```html
<!-- This is a comment -->
```

---

## Documentation
For more information, refer to:
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools - HTML](https://www.w3schools.com/html/)

---


# Task 2 - Introduction to Tags

## Types of HTML Tags

### 1. Semantic Tags
Tags that give meaning to the content:

#### Heading Tags (`<h1>` to `<h6>`)
```html
<h1>This is my First Heading</h1>
<h2>This is my Second Heading</h2>
```
- Used for document headings
- `<h1>` is most important, `<h6>` least important

#### Paragraph Tag (`<p>`)
```html
<p>This is my first paragraph</p>
```
- Used for text paragraphs
- Adds automatic spacing before and after content

#### Anchor Tag (`<a>`)
```html
<a href="https://www.google.com">Click here</a>
```
- Creates hyperlinks
- `href` attribute specifies the destination URL

#### List Tags
**Unordered List (`<ul>`)**
```html
<ul>
    <li>Maggi</li>
    <li>Kurkure</li>
    <li>Lays</li>
</ul>
```

**Ordered List (`<ol>`)**
```html
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
</ol>
```

#### Table Tags
```html
<table border="1">
    <tr>
        <td>Sr. no</td>
        <td>Name</td>
    </tr>
    <tr>
        <td>1</td>
        <td>John</td>
    </tr>
</table>
```
- `<table>`: Creates table
- `<tr>`: Table row
- `<td>`: Table data cell

#### Image Tag (`<img>`)
```html
<img width="200px" height="300px" src="image-url" alt="nature">
```
- Self-closing tag
- Required attributes: `src`, `alt`
- Optional: `width`, `height`

### 2. Structural Tags
- `<html>`: Root element
- `<head>`: Document metadata
- `<body>`: Document content
- `<header>`: Page header
- `<main>`: Main content
- `<nav>`: Navigation links
- `<aside>`: Sidebar content
- `<article>`: Independent content
- `<section>`: Thematic grouping
- `<footer>`: Page footer

### 3. Formatting Tags
```html
<p>This is <b>bold</b> text</p>
<p>This is <i>italic</i> text</p>
<p>This is <u>underlined</u> text</p>
<p>This is <strong>strong</strong> text</p>
<p>This is <em>emphasized</em> text</p>
<p>This is <mark>marked</mark> text</p>
<p>This is <s>strikethrough</s> text</p>
<p>This is <small>small</small> text</p>
<p>2<sup>5</sup> for superscript</p>
<p>H<sub>2</sub>O for subscript</p>
```

### 4. Special Purpose Tags
#### Pre-formatted Text (`<pre>`)
```html
<pre>
    This text maintains
    its formatting and
    whitespace
</pre>
```

#### Code Block (`<code>`)
```html
<code>
    <pre>
        #include <iostream>
        int main() {
            return 0;
        }
    </pre>
</code>
```

### 5. Self-closing Tags
- `<br/>`: Line break
- `<img/>`: Image
- `<input/>`: Form input
- `<meta/>`: Metadata
- No closing tag required