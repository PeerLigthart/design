---
layout: page
title: Sortables
permalink: /sortables
---

<div class="sortables">
    <div class="sort-controls">
        <button class="button button-small sort-filter" data-filter="all">View All</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-1">Sort One</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-2">Sort Two</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-3">Sort Three</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-4">Sort Four</button>
        <button class="button button-small sort-filter" data-filter=".another-category">Varied Sort</button>
    </div>

    <div class="sort-container">
        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3"></div>
        <div class="sort-item sort-category-4 another-category"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4 another-category"></div>
    </div>
</div>

<script type="text/javascript">
    $('.sortables').sortables({
        selectors: {
            filter: '.sort-filter'
        }
    });
</script>

{% highlight html %}

<div class="sortables">
    <div class="sort-controls">
        <button class="button button-small sort-filter" data-filter="all">View All</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-1">Sort One</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-2">Sort Two</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-3">Sort Three</button>
        <button class="button button-small sort-filter" data-filter=".sort-category-4">Sort Four</button>
        <button class="button button-small sort-filter" data-filter=".another-category">Varied Sort</button>
    </div>

    <div class="sort-container">
        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3"></div>
        <div class="sort-item sort-category-4 another-category"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1 another-category"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4"></div>

        <div class="sort-item sort-category-1"></div>
        <div class="sort-item sort-category-2 another-category"></div>
        <div class="sort-item sort-category-3 another-category"></div>
        <div class="sort-item sort-category-4 another-category"></div>
    </div>
</div>

<script type="text/javascript">
    $('.sortables').sortables({
        selectors: {
            filter: '.sort-filter'
        }
    });
</script>

{% endhighlight %}
