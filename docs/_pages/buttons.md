---
layout: page
title: Buttons
permalink: /buttons
edit-url: https://github.com/Forcir/design/blob/master/docs/_pages/buttons.md
---

## Default

Buttons have a number of class identifiers (all that produce the same end result).

You can invoke a button using `.btn` or `.button`.

<div class="button-container">
    <button type="button" class="button">Button</button>
</div>

{% highlight html %}
<button type="button" class="button">Button</button>
<button type="button" class="button button-sm">Button</button>
<button type="button" class="button button-small">Button</button>

<button type="button" class="btn">Button</button>
<button type="button" class="btn btn-sm">Button</button>
<button type="button" class="btn btn-small">Button</button>
{% endhighlight %}

## Primary / Blue

Primary buttons

<div class="button-container">
    <button type="button" class="button button-primary">Button</button>
</div>

{% highlight html %}
<button type="button" class="button button-primary">Button</button>
<button type="button" class="button button-sm button-primary">Button</button>
<button type="button" class="button button-small button-primary">Button</button>

<button type="button" class="btn btn-blue">Button</button>
<button type="button" class="btn btn-sm btn-blue">Button</button>
<button type="button" class="btn btn-small btn-blue">Button</button>
{% endhighlight %}

## Success / Green

<div class="button-container">
    <button type="button" class="button button-success">Button</button>
</div>

{% highlight html %}
<button type="button" class="button button-success">Button</button>
<button type="button" class="button button-sm button-success">Button</button>
<button type="button" class="button button-small button-success">Button</button>

<button type="button" class="btn btn-green">Button</button>
<button type="button" class="btn btn-sm btn-green">Button</button>
<button type="button" class="btn btn-small btn-green">Button</button>
{% endhighlight %}

## Danger / Red

<div class="button-container">
    <button type="button" class="button button-danger">Button</button>
</div>

{% highlight html %}
<button type="button" class="button button-danger">Button</button>
<button type="button" class="button button-sm button-danger">Button</button>
<button type="button" class="button button-small button-danger">Button</button>

<button type="button" class="btn btn-red">Button</button>
<button type="button" class="btn btn-sm btn-red">Button</button>
<button type="button" class="btn btn-small btn-red">Button</button>
{% endhighlight %}

## Disabled Buttons

<div class="button-container">
    <button type="button" class="button" disabled>Button</button>
    <button type="button" class="button button-blue" disabled>Button</button>
    <button type="button" class="button button-green" disabled>Button</button>
    <button type="button" class="button button-red" disabled>Button</button>
</div>

{% highlight html %}
<button type="button" class="button disabled">Button</button>
<button type="button" class="button button-blue disabled">Button</button>
<button type="button" class="button button-green disabled">Button</button>
<button type="button" class="button button-red disabled">Button</button>

<button type="button" class="button" disabled>Button</button>
<button type="button" class="button button-blue" disabled>Button</button>
<button type="button" class="button button-green" disabled>Button</button>
<button type="button" class="button button-red" disabled>Button</button>
{% endhighlight %}

## Button with Icon

<div class="button-container">
    <button type="button" type="button" class="button button-icon">
        <i class="icon ui-1_pencil"></i>
        <div>With Icon</div>
        <span>With Icon</span>
    </button>
</div>

{% highlight html %}
<button type="button" type="button" class="button button-icon">
    <i class="icon icon-pencil"></i>
    <div>With Icon</div>
    <span>With Icon</span>
</button>
{% endhighlight %}

## Button Groups

<div class="btn-group">
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
</div>

<div class="btn-group btn-group-lg" style="margin-top: 40px;">
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn">Button</button>
</div>

{% highlight html %}
<div class="btn-group">
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn btn-blue">Button</button>
     <button type="button" class="btn btn-green">Button</button>
     <button type="button" class="btn btn-red">Button</button>
</div>

<div class="btn-group btn-group-lg">
     <button type="button" class="btn">Button</button>
     <button type="button" class="btn btn-blue">Button</button>
     <button type="button" class="btn btn-green">Button</button>
     <button type="button" class="btn btn-red">Button</button>
</div>
{% endhighlight %}
