---
layout: post
title:  "ReCaptcha"
summary: "Adding Google recaptcha to google forms"
author: alex
date: '2021-02-21 14:35:23 +0530'
category: AWS
thumbnail: /assets/img/posts/code.jpg
keywords: devlopr jekyll, how to use devlopr, devlopr, how to use devlopr-jekyll, devlopr-jekyll tutorial,best jekyll themes
permalink: /blog/adding-recaptcha/
usemathjax: true
images: 
  - image: /assets/img/posts/car1.webp
  - image: /assets/img/posts/car2.webp
  - image: /assets/img/posts/car3.webp
---

## Adding Recaptcha to Contact Form

### Amazon services API Gateway - Lamda Function - SNS


https://www.google.com/recaptcha


Get a secret and site key on google/recaptcha.

For a serverless method subscribe to an SNS AWS notification

1. Create new topic `recaptcha`
2. `Create subscription -> Protocol: Email` with the email you wish to receive notifications from


[Contact form using Captcha](https://blog.agood.cloud/posts/2019/11/12/recaptcha-with-lambda-part-1/)


Create an AWS account, search for `lamda` - > `create function` -> from `blueprint` -> `helloword` in node.js  

<mark>Important!</mark> Inside the created function to add policies (SES policy)  

go to `Lamda -> function -> Configuration`  
Left side panel will have Permissions, Click on role name and add policies: choose SES policy or create custom policy


You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

or

```javascript
var a = 1;
var b = 2;
function sum (num1,num2){
  return num1+num2;
}
var result = sum(a,b);
```

