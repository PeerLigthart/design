---
layout: page
title: Tags
permalink: /tags
---

Tags pretty much take care of themselves. They *must* be wrapped in a `tag-container` class, and then each tag invoked with a `tag` class on the element. Support for up to 100 tags changing colours gradually, anything after that just keeps the final blue.

All come with their own slightly adjusted hover-state colours.

<p class="btn-group btn-group-sm">
    <button type="button" type="button" class="button button-green button-small button-icon add-new-tag">
        <i class="icon icon-plus"></i>
        <div>Add New Tag</div>
        <span>Add New Tag</span>
    </button>
    <button type="button" type="button" class="button button-red button-small button-icon remove-tag">
        <i class="icon icon-x"></i>
        <div>Remove 5 Tag</div>
        <span>Remove 5 Tag</span>
    </button>
</p>

<script>
    $('.add-new-tag:not([disabled])').click(function(e) {
        $('.tag-container').append('<a class="tag" href="#!">Tag</a>');
        if ($('.tag').length >= 100) {
            $(this).attr('disabled', true);
        }
        $('.remove-tag').attr('disabled', false);
    });

    $('.remove-tag').click(function(e) {
        $('.tag:last-child').remove();
        $('.tag:last-child').remove();
        $('.tag:last-child').remove();
        $('.tag:last-child').remove();
        $('.tag:last-child').remove();
        if ($('.tag').length == 0) {
            $(this).attr('disabled', true);
        }
        $('.add-new-tag').attr('disabled', false);
    });
</script>

<div class="tag-container">
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
</div>

{% highlight html %}
<div class="tag-container">
    <a class="tag" href="#!">Tag</a>
    <a class="tag" href="#!">Tag</a>
</div>
{% endhighlight %}
