---
layout: home
---
<div class="columns">
    {% for node in site.pages %}
        {% if node.title %}
            <section class="column one-third">
                <a class="card docs-card" href="{{node.url}}">
                    <div class="card-banner" style="background-image: url('https://patterns.forcir.com/v1/{{ node.title | slugify }}');"></div>
                    <header class="card-title">{{node.title}}</header>
                </a>
            </section>
        {% endif %}
    {% endfor %}
</div>
