---
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
<div ng-app="docsApp">
{% example html %}

<div class="widget">
  <div class="widget-header">
    <v-icon icon="diagnosis"></v-icon> <a href="#">Diagnosis</a>
  </div>
  <div class="widget-body">Widget Body</div>
</div>

{% endexample %}
</div>