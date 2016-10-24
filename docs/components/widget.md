---
layout: default
title: Widgets
description: Description goes here
group: components
---

# Widget
Widgets are the basic building blocks.

### Example: Basic

{% example html %}

<div class="widget">
  <div class="widget-header">Widget Header</div>
  <div class="widget-body">Widget Body</div>
</div>

{% endexample %}

### Example: Linked and with icon

{% example html %}

<div class="widget">
  <div class="widget-header">
    <v-icon icon="sample"></v-icon>
    <a href="#">Click me</a>
  </div>
  <div class="widget-body">Widget Body</div>
</div>

{% endexample %}