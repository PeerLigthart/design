---
layout: page
title: Patterns
permalink: /patterns
---

## Default Image

<img src="https://patterns.forcir.com/v1/patterns" alt="patterns" height="184px" />

{% highlight html %}
<img src="https://patterns.forcir.com/v1/{name}" alt="{name}" />
{% endhighlight %}

## CSS Reference

<style type="text/css">
    .pattern-canvas {
        background-image: url('https://patterns.forcir.com/v1/{name}');
        height: 150px;
    }
</style>
<div class="pattern-canvas" style="background-image: url('https://patterns.forcir.com/v1/patterns');"></div>

{% highlight css %}
.pattern-canvas {
    background-image: url('https://patterns.forcir.com/v1/{name}');
}
{% endhighlight %}
