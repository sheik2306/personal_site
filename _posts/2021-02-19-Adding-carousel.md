---
layout: post
title:  "Jekyll Carousel with parameters "
summary: "How to add parameters to an include file"
author: alex
date: '2021-02-19 14:35:23 +0530'
category: jekyll
thumbnail: /assets/img/posts/code.jpg
keywords: jekyll carousel include, jekyll
permalink: /blog/adding-carousel/
usemathjax: true
images: 
  - image: /assets/img/posts/car1.webp
  - image: /assets/img/posts/car2.webp
  - image: /assets/img/posts/car3.webp
---


### How to make a re-usable carousel with post parameters

1. Add   [Carousel file](https://jekyllcodex.org/without-plugin/slider/) inside _includes folder

In the `fontmatter` of the post markdown file ( header ) add the images to display.

```javascript
---
images: 
  - image: /assets/img/posts/1.png
  - image: /assets/img/posts/2.png
  - image: /assets/img/posts/3.png
---
```

2. Next include the html carousel where the post content is accessible.

```
{% raw %}
  {% assign images = {{page.images}} %}
    {% if images %}
    {% include carousel.html height="50" unit="%" duration="7" images= images %}
  {% endif %}`
{% endraw %}
```

This will include an `images` variable usable inside the carousel.html

`carousel.html`

```
{% raw %}
   {% for item in include.images %}
{% endraw %}
```

`Change all occurences of site.data.carousel to include.images`

Done!
