---
title: Widgets
description: Description goes here
group: components
---

# Widget
Widgets are basic building blocks. Add `.widget-header` to get a vertically centered header. Add an optional `.widget-body` to get padded content.

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