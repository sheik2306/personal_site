---
layout: post
title:  "Added Latex Support"
summary: Writing Equations using Latex
author: alex
date: '2020-10-24 10:35:23 +0530'
category: jekyll
thumbnail: /assets/img/posts/code.jpg
keywords: devlopr jekyll, how to use devlopr, devlopr, how to use devlopr-jekyll, devlopr-jekyll tutorial,best jekyll themes
usemathjax: true
permalink: /blog/added-latex-equations-support/
---


## Using math Latex support in blog post. liquid syntax: 

##### Add in file header :

```
---
usemathjax: true
---
```

Now latex works as normally as such :

`$$E=mc^2$$`


* `$$mean = \frac{\displaystyle\sum_{i=1}^{n} x_{i}}{n}$$`

$$mean = \frac{\displaystyle\sum_{i=1}^{n} x_{i}}{n}$$

* `k_{n+1} = n^2 + k_n^2 - k_{n-1}` to write

$$k_{n+1} = n^2 + k_n^2 - k_{n-1}$$

