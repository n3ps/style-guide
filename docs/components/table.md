---
title: Table
description: Description goes here
group: components
---

# Table
Tables are styled by adding the class `table` to any `<table>` element.

### Example: Basic

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>Patient ID</th>
      <th>Patient Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bruce Wayne</td>
      <td>Approved</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Clark Kent</td>
      <td>Pending</td>
    </tr>
  </tbody>
</table>
{% endexample %}


### Example: Multi-line, compressed

{% example html %}
<table class="table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item that takes <br> two lines</td>
      <td>One line item</td>
      <td>One line item</td>
    </tr>
    <tr>
      <td>Item that takes <br> two lines</td>
      <td>One line item</td>
      <td>One line item</td>
    </tr>
  </tbody>
</table>
{% endexample %}

### Example: Truncated long-text
{% example html %}
<table class="table truncate" style="max-width: 400px;">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Short line</td>
      <td>The quick brown fox jumps over the lazy dog the quick brown
      fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</td>
    </tr>
    <tr>
      <td>Short line</td>
      <td>The quick brown fox jumps over the lazy dog the quick brown
      fox jumps over the lazy dog the quick brown fox jumps over the lazy dog</td>
    </tr>
  </tbody>
</table>
{% endexample %}