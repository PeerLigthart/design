---
layout: page
title: Form Controls
permalink: /forms
---

All inputs fields **must** be wrapped in a `field-wrapper` class with an assigned `<label>`

## Standard Text Input

<div class="field-wrapper">
    <label for="username">Username</label>
    <input type="text" name="username" class="form-control" placeholder="Username" autocomplete="off">
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="username">Username</label>
    <input type="text" name="username" class="form-control" placeholder="Username">
</div>
{% endhighlight %}

## Email Input

<div class="field-wrapper">
    <label for="email">Email</label>
    <input type="email" name="email" class="form-control" placeholder="Email" autocomplete="off">
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="email">Email</label>
    <input type="email" name="email" class="form-control" placeholder="Email" autocomplete="off">
</div>
{% endhighlight %}

## Password Input

<div class="field-wrapper">
    <label for="password">Password</label>
    <input type="password" name="password" class="form-control" placeholder="Password" autocomplete="off">
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="password">Password</label>
    <input type="password" name="password" class="form-control" placeholder="Password" autocomplete="off">
</div>
{% endhighlight %}

## Select Menu

<div class="field-wrapper">
    <label for="month"></label>
    <select name="month" class="form-control">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
    </select>
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="month"></label>
    <select name="month" class="form-control">
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
    </select>
</div>
{% endhighlight %}

## Credit Card Inputs

Taking in a valid credit card safely, securely, and with proper validation is extremely important. The purpose of these inputs (invoked by the `cc-*` classes) is to allow the conversion process to be as painless as possible. Pointing out any issues with the card inputs there may be.

<p class="btn-group btn-group-sm" style="margin-bottom: 40px">
    <button class="btn custom-cc-number" data-number="371449635398431" data-cvc="1234" data-expiry="09 / 16">Amex</button>
    <button class="btn custom-cc-number" data-number="30569309025904" data-cvc="321" data-expiry="06 / 16">Diners Club</button>
    <button class="btn custom-cc-number" data-number="6011111111111117" data-cvc="223" data-expiry="03 / 17">Discover</button>
    <button class="btn custom-cc-number" data-number="3530111333300000" data-cvc="400" data-expiry="11 / 16">JCB</button>
    <button class="btn custom-cc-number" data-number="5555555555554444" data-cvc="543" data-expiry="05 / 16">Mastercard</button>
    <button class="btn custom-cc-number" data-number="4111111111111111" data-cvc="712" data-expiry="02 / 17">Visa</button>
</p>

<div class="field-wrapper">
    <label for="cc-number">Credit Card Number</label>
    <input type="tel" name="cc-number" class="form-control cc-number" placeholder="Credit Card Number" autocomplete="off">
</div>

<div class="field-wrapper">
    <label for="cc-cvc">Credit Card CVC</label>
    <input type="tel" name="cc-cvc" class="form-control cc-cvc" placeholder="Credit Card CVC" autocomplete="off">
</div>

<div class="field-wrapper">
    <label for="cc-expiry">Credit Card Expiry</label>
    <input type="tel" name="cc-expiry" class="form-control cc-expiry" placeholder="Credit Card Expiry" autocomplete="off">
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="cc-number">Credit Card Number</label>
    <input type="tel" name="cc-number" class="form-control cc-number" placeholder="Credit Card Number" autocomplete="off">
</div>

<div class="field-wrapper">
    <label for="cc-cvc">Credit Card CVC</label>
    <input type="tel" name="cc-cvc" class="form-control cc-cvc" placeholder="Credit Card CVC" autocomplete="off">
</div>

<div class="field-wrapper">
    <label for="cc-expiry">Credit Card Expiry</label>
    <input type="tel" name="cc-expiry" class="form-control cc-expiry" placeholder="Credit Card Expiry" autocomplete="off">
</div>
{% endhighlight %}

## Input Field with Button

<div class="field-wrapper field-group">
    <label for="field-with-button">Field with Button</label>
    <input type="text" name="field-with-button" class="form-control" placeholder="Field with Button" autocomplete="off">
    <button type="button" class="button">Button</button>
</div>

{% highlight html %}
<div class="field-wrapper field-group">
    <label for="field-with-button">Field with Button</label>
    <input type="text" name="field-with-button" class="form-control" placeholder="Field with Button" autocomplete="off">
    <button type="button" class="button">Button</button>
</div>
{% endhighlight %}

## Textarea

<div class="field-wrapper">
    <label for="comments">Comments</label>
    <textarea type="text" name="comments" class="form-control" placeholder="Comments" autocomplete="off"></textarea>
</div>

{% highlight html %}
<div class="field-wrapper">
    <label for="comments">Comments</label>
    <textarea type="text" name="comments" class="form-control" placeholder="Comments" autocomplete="off"></textarea>
</div>
{% endhighlight %}

## URL AutoFill

<a href="/forms?autofill=true&username=Example%20Username&email=admin%40forcir.com&month=April&cc-number=4111111111111111&cc-cvc=712&cc-expiry=02/17&field-with-button=Awesome!&comments=Textareas%20too,%20yep!" class="btn">Try it out!</a>

<a href="/forms?autofill=true&username=Example%20Username&email=admin%40forcir.com&month=April&cc-number=4111111111111111&cc-cvc=712&cc-expiry=02/17&field-with-button=Awesome!&comments=Textareas%20too,%20yep!&cleanURL=true" class="btn">Try it out (Cleans URL)!</a>
